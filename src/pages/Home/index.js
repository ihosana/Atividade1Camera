
import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TextInput, CheckBox, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Camera from '../Camera/index';
import Banco from '../../component/Banco';
import App from '../../../App';
import Cadastro from './Cadastro';
import Item from '../../component/Item';
import Itens from '../../component/Itens';
import { TestScheduler } from 'jest';



function Home({ navigation }) {
  
  let back = require('../../img/img-1.jpeg');

  return (
    
    <View>
  
      <ScrollView>
        <Image style={{ width: '100%', height: 520, margin: 0, marginBottom: 0 }}
          source={back} />
        <View style={styleicon.papelcinza}>
        </View>
        <View style={styleicon.orientaform}>
          <Text style={{ fontSize: 30, alignItems: "center", color: "white" }}>Cadastro</Text>
          <View style={styleicon.preenchimento}>
            <TextInput onChangeText={(nome) => { this.setState({ nome: nome }) }} style={styleicon.inputs} placeholder="Insira o nome"></TextInput>
            <TextInput onChangeText={(finalidade) => { this.setState({ finalidade: finalidade }) }} style={styleicon.inputs} placeholder="Insira a finalidade"></TextInput>
            <TextInput onChangeText={(valor) => { this.setState({ valor: valor }) }} style={styleicon.inputs} placeholder="Insira o Valor"></TextInput>
            <TextInput onChangeText={(image) => { this.setState({ image: image }) }} style={styleicon.inputs} placeholder="Insira o tipo"></TextInput>

          </View>
          <View >
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity  onPress={() => 
              {this.cadastrar(this.state.nome, this.state.finalidade, this.state.valor, this.state.image) }} onPress={() => navigation.navigate('Vitrine',
               {  nome: "", finalidade: "", valor: "", image:"", item:[], lista:[],})} 
               style={{ borderRadius: 15, width: 100, padding: 15, marginTop: 2, marginRight: 20, borderColor: "navajowhite", borderWidth: 1.4 }}>
                <Text style={{ color: "navajowhite", fontSize: 14 }}>
                  Cadastrar
                </Text>
              </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')} style={{ borderRadius: 15, width: 100, padding: 15, marginTop: 2, borderColor: "navajowhite", borderWidth: 2 }}>
                <Text style={{ color: "navajowhite", fontSize: 14 }}>
                  Tirar foto
                </Text>
              </TouchableOpacity>
          
            </View>
           
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

export default Home;


const styleicon = StyleSheet.create({
  preenchimento: {
    width: 240,
    justifyContent: 'center', borderColor: "black", marginTop: 0,
    marginTop: 10,
    padding: 13,
    color: "white",
  },
  inputs: {
    backgroundColor: "white",
    height: 40,
    marginBottom: 10,
    borderRadius: 5
  },
  papelcinza: {
    backgroundColor: "black",
    borderWidth: 0.4,
    width: 320,
    height: 400,
    padding: 1,
    marginLeft: 22,
    marginTop: 30,
    opacity: 0.5,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  orientaform: {
    width: 300,
    height: 420,
    padding: 10,
    marginLeft: 30,
    marginTop: 10,

    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }

});