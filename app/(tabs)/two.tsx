import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
import { Article } from "@/types";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Stories</Text>
      <Link style={styles.link} href="/settings">
        Go to settings page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    backgroundColor: "green",
    padding: 10,
    color: "white",
  },
});
