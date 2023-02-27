import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message/Index";
import messages from "../../assets/data/messages.json";
import { FlatList } from "react-native";
import InputBox from "../components/InputBox/Index";

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        inverted
      />

      <InputBox />
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
    padding: 10,
  },
});
