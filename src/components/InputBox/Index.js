import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";

const InputBox = () => {
  return (
    <View style={styles.container}>
      <AntDesign name='plus' size={20} color='royalblue' />

      <TextInput style={styles.input} placeholder='Type a message...' />

      <MaterialIcons style={styles.send} name='send' size={16} color='white' />
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
