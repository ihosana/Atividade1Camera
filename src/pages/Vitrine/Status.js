import React, { Component } from 'react'
import { View, Text, Button, Image, ScrollView, TextInput, CheckBox, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

import Item from '../../component/Item';
import Sobre from '../Sobre';
import Banco from '../../component/Banco';
import { RNCamera } from 'react-native-camera';
import Cadastro from '../Home/Cadastro';
import CameraRoll from "@react-native-community/cameraroll";
import Listagem from './Listagem';
class Status extends Component {

  render() {
    return (
      <View >
        <View style={stylemobile.papergray}></View>
        <ScrollView>


          <View style={stylemobile.papelbranco}>
            <Text style={stylemobile.name}>{this.props.nome}</Text>

            <Image style={stylemobile.imagem} source={{ uri: this.props.image }} />
            <Text style={stylemobile.titulo}>ID: {this.props.id}</Text>
            <Text style={stylemobile.subtitle}>Finalidade: {this.props.finalidade}</Text>
            <Text style={stylemobile.subtitle}>Valor: {this.props.valor}</Text>
            <Text style={stylemobile.subtitle}>Imagem:{this.props.image}</Text>

            <TouchableOpacity
              style={stylemobile.button} onPress={() => { this.props.exclua(this.props.id) }}>
              <Text style={stylemobile.texto}>
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    );
  }
}
export default Status;
const stylemobile = StyleSheet.create({
  papergray: {
    width: 300,
    height: 900,
    marginBottom: 200,
    marginTop: 2,
    marginLeft: 50,
    opacity: 0.9,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    marginTop: 18,
    fontSize: 17,
    marginLeft: 20,
    marginBottom: 14
  },
  button: {
    borderRadius: 1,
    height: 46,
    width: 100,
    padding: 11,
    marginTop: 20,
    marginLeft: 190,
    backgroundColor: "peru"
  },
  imagem: {
    width: 280,
    height: 180,
    marginLeft: 10,
    marginTop: 0
  },
  titulo: {
    marginTop: 10,
    fontSize: 17,
    marginLeft: 20
  },
  subtitle: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 16
  },
  texto: {
    color: "white",
    fontSize: 17,
    marginLeft: 13
  },
  papelbranco: {
    backgroundColor: "white",
    width: 300,
    height: 500,
    marginTop: 20
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