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

export default class Recipe2 extends React.Component {
     constructor(){
    super();
    this.state ={
      allRecipes:[],
      dataSource:[],
      search : '',
      search2:'',
      dataSource2:[],
    }
  }
  componentDidMount(){
    this.retrieveRecipes()
  }

  updateSearch = search => {
    this.setState({ search });
  };


  retrieveRecipes=()=>{
    try {
      var allRecipes= []
      var stories = db.collection("recipes")
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // doc.data() is never undefined for query doc snapshots
                      //    console.log('this are the recipes',allRecipes)
              allRecipes.push(doc.data())
         
          })
          this.setState({allRecipes})
        })

    } 
    catch (error) {
      console.log(error);
    }
  };


  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.allRecipes.filter((item)=> {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name : '';
      const textData = text;
      return itemData.indexOf(textData) > -1;
     //  console.log(item.ingrediants.toUpperCase().trim())
    });
         

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }


    render(){
      return(
        <View style ={styles.container}>
           <Header
backgroundColor={'#F0937C'}
centerComponent={{
            text: 'Recipes',
            style: { color: '#580000',fontWeight: 'bold', fontSize: 20 },
          }}
          bottomDivider
/>
          <View styles ={{height:20,width:'100%'}}>
              <SearchBar

              placeholder="Search by name"
              onChangeText={text => this.SearchFilterFunction(text)}
              onClear={text => this.SearchFilterFunction('')}
              value={this.state.search}

             />


          </View>
          

          
          <FlatList
                data={this.state.search === "" ?  this.state.allRecipes: this.state.dataSource}
                
                renderItem={({ item }) => (
                //  <View >
                   <TouchableOpacity   
                   style={styles.button}
                                 onPress={() => {
              this.props.navigation.navigate("Recipe", {
                details: item,
              });
            }}>
                 
                    <Text style={{ color:'#240000',fontWeight:'bold', fontSize:17}}>  {item.name}</Text>
                    <Text style={{ 
                      color:'#c06049'
                      }}
                    >  Ingredients : {item.ingredients}</Text>
                    </TouchableOpacity>
               //    </View>
                )}
                keyExtractor={(item, index) => index.toString()}

                bottomDivider
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
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
     button:{
      // marginLeft:10,
       marginTop:0,
     paddingTop:0,
    width:'100%',
    height:80,
    justifyContent:'center',
    alignItems:'right',
    //backgroundColor:"#F0937C",
    backgroundColor:'white',
 //borderColor:'#580000',
 borderColor:'gray',
//borderRadius:100,
borderWidth:1,
    // shadowColor: "#900000",
    //  shadowOffset: {
    //     width: 0,
    //     height: 5
    //   }
  }, 
     button2:{
     paddingTop:5,
    width:140,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#F0937C",
    color:'white',
    borderRadius: 20,
    marginBottom:20,
    
    // shadowColor: "#900000",
    //  shadowOffset: {
    //     width: 0,
    //     height: 5
    //   }
  }, 
});

const customControlStyles = base => ({
  height: 20,
});