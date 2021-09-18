import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Banco from './src/component/Banco';
import Camera from './src/pages/Camera';
import Sobre from './src/pages/Sobre/index';
import Cadastro from './src/pages/Home/Cadastro';
import Listagem from './src/pages/Vitrine/Listagem';
import { TextComponent } from 'react-native';
const tela = createStackNavigator();
const Tab = createBottomTabNavigator();
const icons = {

  Sobre: {
    name: 'ios-home'
  },

};

const tema = {
  dark: false,
  colors: {
    primary: 'rgb(242, 242, 80)',
    background: 'rgb(290, 290, 290)',
    card: "pink",
    text: 'rgb(255, 255, 255)',
    border: 'rgb(200, 200, 200)',
  },
};
class App extends Component {

  render() {

    return (
      /* Abre container da navegação */

      <NavigationContainer>
        <tela.Navigator
        >
          <tela.Screen name="Sobre" component={Sobre}
            options={{
              title: 'Mobizem',
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "navajowhite",
            }} />
          <tela.Screen name="Listagem" component={Listagem}
            options={{
              title: 'Listagem',
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "navajowhite"
            }} />
          <tela.Screen name="Cadastro" component={Cadastro}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "navajowhite"
            }} />

          <tela.Screen name="Camera" component={Camera}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "navajowhite"
            }} />
        </tela.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;