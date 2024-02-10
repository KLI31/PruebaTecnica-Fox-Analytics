import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import NewsList from "../components/NewsList";
import GlobalApi from "../api/globalApi";
import colors from "../utils/colors";
import { typography } from "../utils/typography";

const SearchNews = () => {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === "") {
      getNewsBySearch("latest");
    }
  }, [search]);

  const getNewsBySearch = async (search) => {
    setLoading(true);
    const result = (await GlobalApi.getNewsBySearch(search)).data;
    setNews(result.articles);
    setLoading(false);
  };

  const handleSearch = () => {
    getNewsBySearch(search);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 10, maxWidth: "90%", margin: 10 }}>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar noticias"
        />
        <Pressable style={styles.btn} onPress={handleSearch}>
          <Text style={styles.btnText}>Buscar</Text>
        </Pressable>
      </View>
      <View style={{ margin: 5 }}>
        {loading ? (
          <ActivityIndicator
            style={{
              marginTop: Dimensions.get("window").height / 3,
            }}
            size="large"
            color={colors.primary}
          />
        ) : (
          <NewsList listNews={news} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexGrow: 1,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  btn: {
    marginTop: 10,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
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

export default SearchNews;
