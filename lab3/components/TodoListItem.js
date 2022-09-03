import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity ,Button} from 'react-native';


const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Text style={{width:105,backgroundColor:"red",color:"#fff",textAlign:"center",borderRadius:10}}> Still Not compltete?</Text>
          </View>
        ) : (
          <View style={styles.square} />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          checked ?  styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={onRemove(id)}>
            
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  square: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderColor: 'green',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
    
  },
  strikeText: {
    color: 'green',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: 'black',
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;