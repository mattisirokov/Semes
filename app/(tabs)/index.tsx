import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, StyleSheet, RefreshControl } from "react-native";

import { View } from "@/components/Themed";
import NewsItem from "@/components/NewsItem";

import { Article } from "@/types";

export default function TabOneScreen() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchArticles = useCallback(() => {
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;
    fetch(
      `https://newsapi.org/v2/everything?q=miami&from=2024-02-11&to=2024-02-11&sortBy=popularity&language=en&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setRefreshing(false);
      });
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchArticles();
  }, [fetchArticles]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        {articles.slice(0, 20).map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            publishedAt={article.publishedAt}
            author={article.author || "Unknown"}
            img={article.urlToImage || "unknown"}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
