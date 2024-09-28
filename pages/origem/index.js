import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const img = require('../../assets/img/bee.png');
const img2 = require('../../assets/img/origem.png');
const onda = require('../../assets/img/onda.png');


export default function Local() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Image source={img} style={styles.icon} />
        <Text style={styles.title}>Origem do Sushi</Text>

        <Text style={styles.text}>
          O sushi, criado há milhares de anos, tem uma forte influência na união entre pessoas. 
          Ele possui o poder de conectar amantes de sushi, como um rolinho bem feito de salmão e alga.
        </Text>

        <Image source={img2} style={styles.icon2} />
        <Text style={styles.title2}>A Vida com Sushi é Maravilhosa</Text>

        <Text style={styles.text}>
          Quando se trata de experiências culinárias, poucas coisas conseguem rivalizar com a alegria de saborear sushi.
          A vida com sushi é uma jornada repleta de deliciosas surpresas, texturas intrigantes e sabores que dançam no paladar.
        </Text>


        <Image source={onda} style={styles.onda} />
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

  icon: {
    height: 370,
    width: 385,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  icon2: {
    width: 300,
    height: 360,
    backgroundColor: '#e6ccb3',
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 24,
    color: '#e6ccb3',
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  title2: {
    fontSize: 22,
    color: '#c71127',
    marginVertical: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.1, height: 1 },
    textShadowRadius: 3,
  },

  text: {
    fontSize: 16,
    color: '#333',
    textAlign: "justify",
    marginHorizontal: 20,
    marginBottom: 15,
  },

  onda:{
   
    resizeMode: 'contain',
    textAlign: 'center',
   
  },

});
