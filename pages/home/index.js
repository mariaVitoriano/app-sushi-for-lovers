import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';
import { useLoadFonts } from '../../componentes/fonts';
import * as Animatable from 'react-native-animatable';

const Foto = require('../../assets/img/inicialFoto.png');
const juntos = require('../../assets/img/juntos.png');
const nori = require('../../assets/img/nori.png');
const camas = require('../../assets/img/camas.png');
const pote = require('../../assets/img/pote.png');
const pessoas = require('../../assets/img/pessoas.png');

 
export default function Home(){
  const fontsLoaded = useLoadFonts();
return(
  <Animatable.View
      animation={'fadeInUp'}
      delay={400}
      style={styles.container}
    >
  <ScrollView>
    <StatusBar style='light'/>
      <View style={styles.container}>

      <Text style={{ 
            fontFamily: 'japona', 
             fontSize: 30,  
           color: '#c71127',
            fontFamily: 'japona',
            textAlign: 'center',
            textShadowColor: '#000',   // Cor da sombra (preta neste caso)
  textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
  textShadowRadius: 4, 
             }}>Sushi for lovers </Text>
          <Image source={Foto} style={styles.img} />
          <View style={styles.card5}>
            </View>

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '12%',
    paddingBottom: '10%'
  },
  text: {
        fontSize: 18,
        textAlign: "justify",
        margin: 20,
      },
      img: {
            height: 400,
            width: 378,
            resizeMode: 'contain',
            textAlign: 'center',
          },
           // Estilo dos cards
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
     color:'#ffffff'
   },
      roda:{
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
      },
      quote: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: '#e6ccb3',
        borderRadius:20,
      },
      quot:{
        fontSize: 18,
        fontStyle: 'italic',
        color: '#f6f6f6',
        marginBottom: 10,
        textAlign: 'center'
      },
      container1:{
       backgroundColor:'white',
       top:0.0
      },
    
});

// export default function Home() {
//   const fontsLoaded = useLoadFonts();
//   return (
//     <Animatable.View
//       animation={'fadeInUp'}
//       delay={400}
//       style={styles.container}
//     >
//       <SafeAreaView>
//         <StatusBar/>
//         <ScrollView>

//           <Text style={{ 
//             fontFamily: 'japona', 
//             fontSize: 24,  
//             color: '#c71127',
//             fontFamily: 'japona',
//             textAlign: 'center',
//             }}>Sushi for lovers</Text>
//           <Image source={Foto} style={styles.img} />

//           <Text style={styles.text}>
//             O sushi criado a milhares de anos, tem em sua influência o grande poder de unir pessoas.
//             O poder de encontrar amantes de sushi e uni-los, bem enrolados igual
//             um sushi de salmão e alga.
//           </Text>

//           {/* Card com imagem e texto */}
//           <View style={styles.card1}>
//             <Image source={nori} style={styles.cardImage} />
//             <Text style={styles.cardText}>Delicioso Nori</Text>
//           </View>

//           <View style={styles.card2}>
//             <Image source={pote} style={styles.cardImage} />
//             <Text style={styles.cardText}>Pote Especial</Text>
//           </View>

//           <View style={styles.card3}>
//             <Image source={camas} style={styles.cardImage} />
//             <Text style={styles.cardText}>Camas Macias</Text>
//           </View>


//           <Image source={pessoas} style={styles.roda} />
//           <View style={styles.quoteContainer}>
//   <Animatable.Text animation="fadeIn" delay={200} style={styles.quote}>
//     "Sushi é mais do que comida, é uma experiência."
//   </Animatable.Text>
//   <Animatable.Text animation="fadeIn" delay={400} style={styles.quote}>
//     "Compartilhar sushi é compartilhar amor."
//   </Animatable.Text>
//   <Animatable.Text animation="fadeIn" delay={600} style={styles.quot}>
//     "Envolvidos como um sushi, unidos para sempre."
//   </Animatable.Text>
// </View>


//         </ScrollView>
//       </SafeAreaView>
//     </Animatable.View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   img: {
//     height: 400,
//     width: 378,
//     resizeMode: 'contain',
//     textAlign: 'center',
//   },

//   title: {
//     top:30,
//     fontSize: 24,
//     color: '#c71127',
//     fontWeight: 'bold',
//     fontFamily: 'japona',
//     textAlign: 'center',

//   },

//   text: {
//     fontSize: 18,
//     textAlign: "justify",
//     margin: 20,
//   },

//   // Estilo dos cards
//   card1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#010101',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 7,
//     elevation: 3,
//     marginHorizontal: 20,
//   },
//   card2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e6ccb3',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3,
//     marginHorizontal: 20,
//   },
//   card3: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#c71127',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3,
//     marginHorizontal: 20,
//   },

//   cardImage: {
//     width: 80,
//     height: 80,
//     resizeMode: 'contain',
//     marginRight: 10,
//   },

//   cardText: {
//     fontSize: 18,
//     flex: 1,
//     color:'#ffffff'
//   },
//   roda:{
//     height: 500,
//     width: 380,
//     resizeMode: 'contain',
//     textAlign: 'center',
    
//   },

//   quoteContainer: {
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
   
//     marginHorizontal: 20,
//     alignItems: 'center',
//   },
//   quote: {
//     fontSize: 17,
//     fontStyle: 'italic',
//     color: '#333',
//     marginBottom: 10,
//     textAlign: 'center',
//     backgroundColor: '#e6ccb3',
//     borderRadius:20,
//   },
//   quot:{
//     fontSize: 18,
//     fontStyle: 'italic',
//     color: '#f6f6f6',
//     marginBottom: 10,
//     textAlign: 'center'
//   },
  
// });
