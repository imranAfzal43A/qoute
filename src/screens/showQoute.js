import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Surface, AppBar, ActivityIndicator } from "@react-native-material/core";
import { Text, View, Image, TouchableOpacity, FlatList, Pressable } from 'react-native';
import axios from 'axios';
import styles from '../styles';
export default function ShowQoute() {
    const [showQoute, setShowqoute] = useState(false);
    const [author, setAuthor] = useState(null);
    const [content, setContent] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);
    const [qiDAta, setQIdata] = useState([]);
    const getImage = async () => {
        setLoading(true)
        try {
            const data = []
            for (let i = 0; i < 6; i++) {
                const img = await axios.get('https://random.imagecdn.app/v1/image')
                const qoute = await axios.get('https://api.quotable.io/random')
                const qiObj = {
                    id: qoute.data._id,
                    imgU: img.data,
                    author: qoute.data.author,
                    content: qoute.data.content
                }
                data[i] = qiObj;
            }
            setLoading(false);
            setQIdata(data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getImage();
    }, [refresh])
    function qiRender({ item }) {
        return (
            <View style={styles.list}>
                <TouchableOpacity onPress={() => {
                    setAuthor(item.author);
                    setContent(item.content);
                    setShowqoute(!showQoute);
                }} >
                    <Image style={styles.img} source={{ uri: item.imgU }} />
                    <Text style={styles.imgAuthor}>
                        {item.author}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <>
            <AppBar
                style={{ paddingTop: 15, backgroundColor: '#fff' }}
                titleStyle={{ color: '#7B2869', fontWeight: 'bold', paddingTop: 10 }}
                title='Qoute'
                trailing={() => <TouchableOpacity style={{ padding: 10, marginTop: 10 }} onPress={() => setRefresh(!refresh)}><Image style={{ width: 20, height: 20 }} source={require('../../assets/refresh.png')} /></TouchableOpacity>}
            />
            <View style={styles.container}>
                <Text style={styles.title} >Qoute Motivation</Text>
                {!loading ?
                    <FlatList horizontal={true} data={qiDAta} renderItem={qiRender} keyExtractor={(item) => item.id} />
                    : <ActivityIndicator size={'large'} color='white' />}
                {showQoute ?
                    <Surface elevation={5} style={styles.surface}>
                        <Text style={styles.content}>
                            {content}
                        </Text>
                        <Text style={styles.author}>
                            {author}
                        </Text>
                    </Surface>
                    : null
                }
            </View>
            <StatusBar style='auto' />
        </>
    )
}