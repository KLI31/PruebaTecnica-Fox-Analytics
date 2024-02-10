import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../utils/colors";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Home");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text style={styles.text}>Comencemos</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{
          paddingHorizontal: 15,
          padding: 40,
          alignItems: "center",
        }}
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        skipLabel={<Text style={styles.text}>Saltar</Text>}
        nextLabel={<Text style={styles.text}>Siguiente</Text>}
        pages={[
          {
            backgroundColor: colors.onboardingBackground1,
            image: (
              <View style={styles.lottie}>
                <LottieView
                  autoPlay
                  loop
                  source={require("../assets/animation/1707492947360.json")}
                  style={{ width: "100%", height: "100%", borderColor: "#fff" }}
                />
              </View>
            ),
            title: "Explora las Últimas Noticias",
            subtitle:
              "Descubre historias emocionantes de todo el mundo con nuestra aplicación de noticias interactiva.",
          },
          {
            backgroundColor: colors.onboardingBackground2,
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animation/1707493087975.json")}
                  autoPlay
                  style={{ width: width * 0.9, height: width }}
                />
              </View>
            ),
            title: "Descubre Contenidos Relevantes",
            subtitle:
              "Personaliza tus preferencias y encuentra noticias, artículos y análisis que se adapten a tus intereses y estilo de vida.",
          },
          {
            backgroundColor: colors.onboardingBackground3,
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animation/1707493141247.json")}
                  autoPlay
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ),
            title: "Siempre Informado, Siempre Conectado",
            subtitle:
              "Recibe notificaciones instantáneas sobre eventos importantes y mantente al día con lo que está sucediendo, donde sea que estés",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 15,
  },
  text: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default OnboardingScreen;
