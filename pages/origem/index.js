import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

const img = require('../../assets/img/bee.png');
const img2 = require('../../assets/img/origem.jpg');
const onda = require('../../assets/img/onda.png');
const loja = require('../../assets/img/loja.jpg');

export default function Local() {
  return (
    <ScrollView>
      <SafeAreaView>
      <View style={styles.container}>

      <Text style={{ 
  fontFamily: 'japona', 
  fontSize: 43,  
  color: '#e6ccb3',
  textAlign: 'center',
  marginBottom: 10,
  textShadowColor: '#000',   // Cor da sombra (preta neste caso)
  textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
  textShadowRadius: 4,  
  top:85
}}>A Origem do sushi</Text>



        <Image source={img} style={styles.icon} />
        <Text style={{ 
  fontFamily: 'japona', 
  fontSize: 30,  
  color: '#c71127',
  textAlign: 'center',
  marginBottom: 10,
  textShadowColor: '#000',   // Cor da sombra (preta neste caso)
  textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
  textShadowRadius: 4,  
}}>Amor milenar</Text>


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

        {/* Onda usada como divisor */}
        <Image source={onda} style={styles.dividerOnda} />

        {/* Frase inspiracional */}
        <View style={styles.quoteBox}>
          <TouchableOpacity>
          <Text style={styles.inspirationalText}>
            "Aprecie cada pedaço como se fosse o último. A vida é feita de momentos únicos, assim como o sushi."
          </Text>
          </TouchableOpacity> 

        </View>
        
        <Image source={loja} style={styles.lol} />
      </View>
      </SafeAreaView>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },

  icon: {
    height: 370,
    width: 388,
    marginBottom: 40,
    resizeMode: 'contain',
  },

  icon2: {
    width: 400,
    height: 260,
    backgroundColor: 'black',
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: 'black',
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
    fontFamily:'japona',
  },

  text: {
    fontSize: 16,
    color: '#333',
    textAlign: "justify",
    marginHorizontal: 20,
    marginBottom: 15,
  },

  dividerOnda: {
    width: 400,
    height: 280,
    resizeMode: 'contain',
    marginVertical: 20,
  },

  quoteBox: {
    backgroundColor: '#f7f3e9',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2.84,
    elevation: 4,
  },

  inspirationalText: {
    fontSize: 18,
    color: '#4a4a4a',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  lol:{
    width:400,
    height:400,
    top:50,
  },
});
