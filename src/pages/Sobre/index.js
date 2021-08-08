
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Itens from '../../component/Itens';
import Item from '../../component/Item';
import Cadastro from '../Home/Cadastro';
import Listagem from '../Vitrine/Listagem';
import Status from '../Vitrine/Status';
function Sobre({ navigation }) {

  let back = require('../../img/item-18.jpeg');
  return (
    <View>
  
      <Image style={{ width: "100%", height: 520 }}
        source={back} />
      <View style={stylemobile.papergray}>

      </View>
      <View style={stylemobile.orientaform}>
        <Text style={{ color: "white", fontSize: 30, marginTop:0 }}>
          Bem -vindos!
     </Text>
        <View style={{marginTop:45, flexDirection:"row"}}>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={{ borderRadius: 15, width: 107,marginRight:20, padding: 15, marginTop: 0, borderColor: "navajowhite", borderWidth: 0.9 }}>
            <Text style={{ color: "navajowhite", fontSize: 14 }}>
              Cadastro
   </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Listagem')} style={{ borderRadius: 15, width: 100, padding: 17, marginTop: 0, backgroundColor: "navajowhite", opacity: 0.9 }}>
            <Text style={{ color: "black", fontSize: 14 }}>
              Listagem
   </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default Sobre;

const stylemobile = StyleSheet.create({
  papergray: {
    backgroundColor: "black",
    borderWidth: 0.4,
    marginTop: 0,
    width: "100%",
    height: 540,

    opacity: 0.6,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  orientaform: {
    width: 300,
    height: 420,
    padding: 10,
    marginLeft: 30,
    marginTop: 20,

    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
