import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BackButton } from "@/components/BackButton";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function RegisterScreen() {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <ScrollView
      style={[styles.container, { backgroundColor }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <BackButton />
        <ThemedText type="title" style={styles.title}>
          Create New Account
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
          label="Create Password"
          placeholder="Password"
          secureTextEntry
        />
        <ThemedTextInput
          label="Confirm Password"
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <View style={{ flex: 1 }}></View>
      <View style={styles.footer}>
        <ThemedText style={styles.termsText}>
          By tapping "Create Account" button, you agree to Steady Hands App{" "}
          <ThemedText type="link" style={styles.termsLink} onPress={() => {}}>
            User Agreement
          </ThemedText>{" "}
          and{" "}
          <ThemedText type="link" style={styles.termsLink} onPress={() => {}}>
            Privacy Policy
          </ThemedText>
        </ThemedText>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => router.navigate("./welcome")}
          style={[styles.button]}
        >
          <ThemedText style={styles.buttonText}>Create Account</ThemedText>
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
    marginBottom: 40,
  },
  title: {
    marginBottom: 8,
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
  footer: {
    marginTop: 24,
    paddingHorizontal: 10,
  },
  termsText: {
    fontSize: 11,
    lineHeight: 4,
    fontFamily: "Mulish_400Regular",
  },
  termsLink: {
    fontSize: 11,
    color: "#3878F2",
    fontFamily: "Mulish_400Regular",
  },
  loginLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    marginTop: 24,
  },
});
