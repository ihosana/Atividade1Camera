import React,{Component} from 'react';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import Status from '../Vitrine/Status';
import { View, Text, Button, Image, ScrollView, TextInput, CheckBox, StyleSheet, TouchableHighlight, TouchableOpacity, DevSettings } from 'react-native';
import Itens from '../../component/Itens';
import Item from '../../component/Item';
import Sobre from '../Sobre';
import Banco from '../../component/Banco';
import Listagem from '../Vitrine/Listagem';
class Camera extends Component {
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


  fotografar = async () =>{
    if(this.camera){
      const options = {quality: 0.5, basea64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      
        CameraRoll.save(data.uri);
      this.setState({image: data.uri})
    }
  };
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1};
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
     <View style={styles.container}>
      <View>
          <View >
          </View>
          <View style={styleicon.orientaform}>
            <View style={styleicon.preenchimento}>
              <Text style={{color:"white"}}>{this.state.image}</Text>
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
            // Irá pedir permissão para acessar o áudio, caso não haja
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
    );
  }
}
export default Camera;
const styleicon = StyleSheet.create({
  preenchimento: {
    width: 240,
    justifyContent: 'center', borderColor: "black", marginTop: 0,
    marginTop: 10,
    padding: 13,
    color: "white",
  },
  nomecadastro:{
    fontSize: 30,
     alignItems: "center", 
     color: "white" 
  },
  buttonphoto:{
    
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
  imagem:{
    width: '100%',
     height: 520,
      margin: 0,
       marginBottom: 0 
  },
  cadastro:{
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
    height: 800,
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
