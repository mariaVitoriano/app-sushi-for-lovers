import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';



const img = require('../../assets/img/bee.png');

const img2 = require('../../assets/img/origem.png');


export default function Local(){
    return (
      <ScrollView>
        <View style={styles.container}>

        <Image source={img} style={styles.icon} />
        <Text style={styles.title}>Origem do Suhi</Text>



        <Text style={styles.text}>
        O sushi criado a milhares de anos, tem em sua influência o grande poder de unir pessoas. 
        O poder de encontrar amantes de sushi e uni-los, bem enrolados igual 
        um sushi de salmão e alga.</Text>

     
      <Image source={img2} style={styles.icon2} />
      <Text style={styles.title2}>A Vida com Sushi é Maravilhosa</Text>
      <Text style={styles.description}>Quando se trata de experiências culinárias, poucas coisas conseguem rivalizar com a alegria de saborear sushi.
       A vida com sushi é uma jornada repleta de deliciosas surpresas, texturas intrigantes e sabores que dançam no paladar.</Text>
   



      </View>
 
      
      </ScrollView>
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
      marginBottom:5
     },

     icon2:{
      height: 270,
      width: 260,
      width: 300,
      height: 360,
      backgroundColor: '#e6ccb3',
      borderRadius: 10,
      padding: 20,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  
     
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
    },

   
    image: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    title2: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign:'center',
      marginBottom:10,
      color:'#c71127',
      fontWeight:'bold',
      
        textShadowColor: '#000', // Cor da sombra
        textShadowOffset: { width: 0.1, height: 1 }, // Deslocamento da sombra
        textShadowRadius: 3, // Desfoque da sombra
        

      
    },
    description: {
      fontSize: 14,
      color: '#666',
      fontSize: 14,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign:'justify',
      marginBottom:10,
      margin:10,
    },

  });