import { Dimensions, StyleSheet } from "react-native";
const sc = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7B2869',
    },
    title: { fontSize: 22, fontWeight: 'bold', padding: 10, color: 'white', alignSelf: 'center' },
    Qou: { alignSelf: 'center', alignContent: 'center', justifyContent: 'center', backgroundColor: 'white', width: sc.width / 1.1, height: sc.width / 1.4, margin: 4, borderRadius: 15 },
    content: { fontSize: 20, fontWeight: 'bold', alignSelf: 'center', padding: 20, color: '#7B2869' },
    author: { fontSize: 18, fontWeight: 'bold', bottom: 10, position: 'absolute', alignSelf: 'center', color: '#7B2869' }
})
export default styles;