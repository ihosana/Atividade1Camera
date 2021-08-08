import React,{Component} from 'react';
import { ViewBase,View, Text, DevSettings, Image } from 'react-native';
import Banco from './Banco';
import Item from './Item';
import Home from '../pages/Home/index';
export default class Itens extends Component{
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
        this.lista = [] 
        this.listar(); 
      
      }
    listar(){
        const db = new Banco();
        db.listar().then(say =>{
            this.setState({ lista:say})
        })
    }
    cadastrar(nome, finalidade, valor, image){
        const db = new Banco(); 
        const item = new Item (nome, finalidade, valor, image)
        db.add(item);
        DevSettings.reload();
    }
    render()
  {
      return(
          <View>
             <Text style={{marginTop:10, fontSize:17, marginLeft:10}}>ID:{this.props.id}</Text>
           <Text style={{marginTop:10, marginLeft:10, fontSize:16}}>Finalidade:{this.props.finalidade}</Text>
            <Text style={{marginTop:10, marginLeft:10, fontSize:16}}>Valor:{this.props.valor}</Text> 
              <Text>{this.state.image}</Text>            
            <Image style={{width:280, height:180,marginLeft:10,  marginTop:0}} source={{uri: this.props.image}}/>
    
          </View>
      );
  }
}