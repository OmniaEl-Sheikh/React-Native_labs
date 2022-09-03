import React, { useState } from 'react';

import { View, StyleSheet, FlatList, Text,Button } from 'react-native';

export default function App() {
  
  

  const [user, setUser] = useState([
    {
      id: 1,
      name: 'Omnia',
    },
    {
      id: 2,
      name: 'Aya',
    },
    {
      id: 3,
      name: 'Rody',
    },
    {
      id: 4,
      name: 'Eman',
    },
    {
      id: 5,
      name: 'salma ',
    },
    
   

  ]);

  const deleteSelectedElement = (id, name) => {

    const filteredData = user.filter(item => item.id !== id);
    setUser(filteredData);
       
  }

  const ItemRender = ({ id, name }) => (
    <View style={{ borderRadius:50,backgroundColor:"#F9F5F5",marginBottom:25,borderWidth:2,borderColor:"#629CB3",top:"30%",
     }}>
     
      <Text style={styleSheet.itemText}>{name}</Text>
      
      <View style={{width:80,left:40,top:-20}}>
      <Button style={styleSheet.btn} title="delete" onPress={() => deleteSelectedElement(id, name)}/>
      </View>
      
      
    </View>
  );

  return (
    <View style={styleSheet.MainContainer}>
      <FlatList
        data={user}
        renderItem={({ item }) => <ItemRender id={item.id} name={item.name} />}
        
        keyExtractor={item => item.id}
        
      />
    
    </View>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width:"100%",
    height:"100%",
    backgroundColor:"#F9F5F5",
    top:40,
  },

  itemText: {
    fontSize: 26,
    color: 'black',
    textTransform: 'capitalize',
    left:-50,
    
  },
 

});