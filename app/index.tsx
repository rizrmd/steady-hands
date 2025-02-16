import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function LoginScreen() {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <ScrollView
      style={[styles.container, { backgroundColor }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          Welcome Back!
        </ThemedText>
      </View>

      <View style={styles.form}>
        <ThemedTextInput
          label="Email"
          placeholder="example@domain.com"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <ThemedTextInput
          label="Password"
          placeholder="Password"
          secureTextEntry
        />
        <View>
          <TouchableOpacity onPress={() => router.push("./forgot-password")}>
            <ThemedText type="link" style={{ alignSelf: "flex-end" }}>
              Forgot Password?
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("./register");
            }}
            style={styles.button}
          >
            <ThemedText style={styles.buttonText}>Sign In</ThemedText>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <ThemedText style={styles.dividerText}>or</ThemedText>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity
            onPress={() => {
              router.push("./register");
            }}
            style={[styles.button, styles.oauthButton, { marginBottom: 10 }]}
          >
            <Image
              source={require("../assets/images/google.svg")}
              style={{ width: 24, height: 24, marginRight: 5 }}
            />
            <ThemedText style={[styles.buttonText, styles.socialButtonText]}>
              Continue with Google
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              router.push("./register");
            }}
            style={[styles.button, styles.oauthButton]}
          >
            <Image
              source={require("../assets/images/apple.svg")}
              style={{ width: 24, height: 24, marginRight: 5 }}
            />
            <ThemedText style={[styles.buttonText, styles.socialButtonText]}>
              Continue with Apple
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <ThemedText>Don't have an account? </ThemedText>
        <TouchableOpacity onPress={() => router.push("./register")}>
          <ThemedText type="link" style={{ color: "black" }}>
            Sign Up
          </ThemedText>
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
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    opacity: 0.8,
  },
  form: {
    gap: 16,
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
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    marginTop: 100,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E5E5",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#666666",
    fontFamily: "Mulish_400Regular",
  },
  oauthButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#e0deda",
  },
  socialButtonText: {
    fontFamily: "Mulish_400Regular",
    color: "black",
  },
});
