import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useState } from "react";
import colors from "../utils/colors";

const CategorySlider = ({ selectedCategory }) => {
  const [active, setActive] = useState(1);

  const categories = [
    {
      id: 1,
      name: "Ultima Hora",
    },
    {
      id: 2,
      name: "Entretenimiento",
    },
    {
      id: 3,
      name: "Mundial",
    },
    {
      id: 4,
      name: "Salud",
    },
    {
      id: 5,
      name: "Ciencia",
    },
    {
      id: 6,
      name: "Deportes",
    },
    {
      id: 7,
      name: "Tecnología",
    },
  ];

  const onclick = (id) => {
    setActive(id);
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              onclick(item.id);
              selectedCategory(item.name);
            }}
          >
            <Text
              style={item.id === active ? styles.selectedText : styles.text}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 15,
    color: colors.lightGray,
    padding: 7,
  },
  selectedText: {
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    backgroundColor: colors.primary,
    padding: 7,
    borderRadius: 10,
  },
});

export default CategorySlider;
