
  import React, {PureComponent} from 'react';
  import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
  import { RNCamera } from 'react-native-camera';
  import CameraRoll from "@react-native-community/cameraroll";

  export default class Camera extends PureComponent {
    render() {
      return (
        <View style={styles.container}>
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
      );
    }

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
          this.setState({image: data.uri});
      
         
      }
    };
      
  }

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
