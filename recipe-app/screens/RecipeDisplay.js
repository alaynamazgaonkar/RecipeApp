import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';
import db from '../Config';
import firebase from 'firebase';
import localdb from '../localdb';
import styled from '@emotion/styled'
import { RFValue } from "react-native-responsive-fontsize";
//console.log(localdb['cake']['ingredients'][0])

export default class RecipeDisplay extends React.Component {

constructor(props){
  super(props)
  this.state={
itemName: this.props.navigation.getParam('details')['name'],
name:'Cake',
ingredients:'',
procedure:'',
  
  }
}

getData=()=>{
  db.collection('recipes').where('name','==',this.state.itemName).get()
    .then(snapshot=>{
      snapshot.forEach(doc => {
        this.setState({
          name:doc.data().name,
          ingredients:doc.data().ingredients,
          procedure: doc.data().procedure,
          })
     })
  })
}

componentDidMount(){
  this.getData()
}

render(){
  return(
    <View style={styles.container}>

           <Header
backgroundColor={'#F0937C'}
centerComponent={{
            text:    this.state.itemName,
            style: { color: '#580000',fontWeight: 'bold', fontSize: 20 },
          }}
          bottomDivider
/>

<Text style={{fontWeight:'bold', color:'#d1715a', fontSize:16, marginBottom:20, marginTop:10}}>'Ingredients:'+ {this.state.ingredients} </Text>

<Text style={{ color:'#c06049', fontSize:15}}>{this.state.procedure}</Text>
    </View>
  )
}

}

const styles = StyleSheet.create({
    subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#F0937C",
    shadowColor: "#900000",
     shadowOffset: {
        width: 0,
        height: 5
      }
  }, 
 container: {
   backgroundColor:"#F7E7DB",
    length:100,
    height:600,
  },
  paragraph: {
       marginLeft:10,
       marginTop:10,
       marginBottom:10 ,
     paddingTop:0,
    width:120,
    height:25,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#F0937C",
    color:'white',
 borderColor:'#580000',
borderRadius:10,
borderWidth:1,
    // shadowColor: "#900000",
    //  shadowOffset: {
    //     width: 0,
    //     height: 5
    //   } 
  },
});
