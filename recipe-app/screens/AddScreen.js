import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { ListItem, Header } from 'react-native-elements'
import { RFValue } from "react-native-responsive-fontsize";
import db from '../Config'
import firebase from 'firebase'

export default class AddScreen extends React.Component{

constructor(){
  super();
  this.state={
ingredientName:'',
ingredientQuantity:'',
name:'',
amount:'',
docId:'',
  }
}

addIngredients=()=>{

 db.collection('shoppingList').add({
            name: this.state.name,
            amount: this.state.amount,
          })
}

editIngredients=()=>{

  db.collection('shoppingList').where('name','==',this.state.name).get()
    .then(snapshot=>{
      snapshot.forEach(doc => {
        this.setState({docId:doc.id})
     })
  })


console.log(this.state.amount)
 db.collection('shoppingList').doc(this.state.docId).update({
            amount: this.state.quantity,
          })


}

componentDidMount(){
  
            this.setState({
          name:'',
          quantity:'',  
          })
}

render(){
  return(
     <View style={styles.container}>

      <Header
backgroundColor={'#F0937C'}
centerComponent={{
            text: 'Edit Ingredients List',
            style: { color: '#580000',fontWeight: 'bold', fontSize: 20, marginTop:30, marginBottom:30 },
          }}
          bottomDivider
/>

   <TextInput
    style={styles.formInput}
   placeholder='Add name of ingredient'
   onChangeText={(text)=>{
     this.setState({
name: text
     })
   }}
   />

    <TextInput
     style={styles.formInput}
   placeholder='Quantity'
   onChangeText={(text)=>{
     this.setState({
quantity: text
     })
   }}
   />

<TouchableOpacity
 style={styles.button}
onPress={this.addIngredients}
>
<Text style={{color:'white'}}>Add</Text>
</TouchableOpacity>


   <TextInput
    style={styles.formInput}
   placeholder='Name of ingredient'
   onChangeText={(text)=>{
     this.setState({
name: text
     })
   }}
   />

    <TextInput
     style={styles.formInput}
   placeholder='Edit Quantity'
   onChangeText={(text)=>{
     this.setState({
quantity: text
     })
   }}
   />

<TouchableOpacity
 style={styles.button}
onPress={this.editIngredients}
>
<Text style={{color:'white'}}>Edit</Text>
</TouchableOpacity>

    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:"#F7E7DB",
    length:100,
    height:600,
  },
  paragraph: {
    margin: 0,
    fontSize: 16,
   marginTop:-17.5 ,
    textAlign: 'center',
    backgroundColor: '#fffaaf',
marginRight:100,
marginLeft:140,    
  },
      formInput: {
          marginTop:20,
  marginLeft:15,
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ff7150",
    paddingBottom: RFValue(10),
    marginBottom: RFValue(14),
  },
     button:{
       marginLeft:120,
       marginTop:10,
       marginBottom:50,

     paddingTop:0,
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#F0937C",
    color:'white',
 borderColor:'#580000',
borderRadius:100,
borderWidth:1,
    // shadowColor: "#900000",
    //  shadowOffset: {
    //     width: 0,
    //     height: 5
    //   }
  }, 
});