import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={[styles.container]}>
        <ThemedText type="title" style={{ textAlign: "center", width: 300 }}>
          This screen doesn't exist. Yet...
        </ThemedText>
        <ThemedText style={{ marginTop: 30, width: 300, textAlign: "center" }}>
          Hi there, I'm Rizky.
          <br /><br/>
          I'm eager to get this screen built. Let's continue our talk in upwork!
        </ThemedText>

        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
