import { Image, StyleSheet } from "react-native";

import { View, Text } from "./Themed";

interface NewsItemProps {
  title: string;
  publishedAt: string;
  author: string;
  img: string;
  description: string;
}

export default function NewsItem({
  title,
  publishedAt,
  author,
  img,
  description,
}: NewsItemProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: img }} />
      <Text style={styles.publishedAt}>Published: {publishedAt}</Text>
      <Text style={styles.author}> {author}</Text>
      <Text style={styles.publishedAt}> {description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    minWidth: "100%",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    marginBottom: 10,
    minWidth: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  publishedAt: {
    fontSize: 12,
    marginBottom: 5,
  },
  author: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
