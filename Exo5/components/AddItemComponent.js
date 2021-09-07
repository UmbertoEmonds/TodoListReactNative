import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    Modal,
  } from 'react-native';

export const AddItemComponent = () => {
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>AJOUTER UN ITEM</Text>
                <Pressable style={[styles.button, styles.buttonClose]}>
                    <Text style={styles.textStyle}>Terminer</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 1
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
  });