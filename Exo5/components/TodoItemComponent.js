import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export const TodoItemComponent = (props) => {
    return (
        <View style={styles.cell}>
            <View>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.content}>{props.item.content}</Text>
            </View>
            <Image style={styles.img} source={{
                uri: props.item.isDone ? "https://lh3.googleusercontent.com/proxy/7CfS3yVJuCBXqCOBpfc8LKa-YMD4YRnj-EP2udPUTu5WLSBgN5R9oqGqiPoL-1YamKx7fIXfGPxTNEK-sfjH6ane4rE" : "https://surfwear.sooruz.com/wp-content/uploads/croix-rouge-12131709-1.png",
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    cell: {
        display: "flex",
        padding: 10,
        margin: 1,
        backgroundColor: "#ffc4f5",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: "400",
        marginBottom: 2
    },
    content: {
        color: "#474747",
        fontWeight: "300"
    },
    img: {
        width: 30,
        height: 30
    }
});