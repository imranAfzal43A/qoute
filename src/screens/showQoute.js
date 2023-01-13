import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppBar, ActivityIndicator } from "@react-native-material/core";
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import styles from '../styles';
const addUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-5205427700494339/2255715408';
export default function ShowQoute() {
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);
    const [qiDAta, setQIdata] = useState([]);
    const getQ = async () => {
        setLoading(true)
        try {
            const data = []
            for (let i = 0; i < 10; i++) {
                const qoute = await axios.get('https://api.quotable.io/random')
                const qiObj = {
                    id: qoute.data._id,
                    author: qoute.data.author,
                    content: qoute.data.content
                }
                data[i] = qiObj;
            }
            data.push({ id: 'show' })
            setLoading(false);
            setQIdata(data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getQ();
    }, [refresh])
    function qiRender({ item }) {
        return (
            item.id !== 'show' ?
                <View style={styles.Qou} >
                    <Text style={styles.content}>
                        "{item.content}"
                    </Text>
                    <Text style={styles.author}>
                        --{item.author}
                    </Text>
                </View>
                : <TouchableOpacity style={styles.Qou} onPress={() => setRefresh(!refresh)}><Text style={{ color: '#7B2869', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }} >Tap to get More</Text></TouchableOpacity>
        )
    }
    return (
        <>
            <AppBar
                style={{ paddingTop: 15, backgroundColor: '#fff' }}
                titleStyle={{ color: '#7B2869', fontWeight: 'bold', paddingTop: 10, alignSelf: 'center' }}
                title='Quote'
            />
            <View style={styles.container}>
                <Text style={styles.title} >Motivational Quotes</Text>
                <View style={{ flexDirection: 'row' }}>
                </View>
                {!loading ?
                    <FlatList horizontal={true} data={qiDAta} renderItem={qiRender} keyExtractor={(item) => item.id} />
                    : <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size={'large'} color='white' />}
            </View>
            <StatusBar style='auto' />
            <BannerAd
                unitId={addUnitId}
                size={BannerAdSize.FULL_BANNER}
            />
        </>
    )
}