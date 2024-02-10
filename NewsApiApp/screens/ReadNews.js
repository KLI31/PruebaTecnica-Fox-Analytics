import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import colors from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import { typography } from "../utils/typography";

const ReadNews = () => {
  const news = useRoute().params.news;
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        source={{
          uri: news.urlToImage,
        }}
        style={styles.image}
      />
      <Pressable onPress={() => navigation.goBack()} style={styles.btnGo}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </Pressable>
      <View style={{ marginTop: 25, display: "flex", padding: 5, flex: 1 }}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.source}>{news?.source?.name}</Text>
        <Text style={styles.author}>Autor: {news.author}</Text>
        <Text style={styles.author}>Fecha: {news.publishedAt}</Text>
        <Text style={styles.description}>{news.description}</Text>
      </View>
      <View
        style={{
          padding: 20,
        }}
      >
        <Pressable
          style={styles.btn}
          onPress={() => WebBrowser.openBrowserAsync(news.url)}
        >
          <Text style={styles.btnText}>Ver la noticia completa</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: colors.primary,
    fontFamily: typography.fontFamily["ubuntu-bold"],
  },
  image: {
    width: "100%",
    height: 350,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
  },
  btnGo: {
    zIndex: 1,
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
  },
  source: {
    color: colors.secondary,
    fontFamily: typography.fontFamily["hind-bold"],
    marginBottom: 10,
  },
  author: {
    color: colors.lightGray,
    marginBottom: 10,
    fontFamily: typography.fontFamily["hind-bold"],
  },
  description: {
    marginTop: 20,
    fontSize: 17,
    lineHeight: 30,
    fontFamily: typography.fontFamily["hind-regular"],
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 16,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontFamily: typography.fontFamily["ubuntu-bold"],
    fontSize: 18,
  },
});

export default ReadNews;
