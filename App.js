import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      source={require("./assets/bg.jpg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.root}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.quote}>
              "The advance of technology is based on making it fit in so that
              you don't really even notice it, so it's part of everyday life."
            </Text>
            <Text style={styles.author}> - Bill Gates</Text>
          </View>

          <FontAwesome name="refresh" size={24} color="#f9f9f9" />
        </View>
      </SafeAreaView>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 32,
    paddingHorizontal: 16,
  },
  quote: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
    color: "#f9f9f9",
  },
  author: {
    fontFamily: "Inter-Bold",
    fontSize: 15,
    color: "#f9f9f9",
    marginTop: 8,
  },
});
