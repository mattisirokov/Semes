import { useState, useEffect, useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";

import NewsItem from "@/components/NewsItem";

import { Article } from "@/types";

export default function TabOneScreen() {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = useCallback(() => {
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;
    fetch(
      `https://newsapi.org/v2/everything?q=miami&from=2024-02-15&to=2024-02-16&sortBy=popularity&language=en&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const NewsList = ({ articles, refreshing, onRefresh }: any) => {
    const renderItem = ({ item }: any) => (
      <NewsItem
        title={item.title}
        publishedAt={item.publishedAt}
        author={item.author || "Unknown"}
        img={item.urlToImage || "unknown"}
        description={item.description}
      />
    );

    return (
      <FlatList
        data={articles.slice(0, 20)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.container}
      />
    );
  };

  return <NewsList articles={articles} />;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
