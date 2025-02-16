import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ThemedText } from "@/components/ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

type BackButtonProps = {
  label?: string;
  onPress?: () => void;
};

export function BackButton({ label, onPress }: BackButtonProps) {
  const theme = useColorScheme() ?? "light";
  const iconColor = theme === "light" ? Colors.light.icon : Colors.dark.icon;

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.back();
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Image
        style={{ width: 22, height: 22 }}
        source={require("@/assets/images/caret-right.svg")}
      />
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 25,
    paddingHorizontal: 0,
    marginLeft: -2,
  },
  label: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Mulish_400Regular",
  },
});
