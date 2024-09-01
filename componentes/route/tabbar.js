import * as React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Home from '../../pages/home';
import Cardapio from '../../pages/conhecame';
import Local from '../../pages/origem';


const HIcon = require('../../assets/img/sushi1.png');
const CIcon = require('../../assets/img/sushi2.png');
const LIcon = require('../../assets/img/sushi3.png');

const Tab = createBottomTabNavigator();

export default function TabBar() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 40,
                right: 40,
                borderRadius: 30,
                height: 50,
                width:300,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.75,
                shadowRadius: 5,
                backgroundColor:'#000',
                alignItems:'center',
            }
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        if (focused) { // se ele estiver focado
                            return (
                                <View style={styles.box}>
                                    <Image source={HIcon} style={styles.icon} />
                                    <Text style={styles.title}>Home</Text>
                                </View>
                            );
                        }
                        // se n tiver interação
                        return (
                            <View style={styles.box}>
                                <Image source={HIcon} style={styles.icon} />
                            </View>
                        )

                    }
                }} />


            <Tab.Screen name='Cardapio' component={Cardapio}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <View style={styles.box}>
                                    <Image source={CIcon} style={styles.icon} />
                                    <Text style={styles.title}>Conheça-me</Text>
                                </View>
                            );
                        }
                        return (
                            <View style={styles.box}>
                                <Image source={CIcon} style={styles.icon} />

                            </View>
                        );
                        }
                    }}/>

                    <Tab.Screen name='Local' component={Local}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => {
                                if(focused){
                                    return (
                                        <View style={styles.box}>
                                            <Image source={LIcon} style={styles.icon} />
                                            <Text style={styles.title}>Origem</Text>
                                        </View>
                                    )
                                }
                                return(
                                    <View style={styles.box}>
                                        <Image source={LIcon} style={styles.icon} />
                                    </View>
                                );
                            }
                        }}/>



        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        height: 50,
        width: 50,
    },

 title:{
    fontSize: 14,
    color:'#c71127',
    top:10,
 }
});