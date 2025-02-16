import {
  TextInput,
  type TextInputProps,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "large";
  label?: string;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  type = "default",
  placeholderTextColor: providedPlaceholderColor,
  ...rest
}: ThemedTextInputProps) {
  const [secureTextEntry, setSecureTextEntry] = useState(rest.secureTextEntry);
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const backgroundColor = useThemeColor({}, "secondaryBackground");
  const placeholderTextColor =
    providedPlaceholderColor ?? useThemeColor({}, "secondaryText");

  return (
    <View>
      {rest.label && (
        <Text
          style={[
            { color, marginBottom: 7, fontFamily: "Mulish_400Regular" },
            type === "default" ? { fontSize: 14 } : { fontSize: 16 },
          ]}
        >
          {rest.label}
        </Text>
      )}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={[
            { color, backgroundColor, flex: 1 },
            type === "default" ? styles.default : undefined,
            type === "large" ? styles.large : undefined,
            styles.base,
            style,
          ]}
          placeholderTextColor={placeholderTextColor}
          {...rest}
          secureTextEntry={secureTextEntry}
        />
        {rest.secureTextEntry && (
          <Pressable
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
            }}
            style={{ position: "absolute", right: 10, padding: 5 }}
          >
            <Image
              source={require("../assets/images/password.svg")}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#c0c1be",
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Mulish_400Regular",
    minHeight: 48,
  },
  large: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Mulish_400Regular",
    minHeight: 56,
  },
});
