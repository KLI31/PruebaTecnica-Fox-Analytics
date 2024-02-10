import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import CategorySlider from "../components/CategorySlider";
import colors from "../utils/colors";
import HeadlineSlider from "../components/HeadlineSlider";
import NewsList from "../components/NewsList";
import { useEffect, useState } from "react";
import GlobalApi from "../api/globalApi";
import { ScrollView } from "react-native";
import { typography } from "../utils/typography";

const HomeScreen = () => {
  const [newList, setNewList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsByCategory("UltimaHora");
  }, []);

  const getNewsByCategory = async (category) => {
    setLoading(true);
    const result = (await GlobalApi.getNewsByCategory(category)).data;
    setNewList(result.articles);
    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Insightify News</Text>
        <Text style={styles.subtitle}>la mejor informacion para ti</Text>
      </View>
      <CategorySlider
        selectedCategory={(category) => getNewsByCategory(category)}
      />
      {loading ? (
        <ActivityIndicator
          style={{
            marginTop: Dimensions.get("window").height / 3,
          }}
          size="large"
          color={colors.primary}
        />
      ) : (
        <View>
          <HeadlineSlider listNews={newList} />
          <NewsList listNews={newList} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  text: {
    color: colors.primary,
    fontSize: 30,
    marginBottom: 3,
    fontFamily: typography.fontFamily["ubuntu-bold"],
  },
  titleContainer: {
    marginBottom: 15,
  },
  subtitle: {
    color: colors.secondary,
    fontFamily: typography.fontFamily["hind-bold"],
  },
});

export default HomeScreen;
