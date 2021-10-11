import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { ListItem, Header } from 'react-native-elements'
import { RFValue } from "react-native-responsive-fontsize";
import db from '../Config'
import firebase from 'firebase'

export default class EditScreen extends React.Component{
constructor(props){
    super(props);
    this.state={
      bread:'',
      beans:'',
      potatoes:'',
      docId:'',
      amount: '',
    }
  }

updateList=()=>{
  db.collection("shoppingList").doc("wEiQzg5Zab1c5MdsAPDF").update({
    amount: this.state.amount
  })
// db.collection("shoppingList").doc(this.state.docId).update({
//     amount: this.state.amount
//   })
}

getDetails=()=>{
//console.log(this.state.foodId)

  db.collection('shoppingList').where('name','==',this.state.foodId).get()
    .then(snapshot=>{
      snapshot.forEach(doc => {
        this.setState({docId:doc.id})
     })
  })
}

componentDidMount(){
  this.getDetails
  console.log(this.state.foodId)
}

  render(){
    return(
      <View style={styles.container}>

 <Text style={styles.paragraph}> Bread</Text> 

<TextInput 
  style={styles.formInput}
  placeholder={"amount"}
keyboardType={"numeric"}
onChangeText={text => {
                this.setState({
                 amount: text
                });
              }}
/>

<TouchableOpacity
onPress={this.updateList()}
style={{borderColor:'#580000',
borderRadius:100,
borderWidth:1,
width:102,
    height:30,
     marginTop:20,
     marginLeft:120,
}}
>
<Text
style={styles.button}
>       Update</Text>
</TouchableOpacity>


      </View>
    )
  }  
}

const styles = StyleSheet.create({
  formInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ff7150",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14)
  },
  container: {
   backgroundColor:"#F7E7DB",
    length:100,
    height:600,
  },
  paragraph: {
    marginLeft: 16,
    marginTop:10,
    marginBottom:10,
    fontSize: 20,
     color:'#580000',
    fontWeight: 'bold',
    textAlign: 'left',  
  },
   button:{
     paddingTop:5,
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#F0937C",
    color:'white',
    borderRadius: 100,
    
    // shadowColor: "#900000",
    //  shadowOffset: {
    //     width: 0,
    //     height: 5
    //   }
  }, 
});