import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { ListItem, Header } from 'react-native-elements'
import { RFValue } from "react-native-responsive-fontsize";
import db from '../Config'
import firebase from 'firebase'

export default class AddRecipeScreen extends React.Component{

constructor(){
  super();
  this.state={
    name:'',
    ingredients:'',
    procedure:'',
  }
}

addRecipe=()=>{
  db.collection('recipes').add({
    name:this.state.name,
    ingredients:this.state.ingredients,
    procedure:this.state.procedure,
  })
}

  render(){
    return(
     <View style={styles.container}>

     <Header
backgroundColor={'#F0937C'}
centerComponent={{
            text: 'Add Recipes',
            style: { color: '#580000',fontWeight: 'bold', fontSize: 20, marginTop:30, marginBottom:30 },
          }}
          bottomDivider
/>

     <TextInput
     style={styles.formInput}
     placeholder='Recipe name'
    onChangeText={(text)=>{
      this.setState({
        name:text
      })
    }}
     />

      <TextInput
      style={styles.formInput}
     placeholder='Ingredients'
    onChangeText={(text)=>{
      this.setState({
       ingredients:text
      })
    }}
     />

      <TextInput
      style={styles.formInput}
     placeholder='Procedure'
    onChangeText={(text)=>{
      this.setState({
        procedure:text
      })
    }}
     />

<TouchableOpacity
style={styles.button}
onPress={this.addRecipe}
>
<Text style={{color:'white'}}>Submit</Text>
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
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
     button:{
       marginLeft:120,
       marginTop:10,
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
    formInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ff7150",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14),
    marginTop: RFValue(14),
  },
});