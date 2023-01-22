import React from "react";
import { Text, View } from "react-native";
import { styles } from "../Qrcode/styles";

export function Qrcode() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Leito QR Code</Text>
    </View>
  );
}
