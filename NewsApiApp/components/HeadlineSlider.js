import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { typography } from "../utils/typography";

const dimension = Dimensions.get("screen").width * 0.8;
const heightImage = Dimensions.get("screen").width * 0.77;

const HeadlineSlider = ({ listNews }) => {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={listNews}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("ReadNews", { news: item })}
          >
            <Image source={{ uri: item.urlToImage }} style={styles.image} />
            <View style={{ display: "flex", justifyContent: "center" }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.source}>{item?.source?.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dimension,
    marginRight: 15,
  },
  title: {
    marginTop: 12,
    fontSize: 18,
    fontFamily: typography.fontFamily["ubuntu-bold"],
  },
  image: {
    height: heightImage,
    borderRadius: 12,
  },
  source: {
    marginTop: 5,
    color: colors.secondary,
    fontFamily: typography.fontFamily["hind-bold"],
  },
});

export default HeadlineSlider;
