import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { typography } from "../utils/typography";

const NewsList = ({ listNews }) => {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={listNews}
        renderItem={({ item }) => (
          <View>
            <View style={styles.decoration} />
            <TouchableOpacity
              onPress={() => navigation.navigate("ReadNews", { news: item })}
              style={styles.containerNew}
            >
              <Image source={{ uri: item.urlToImage }} style={styles.image} />
              <View style={{ marginRight: 140, marginLeft: 10 }}>
                <Text numberOfLines={4} style={styles.title}>
                  {item.title}
                </Text>
                <Text style={styles.source}>{item?.source?.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  source: {
    marginTop: 6,
    color: colors.secondary,
    fontFamily: typography.fontFamily["hind-bold"],
  },
  containerNew: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  decoration: {
    height: 1,
    backgroundColor: "gray",
    marginTop: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: typography.fontFamily["ubuntu-bold"],
  },
});

export default NewsList;
