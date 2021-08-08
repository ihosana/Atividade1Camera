import React, { Component } from 'react'
import { View, Text, Button, Image, ScrollView, TextInput, CheckBox, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Itens from '../../component/Itens';
import Item from '../../component/Item';
import Sobre from '../Sobre';
import Banco from '../../component/Banco';
import { RNCamera } from 'react-native-camera';
import Cadastro from '../Home/Cadastro';
import Status from './Status';
import CameraRoll from "@react-native-community/cameraroll";
class Listagem extends Component {
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
  cadastrar(nome, finalidade, valor, image){
        const db = new Banco(); 
        const item = new Item (nome, finalidade, valor, image)
        db.add(item);
        this.listar();
    };
  
    render() {
        let back = require('../../img/img-15.jpeg');
        return (
         <View>
                <View style={stylemobile.papergray}></View>                
         <Image style={{width:360, height:515, marginLeft:0}} source={back}/>  
        
           <View style={stylemobile.papergray}>
            
            <ScrollView>
          
            <View>
    
        
        {this.state.lista.map(item => (
            <Status key={item.id}
              id={item.id}
              nome={item.nome}
              finalidade={item.finalidade}
              image={item.image}
              valor={item.valor}
           
            ></Status>
          ))}
          </View> 
          </ScrollView>
            </View>
           </View>
    
        );
    }
}
export default Listagem; 
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
    }
  })
              