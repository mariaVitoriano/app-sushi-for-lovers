import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useLoadFonts } from '../../componentes/fonts';



const Foto = require('../../assets/img/inicialFoto.png');

export default function Home(){

    return (
        <View style={styles.container}>
      

      <Text style={{ fontFamily: 'japona', fontSize: 24 }}>Sushi for lovers</Text>

        <Image source={Foto} style={styles.img} />




        <Text style={styles.text}>
        O sushi criado a milhares de anos, tem em sua influência o grande poder de unir pessoas. 
        O poder de encontrar amantes de sushi e uni-los, bem enrolados igual 
        um sushi de salmão e alga.</Text>


  
       
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

    img: {
    height: 300,
    width: 350,
    resizeMode:'contain'
    
  },

  title:{
    fontSize: 24,
      color:'#c71127',
      marginBottom:25,
      fontWeight:'bold',
      fontFamily: 'japona'
  },

  
  text:{
    fontSize: 18,
    textAlign:"justify",
    margin:20,
  }
  });