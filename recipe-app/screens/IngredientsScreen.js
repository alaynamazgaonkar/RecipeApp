import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Header } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export default class IngredientsScreen extends React.Component{

constructor(){
  super();
  this.state={
    text:''
  }
}

render(){
  return(
    <View style={styles.container}>

<Header
backgroundColor={'#F0937C'}
centerComponent={{
            text: 'Shopping List',
            style: { color: '#580000',fontWeight: 'bold', fontSize: 20 },
          }}
/>

<TextInput
style={
 styles.formInput
}
placeholder={'Write your shopping list here!'}
onChangeText={(text)=>{
  this.setState({text:text})
}}
value={this.state.text}
/>

    </View>
  );
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
});