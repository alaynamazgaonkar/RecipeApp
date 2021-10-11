import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput,  } from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../Config';
import * as firebase from 'firebase';
import { Header } from 'react-native-elements';

export default class ListScreen extends React.Component{

constructor(){
  super()
  this.state={
list:[],
text:''
  }
}

  keyExtractor = (item, index) => index.toString()

renderItem = ( {item, i} ) =>{
    return (
      <ListItem
      style={{color:'#ff0000'}}
        key={i}
         title={item.name}
         subtitle={item.amount}
        //title={this.state.}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
          //     rightElement={
          //   <TouchableOpacity style={styles.button}
          //     onPress ={()=>{
          //       this.setState({
          //       text:item  
          //       })
          //       console.log(this.state.text)
          //       db.collection('list').doc('b3jOsk1lQtDIfK8xf6zn').update({
          //         name:this.state.text,
          //       })
          //       this.props.navigation.navigate("Edit_Ingredients",{"details":item} )
          //     }}
          //     >
          //     <Text style={{color:'#ffff'}}>Edit</Text>
          //   </TouchableOpacity>
          // }
          bottomDivider
             />
        )
            }

getList=()=>{

this.requestRef = db.collection("shoppingList")
    .onSnapshot((snapshot)=>{
      var shoppingList = snapshot.docs.map((doc) => doc.data())
     //  console.log(shoppingList)
      this.setState({
        list : shoppingList
      });
    })
  
}

componentDidMount(){
   this.getList()
}

render(){
  return(
    <View style={styles.container}>

<Header
backgroundColor={'#F0937C'}
centerComponent={{
            text: 'Ingredients List',
            style: { color: '#580000',fontWeight: 'bold', fontSize: 20 },
          }}
          bottomDivider
/>

<TouchableOpacity
style={{marginBottom:10}}/>


<FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.list}
                renderItem={this.renderItem}    
                        />



 </View>

 );
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
      marginLeft:10,
       marginTop:10,
       marginBottom:10,
     paddingTop:0,
    width:90,
    height:30,
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
 container: {
   backgroundColor:"#F7E7DB",
    length:100,
    height:600,
  },
  paragraph: {
       marginLeft:10,
       marginTop:20,
       marginBottom:20 ,
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