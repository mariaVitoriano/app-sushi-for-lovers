import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';



const img = require('../../assets/img/bee.png');


export default function Local(){
    return (
        <View style={styles.container}>

        <Image source={img} style={styles.icon} />
        <Text style={styles.title}>Origem do Suhi</Text>



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
    
    },
     icon:{
      height: 370,
      width: 385,
     },
     title:{
      fontSize: 24,
        color:'#e6ccb3',
        marginBottom:25,
        fontWeight:'bold',
        top:25,
        textShadowColor: '#000', // Cor da sombra
        textShadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra
        textShadowRadius: 3, // Desfoque da sombra
    
    },
    

    text:{
      fontSize: 18,
      textAlign:"justify",
      margin:20,
    }

  });