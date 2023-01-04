import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7B2869',
        alignItems: 'center',
    },
    title: { fontSize: 22, fontWeight:'bold',padding: 10,color:'white' },
    list: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 5,
        width: 200, height: 300, borderRadius: 15,
    },
    imgAuthor: { fontSize: 14, fontWeight: 'bold',padding:4, bottom: 10, position: 'absolute', color: 'white' },
    img: { width: 200, height: 300, borderRadius: 15,borderColor:'white',borderWidth:1, },
    surface: { width: '80%', height: 230, borderRadius: 10, backgroundColor: 'white', margin: 10 },
    content: { fontSize: 14, fontWeight: 'bold', alignSelf: 'center', padding: 20 ,color:'#7B2869'},
    author: { fontSize: 18, fontWeight: 'bold', bottom: 10, position: 'absolute', alignSelf: 'center',color:'#7B2869' }
})
export default styles;