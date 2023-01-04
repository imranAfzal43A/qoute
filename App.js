import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import axios from 'axios';
export default function App() {
  const [imgUrl, setImageurl] = useState(null);
  const [newImage, setNewImage] = useState(false)
  const getImage = async () => {
    try {
      await axios.get('https://random.imagecdn.app/v1/image').then((imgUrl) => { setImageurl(imgUrl) })
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getImage();
  }, [newImage])
  return (
    <View style={styles.container}>
      <Image style={{ width: 100, height: 100 }} source={imgUrl} />
      <Pressable onPress={() => setNewImage(!newImage)} ><Text>Get new Image</Text></Pressable>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
