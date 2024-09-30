import { StatusBar } from 'expo-status-bar';
import { useLoadFonts } from '../../componentes/fonts';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const card = require('../../assets/img/card-1.png');
const card2 = require('../../assets/img/card-2.png');
const card3 = require('../../assets/img/card-3.png');

export default function Cardapio(){
  const fontsLoaded = useLoadFonts();
  return (
    <ScrollView>
    <StatusBar style='light'/>
    <View style={styles.container}>
    <Text style={styles.tittle}>Conheca me</Text>
    <View style={styles.list}>
    <View style={styles.imageContainer}>
           <TouchableOpacity>
             <Image source={card3} style={styles.icon} />
           </TouchableOpacity>

           <View style={styles.textContainer}>
             <Text style={styles.text1}>恋人のための寿司</Text>
             <Text style={styles.text}>Sushi para amantes</Text>
           </View>
         </View>

         <View style={styles.imageContainer}>
           <TouchableOpacity>
             <Image source={card2} style={styles.icon} />
           </TouchableOpacity>

      
           <View style={styles.textContainerr}>
             <Text style={styles.text2}>ソリティアの寿司</Text>
             <Text style={styles.text}>Sushi para amigos</Text>
           </View>
         </View>

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
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '15%',
    // paddingBottom: '10%'
  },
  tittle: {
        fontSize: 30,  
           color: '#c71127',
            fontFamily: 'japona',
            textAlign: 'center',
            textShadowColor: '#000',   // Cor da sombra (preta neste caso)
  textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
  textShadowRadius: 4, 
  },

  icon: {
    height: 200,
    width: 380,
    
    marginBottom: 10,
  },

  imageContainer: {
    position: 'relative',
    top: 30
  },

  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 100,
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainerr: {
    position: 'absolute',
    top: 0,
    left: 110,
    right: 0,
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },

  text1: {
    color: 'white',
    fontSize: 12,
    right: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },

  text2: {
    color: 'white',
    fontSize: 12,
    left: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  icon2:{
    height: 200,
    width: 380,
    
    marginBottom: 10,

  },
});

// export default function Cardapio() {
//   return (
//     <View style={styles.container}>

//       <Text style={{ fontFamily: 'japona', fontSize: 24,  }}>Conheça-me</Text>

//       <View>

//         <View style={styles.imageContainer}>
//           <TouchableOpacity>
//             <Image source={card3} style={styles.icon} />
//           </TouchableOpacity>

//           <View style={styles.textContainer}>
//             <Text style={styles.text1}>恋人のための寿司</Text>
//             <Text style={styles.text}>Sushi para amantes</Text>
//           </View>
//         </View>

//         <View style={styles.imageContainer}>
//           <TouchableOpacity>
//             <Image source={card2} style={styles.icon} />
//           </TouchableOpacity>

//           <View style={styles.textContainerr}>
//             <Text style={styles.text2}>ソリティアの寿司</Text>
//             <Text style={styles.text}>Sushi para amigos</Text>
//           </View>
//         </View>

//         <View style={styles.imageContainer}>
//           <TouchableOpacity>
//             <Image source={card} style={styles.icon} />
//           </TouchableOpacity>

//           <View style={styles.textContainer}>
//             <Text style={styles.text1}>ソリティアの寿司</Text>
//             <Text style={styles.text}>Sushi para solitários</Text>
//           </View>
//         </View>

//       </View>

//     </View>
//   );
// }