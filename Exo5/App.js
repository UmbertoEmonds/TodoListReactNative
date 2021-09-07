import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
} from 'react-native';
import { AddItemComponent } from './components/AddItemComponent';
import { TodoItemComponent } from './components/TodoItemComponent';

const App = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    fetch("https://60d742f0307c300017a5f787.mockapi.io/users/todoItems")
      .then(res => res.json())
      .then(
        (result) => {
          setTodoItems(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <Text>Erreur : {error.message}</Text>;
  } else {
    return (
      <View>
        {todoItems.map((item, key) => 
          <TodoItemComponent item={item} key={key} />
        )}
          <Pressable onPress={() => addItem()} style={styles.addItemBtn}  ><Text style={styles.addItemTxt}>Ajouter</Text></Pressable>
          <Modal animationType="slide" 
                transparent={true} 
                visible={modalVisible} 
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}>
            <AddItemComponent/>
          </Modal>
      </View>
    );
  }

  function addItem(){
    setModalVisible(true)
  }

};

const styles = StyleSheet.create({
  addItemBtn: {
    display: "flex",
    margin: 10,
    backgroundColor: "#c9a4e0",
    height: 50,
    width: "30%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    elevation: 4
  },  
  addItemTxt: {
    color: "white",
    fontSize: 20
  }
});

export default App;