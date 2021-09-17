
  import React, { Component } from 'react'
  import { View, Text, Button, Image, ScrollView, TextInput, CheckBox, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
  import Itens from '../../component/Itens';
  import Item from '../../component/Item';
  import Sobre from '../Sobre';
  import Banco from '../../component/Banco';
  import { RNCamera } from 'react-native-camera';
  import Cadastro from '../Home/Cadastro';
  import CameraRoll from "@react-native-community/cameraroll";
  
  class index extends Component {
    constructor(props) { 
          super(props); 
          this.state = { 
            nome: "", 
            finalidade: "", 
            valor: "",
            image:"",
            item:[],
            lista:[],
          } 
          this.listar(); 
        }
      listar(){
          const db = new Banco();
          db.listar().then(say =>{
              this.setState({ lista:say})
          })
      };
  deletar(id){
  const banco = new Banco();
  banco.deletar(id).then(say =>{DevSettings.reload();} )
  }
      render() {
          let back = require('../../img/img-15.jpeg');
          return (
           <View>
  
      <Image style={{width:"100%", height:520}} 
                source = {back}/>
                  <View style={stylemobile.papergray}></View>
              <View style={stylemobile.papergray}>
              <ScrollView>
            
              
              <View style={{backgroundColor:"white", width:300, height:400, marginTop:20}}>
            
   
              <Text style={{marginTop:18, fontSize:17, marginLeft:20}}>Nome:{this.props.nome}</Text>
              <Text style={{marginTop:10}}>{this.state.image}</Text>
            
             
            {/* <Image style={{width:280, height:180,marginLeft:10,  marginTop:0}} source={{uri: this.props.image}}/>*/}
              <Text style={{marginTop:10, fontSize:17, marginLeft:10}}>ID:{this.props.id}</Text>
             <Text style={{marginTop:10, marginLeft:10, fontSize:16}}>Finalidade:{this.props.finalidade}</Text>
              <Text style={{marginTop:10, marginLeft:10, fontSize:16}}>Valor:{this.props.valor}</Text> 
              <TouchableOpacity  onPress={()=> this.deletar}
                 style={{ borderRadius: 1,height:46, width: 100, padding: 11, marginTop: 0, marginLeft: 190, backgroundColor: "peru" }}>
                  <Text style={{ color: "white", fontSize: 17, marginLeft:13 }}>
                    Excluir
                  </Text>
                </TouchableOpacity>
            </View> 
   
       
            </ScrollView>
              </View>
             </View>
      
          );
      }
  }

  export default index; 
  const stylemobile = StyleSheet.create({
      papergray:{
       
         width: 300,
          height: 900,
          marginTop:20,
          marginLeft:30,
          opacity:0.9,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center'
      },
      orientaform:{
        width: 300,
        height: 420,
        padding:10, 
        marginLeft: 30,
         marginTop: 20, 
      position:'absolute',
      justifyContent:'center',
      alignItems:'center'
    }, 
      
    })
        