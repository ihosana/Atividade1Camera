import React, { Component } from 'react'
import { View, Text, Button, Image, ScrollView, TextInput, CheckBox, StyleSheet, TouchableHighlight, TouchableOpacity, DevSettings } from 'react-native';

import Item from '../../component/Item';
import Sobre from '../Sobre';
import Banco from '../../component/Banco';
import Listagem from '../Vitrine/Listagem';
import { RNCamera } from 'react-native-camera';
import Camera from '../Camera';
import CameraRoll from "@react-native-community/cameraroll";
import Status from '../Vitrine/Status';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      finalidade: "",
      valor: "",
      image: "",
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


  fotografar = async () => {
    if (this.camera) {
      const options = { quality: 0.5, basea64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);

      CameraRoll.save(data.uri);
      this.setState({ image: data.uri })
    }
  };
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1 };
      const data = await this.camera.takePictureAsync(options)
      // Ira abrir uma pequena notificação para o usuário saber que a imagem foi salva
      ToastAndroid.show(data.uri, ToastAndroid.SHORT);
      console.log(data.uri);

      //Salva a imagem
      CameraRoll.save(data.uri);


    }
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

        <ScrollView horizontal={true}>

          <Image style={styleicon.imagem}
            source={back} />
          <View style={styleicon.papelcinza}>
          </View>

          <View style={styleicon.orientaform}>
            <Text style={styleicon.nomecadastro}>Cadastro</Text>
            <View style={styleicon.preenchimento}>
              <TextInput onChangeText={(nome) => { this.setState({ nome: nome }) }} style={styleicon.inputs} placeholder="Insira o nome"></TextInput>
              <TextInput onChangeText={(finalidade) => { this.setState({ finalidade: finalidade }) }} style={styleicon.inputs} placeholder="Insira a finalidade"></TextInput>
              <TextInput onChangeText={(valor) => { this.setState({ valor: valor }) }} style={styleicon.inputs} placeholder="Insira o Valor"></TextInput>

            </View>
            <View >
              <View style={{ flexDirection: 'row' }}>


                <TouchableOpacity onPress={() => { this.cadastrar(this.state.nome, this.state.finalidade, this.state.valor, this.state.image) }}
                  style={styleicon.cadastro}>
                  <Text style={{ color: "navajowhite", fontSize: 14 }}>
                    Cadastrar
                  </Text>
                </TouchableOpacity>

              </View>

            </View>

          </View>
          <View style={styles.conta}>
            <View>
              <View style={styleicon.orientaform}>
                <View style={styleicon.preenchimento}>
                </View>
                <View >

                  <RNCamera
                    ref={ref => {
                      this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}

                    // Irá pedir permissão para acessar a câmera, caso não haja
                    androidCameraPermissionOptions={{
                      title: 'Permissão para usar a câmera',
                      message: 'Nós precisamos da sua permissão para usar a câmera',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancelar',
                    }}
                    // Irá pedir permissão para acessar oge áudio, caso não haja
                    androidRecordAudioPermissionOptions={{
                      title: 'Permissão para usar gravação de áudio',
                      message: 'Precisamos da sua permissão para usar seu áudio',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancelar',
                    }}
                  />
                  <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }} >
                    <TouchableOpacity onPress={this.fotografar.bind(this)} style={styles.capture}>
                      <Text style={{ fontSize: 14 }}> TIRAR FOTO </Text>
                    </TouchableOpacity>
                  </View>
                </View>

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
  nomecadastro: {
    fontSize: 30,
    alignItems: "center",
    color: "white"
  },
  buttonphoto: {

    borderRadius: 15,
    width: 100,
    padding: 15,
    marginRight: 20,
    marginTop: 2,
    borderColor: "navajowhite",
    borderWidth: 2
  },
  inputs: {
    backgroundColor: "white",
    height: 40,

    marginBottom: 10,
    borderRadius: 5
  },
  imagem: {
    width: 370,
    height: 520,
    margin: 0,
    marginBottom: 0
  },
  cadastro: {
    borderRadius: 15,
    width: 100,
    padding: 15,
    marginTop: 2,
    marginRight: 10,
    borderColor: "navajowhite",
    borderWidth: 1.4
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
  conta: {
    flex: 1,
    marginRight: 0,
    marginTop: 0,
    width: 360,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 10,
  },
});
