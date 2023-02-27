import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useState } from "react";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.warn("Sending: " + newMessage);

    setNewMessage("");
  };

  return (
    <View style={styles.container}>
      <AntDesign name='plus' size={20} color='royalblue' />

      <TextInput
        onChangeText={setNewMessage}
        value={newMessage}
        style={styles.input}
        placeholder='Type a message...'
      />

      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name='send'
        size={16}
        color='white'
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: "lightgrey",
    borderWidth: StyleSheet.hairlineWidth,
  },

  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
