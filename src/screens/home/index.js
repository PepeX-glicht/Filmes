import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import Header from "../../components/header";
import Search from "../../components/searchbar";
import BannerFilmes from "../../components/bannerFilmes";
import CardMovies from "../../components/cardMovies";
import { useState, useEffect } from "react";

export default function Home() {
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDMzZDJjYzk5Mjc1MWRjN2RhZTg3YTYyOTM5ZjAyNCIsIm5iZiI6MTc1NjIyNjY0MS4yNjgsInN1YiI6IjY4YWRlNDUxY2JmNzM4YTZhOTFlNWFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2-odY0qSgxsJoUWWtCfm9lJ52Xp3M6Dta70AMzYfj0M",
        },
      };

      try {
        const [popularResponse, topRatedResponse] = await Promise.all([
          fetch(
            "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1",
            options
          ),
        ]);

        const popularData = await popularResponse.json();
        const topRatedData = await topRatedResponse.json();

        setMoviesPopular(popularData.results.slice(0, 15));
        setMoviesTopRated(topRatedData.results.slice(0, 15));
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center", paddingBottom: 50 }}>
      <StatusBar style="light" />
      <Header />
      <Search />
      <BannerFilmes />

      
      <View style={styles.carouselContainer}>
        <FlatList
          data={moviesPopular}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardMovies
              titulo={item.title}
              nota={item.vote_average}
              img={item.poster_path}
              sinopse={item.overview}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

     
      <View style={styles.carouselContainer}>
        <FlatList
          data={moviesTopRated}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardMovies
              titulo={item.title}
              nota={item.vote_average}
              img={item.poster_path}
              sinopse={item.overview}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a29",
  },
  carouselContainer: {
    width: "90%",
    marginTop: 20,
  },
});