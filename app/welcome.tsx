import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <ScrollView
      style={[styles.container, { backgroundColor }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.content}>
        <Image
          source={require("../assets/images/glad.svg")}
          style={styles.image}
        />
        <ThemedText type="title" style={styles.title}>
          Glad to have you
        </ThemedText>
        <ThemedText type="title" style={styles.title}>
          with us!
        </ThemedText>

        <ThemedText style={[styles.subtitle, { paddingTop: 10 }]}>
          Let your journey begin
        </ThemedText>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => router.push("/")}
          style={styles.button}
        >
          <ThemedText style={styles.buttonText}>Continue</ThemedText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Mulish_400Regular",
  },
  button: {
    height: 56,
    borderRadius: 12,
    backgroundColor: "#d66747",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Lora_400Regular",
  },
});
