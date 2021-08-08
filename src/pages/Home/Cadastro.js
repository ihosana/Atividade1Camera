import React, { Component } from 'react'
import { View, Text, Button, Image, ScrollView, TextInput, CheckBox, StyleSheet, TouchableHighlight, TouchableOpacity, DevSettings } from 'react-native';
import Itens from '../../component/Itens';
import Item from '../../component/Item';
import Sobre from '../Sobre';
import Banco from '../../component/Banco';
import Listagem from '../Vitrine/Listagem';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import Status from '../Vitrine/Status';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      finalidade: "",
      valor: "",
      image:"",
      item: [],
      lista: [],
    }
    this.listar();
  }
  listar() {
    const db = new Banco();
    db.listar().then(say => {
      this.setState({ lista: say })
    })
  };

  deletar(id) {
    const banco = new Banco();
    banco.deletar(id).then(say => { DevSettings.reload(); })
  };
  cadastrar(nome, finalidade, valor, image) {
    const db = new Banco();
    const item = new Item(nome, finalidade, valor, image)
    db.add(item);
    this.listar();
  };
  render() {
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
              
            <Text>{this.state.image}</Text>
            </View>
            <View >
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}
                  style={{
                    borderRadius: 15, width: 100, padding: 15, marginRight: 20, marginTop: 2,
                    borderColor: "navajowhite", borderWidth: 2
                  }}>
                  <Text style={{ color: "navajowhite", fontSize: 14 }}>
                    Tirar foto
                  </Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => { this.cadastrar(this.state.nome, this.state.finalidade, this.state.valor, this.state.image ) }}
                  style={{ borderRadius: 15, width: 100, padding: 15, marginTop: 2, marginRight: 10, borderColor: "navajowhite", borderWidth: 1.4 }}>
                  <Text style={{ color: "navajowhite", fontSize: 14 }}>
                    Cadastrar
                  </Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
}
export default Cadastro;
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
