import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RowView = ({ label, value, darkMode }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
      }}
    >
      <Text
        style={{
          fontFamily: "Inter-Regular",
          fontSize: 12,
          color: darkMode ? "#fff" : "#262322",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontFamily: "Inter-Bold",
          fontSize: 20,
          color: darkMode ? "#fff" : "#262322",
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default function App() {
  const [showMore, setShowMore] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const image = darkMode
    ? require("./assets/night-bg.png")
    : require("./assets/day-bg.png");

  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.overlay} />

      <SafeAreaView style={styles.root}>
        {/* upper portion         */}
        {!showMore && (
          <View style={{ flexDirection: "row", gap: 14 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.quote}>
                "The advance of technology is based on making it fit in so that
                you don't really even notice it, so it's part of everyday life."
              </Text>
              <Text style={styles.author}> - Bill Gates</Text>
            </View>

            <FontAwesome name="refresh" size={24} color="#f9f9f9" />
          </View>
        )}

        <View
          style={{
            marginBottom: 15,
            flex: 1,
            justifyContent: showMore ? "space-between" : "flex-end",
            marginBottom: 40,
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name={darkMode ? "moon" : "sun"}
                size={25}
                color="#f9f9f9"
              />
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 20,
                  color: "#f9f9f9",
                  marginLeft: 8,
                  letterSpacing: 3,
                }}
              >
                GOOD {darkMode ? "EVENING" : "MORNING"}
              </Text>
            </View>
            <Text>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 95,
                  color: "#f9f9f9",
                }}
              >
                11:30
              </Text>
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 18,
                  color: "#f9f9f9",
                }}
              >
                BST
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: 18,
                color: "#f9f9f9",
                letterSpacing: 3,
              }}
            >
              IN LONDON, UK
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: 113,
                height: 40,
                backgroundColor: "#f9f9f9",
                alignItems: "center",
                borderRadius: 30,
                paddingLeft: 10,
                paddingRight: 5,
                justifyContent: "space-between",
                marginTop: 60,
              }}
              onPress={() => setShowMore((prev) => !prev)}
            >
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 18,
                  color: "#262322",
                  letterSpacing: 3,
                }}
              >
                {showMore ? "LESS" : "MORE"}
              </Text>
              <MaterialIcons
                name={showMore ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={30}
                style={{
                  backgroundColor: "#262322",
                  borderRadius: 50,
                  color: "white",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",

                height: 40,
                backgroundColor: "#262322",
                alignItems: "center",
                borderRadius: 30,
                padding: 5,
                justifyContent: "space-between",
                marginTop: 60,
              }}
              onPress={() => setDarkMode((prev) => !prev)}
            >
              <MaterialIcons
                name={darkMode ? "light-mode" : "dark-mode"}
                size={30}
                style={{
                  backgroundColor: "#262322",
                  borderRadius: 50,
                  color: "white",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* lower portion */}
      {showMore && (
        <View
          style={{
            backgroundColor: darkMode ? "#000000" : "#f9f9f9",
            opacity: 0.8,
            paddingVertical: 48,
            paddingHorizontal: 26,
          }}
        >
          <RowView
            label="Current Timezone"
            value="Europe/London"
            darkMode={darkMode}
          />
          <RowView label="Day of the year" value="295" darkMode={darkMode} />
          <RowView label="Day of the Week" value="5" darkMode={darkMode} />
          <RowView label="Week Number" value="42" darkMode={darkMode} />
        </View>
      )}

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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});
