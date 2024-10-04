import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLoadFonts } from '../../componentes/fonts';
import * as Animatable from 'react-native-animatable';

const Foto = require('../../assets/img/inicialFoto.png');
const nori = require('../../assets/img/nori.png');
const camas = require('../../assets/img/camas.png');
const pote = require('../../assets/img/pote.png');
const pessoas = require('../../assets/img/pessoas.png');

export default function Home() {
  const fontsLoaded = useLoadFonts();

  return (
    <Animatable.View
      animation={'fadeInUp'}
      delay={400}
      style={styles.container}
    >
      <ScrollView>
        <StatusBar style='light' />
        <View style={styles.container}>
          <Text style={styles.title}>Sushi for lovers</Text>
          <Image source={Foto} style={styles.img} />

          <View style={styles.container1}>
            <Text style={styles.text}>
              O sushi criado a milhares de anos, tem em sua influência o grande poder de unir pessoas.
              O poder de encontrar amantes de sushi e uni-los, bem enrolados igual
              um sushi de salmão e alga.
            </Text>

            {/* Card com imagem e texto */}
            <View style={styles.card1}>
              <TouchableOpacity>
                <Image source={nori} style={styles.cardImage} />
              </TouchableOpacity>
              <Text style={styles.cardText}>Para os solitários</Text>
            </View>

            <View style={styles.card2}>
              <TouchableOpacity>
                <Image source={pote} style={styles.cardImage} />
              </TouchableOpacity>
              <Text style={styles.cardText}>Para dividir com alguém especial</Text>
            </View>

            <View style={styles.card3}>
              <TouchableOpacity>
                <Image source={camas} style={styles.cardImage} />
              </TouchableOpacity>
              <Text style={styles.cardText}>Juntos e combinados</Text>
            </View>

            <Image source={pessoas} style={styles.roda} />

            {/* Quotes */}
            <View style={styles.quoteContainer}>
              <Animatable.Text animation="fadeIn" delay={200} style={styles.quote}>
                "Sushi é mais do que comida, é uma experiência."
              </Animatable.Text>
              <Animatable.Text animation="fadeIn" delay={400} style={styles.quote}>
                "Compartilhar sushi é compartilhar amor."
              </Animatable.Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',  // Definindo o fundo branco para o container principal
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '12%',
    paddingBottom: '10%',
  },
  title: {
    fontFamily: 'japona',
    fontSize: 50,
    color: '#c71127',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  img: {
    height: 400,
    width: 378,
    resizeMode: 'contain',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: "justify",
    margin: 20,
    color: '#333',
  },
  container1: {
    backgroundColor: 'white', // Fundo branco para manter consistência
    paddingBottom: 20,
  },
  card1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#010101',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 3,
    marginHorizontal: 20,
  },
  card2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6ccb3',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 20,
  },
  card3: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c71127',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 20,
  },
  cardImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  cardText: {
    fontSize: 18,
    flex: 1,
    color: '#ffffff',
  },
  roda: {
    height: 500,
    width: 380,
    resizeMode: 'contain',
    textAlign: 'center',
  },
  quoteContainer: {
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'white', // Fundo branco para a área de citações
  },
  quote: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#e6ccb3',
    borderRadius: 20,
    padding: 10,
  },
});
