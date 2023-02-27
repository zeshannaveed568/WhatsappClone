import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: chat.user.image }} />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {chat.user.name}
          </Text>
          <Text style={styles.subTitle}>
            {dayjs(chat.lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </View>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 100,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  name: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
  },

  subTitle: {
    color: "grey",
  },
});
