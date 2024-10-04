import { StatusBar } from 'expo-status-bar';
import { useLoadFonts } from '../../componentes/fonts';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

const card = require('../../assets/img/card-1.png');
const card2 = require('../../assets/img/card-2.png');
const card3 = require('../../assets/img/card-3.png');
const casal = require('../../assets/img/casalfeliz.jpg');

export default function Cardapio() {
  const fontsLoaded = useLoadFonts();
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedProtein, setSelectedProtein] = useState(null);
  const [selectedTopping, setSelectedTopping] = useState(null);

  return (
    <ScrollView>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <Text style={styles.tittle}>Conheça me</Text>
        <View style={styles.list}>
          {/* Card 1 */}
          <View style={styles.imageContainer}>
            <TouchableOpacity>
              <Image source={card3} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>恋人のための寿司</Text>
              <Text style={styles.text}>Sushi para amantes</Text>
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.imageContainer}>
            <TouchableOpacity>
              <Image source={card2} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.textContainerr}>
              <Text style={styles.text2}>ソリティアの寿司</Text>
              <Text style={styles.text01}>Sushi para amigos</Text>
            </View>
          </View>

          {/* Card 3 */}
          <View style={styles.imageContainer}>
            <TouchableOpacity>
              <Image source={card} style={styles.icon2} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>ソリティアの寿司</Text>
              <Text style={styles.text}>Sushi para solitários</Text>
            </View>
            
          </View>
        </View>

        {/* Nova seção: Monte Seu Sushi */}
        <View style={styles.customSushiContainer}>
          <Text style={styles.customTitle}>Monte seu Sushi</Text>
          <Text style={styles.subTitle}>Escolha seus ingredientes:</Text>

          {/* Escolha de base */}
          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>Base:</Text>
            <TouchableOpacity
              style={[styles.optionButton, selectedBase === 'Arroz' && styles.selectedOption]}
              onPress={() => setSelectedBase('Arroz')}
            >
              <Text style={styles.optionText}>Arroz Tradicional</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionButton, selectedBase === 'Alga' && styles.selectedOption]}
              onPress={() => setSelectedBase('Alga')}
            >
              <Text style={styles.optionText}>Alga</Text>
            </TouchableOpacity>
          </View>

          {/* Escolha de proteína */}
          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>Proteína:</Text>
            <TouchableOpacity
              style={[styles.optionButton, selectedProtein === 'Salmão' && styles.selectedOption]}
              onPress={() => setSelectedProtein('Salmão')}
            >
              <Text style={styles.optionText}>Salmão</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionButton, selectedProtein === 'Atum' && styles.selectedOption]}
              onPress={() => setSelectedProtein('Atum')}
            >
              <Text style={styles.optionText}>Atum</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionButton, selectedProtein === 'Camarão' && styles.selectedOption]}
              onPress={() => setSelectedProtein('Camarão')}
            >
              <Text style={styles.optionText}>Camarão</Text>
            </TouchableOpacity>
          </View>

          {/* Escolha de coberturas */}
          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>Cobertura:</Text>
            <TouchableOpacity
              style={[styles.optionButton, selectedTopping === 'Cream Cheese' && styles.selectedOption]}
              onPress={() => setSelectedTopping('Cream Cheese')}
            >
              <Text style={styles.optionText}>Cream Cheese</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionButton, selectedTopping === 'Gergelim' && styles.selectedOption]}
              onPress={() => setSelectedTopping('Gergelim')}
            >
              <Text style={styles.optionText}>Gergelim</Text>
            </TouchableOpacity>
          </View>

          {/* Botão de confirmação */}
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirmar Personalização</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '15%',
  },
  tittle: {
    fontSize: 45,
    marginBottom: 20,
    color: '#c71127',
    fontFamily: 'japona',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    lineHeight: 50, // Ajuste da altura da linha
    paddingHorizontal: 10, // Adicionando padding horizontal
    flexShrink: 1, // Permite que o texto diminua se necessário
  },
  icon: {
    height: 200,
    width: 380,
    marginBottom: 10,
  },
  imageContainer: {
    position: 'relative',
    top: 30,
  },
  textContainer: {
    position: 'absolute',
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainerr: {
    position: 'absolute',
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: 110,
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    
  },
  text01: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft:90,
    padding: 10,
    
  },

  text1: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  text2: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft:90,
    padding: 10,
  },
  icon2: {
    height: 200,
    width: 380,
    marginBottom: 10,
  },
  icon3: {
    height: 300,
    width: 380,
    marginBottom: 100,
  },
  customSushiContainer: {
    backgroundColor: '#fff',
    padding: 30,
    marginTop: 50,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 100,
    width: 360,
  },
  customTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c71127',
    marginBottom: 20,
    fontFamily: 'japona',
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionContainer: {
    marginVertical: 10,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  optionButton: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: '#c71127',
  },
  optionText: {
    fontSize: 14,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#c71127',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

