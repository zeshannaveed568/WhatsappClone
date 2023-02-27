import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "../components/ChatListItem/Index";
import chats from "../../assets/data/chats.json";

const ChatScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
      style={{ width: "100%" }}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  text: {
    fontSize: 20,
  },
});
