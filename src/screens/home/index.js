import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BannerFilmes from '../../components/bannerFilmes'
import dados from "../../components/data/data.js";
import Header from "../../components/header";
import Search from "../../components/searchbar";
import CardMovies from "../../components/cardMovies";
import { useState, useEffect } from 'react';

export default function Home(){

const [movies, setMovies] = useState([]);
useEffect(()=> {
async function buscarFilmes(){
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR-US&page=1';
const options = {
method: 'GET',
headers: {
accept: 'application/json',
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDMzZDJjYzk5Mjc1MWRjN2RhZTg3YTYyOTM5ZjAyNCIsIm5iZiI6MTc1NjIyNjY0MS4yNjgsInN1YiI6IjY4YWRlNDUxY2JmNzM4YTZhOTFlNWFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2-odY0qSgxsJoUWWtCfm9lJ52Xp3M6Dta70AMzYfj0M'
}}

const response = await fetch(url,options);
const data = await response.json();

console.log(data);
setMovies(data.results);
}

buscarFilmes();

}, [])

return (
<View style={style.container}>
<Header></Header>
<Search></Search>
<BannerFilmes></BannerFilmes>

<View style={{width:'90%'}}>
<FlatList
data = {movies} //trocamos por "dados" 
horizontal = {true} 
keyExtractor={(item) => item.id}
renderItem= {({item}) => (

<CardMovies 
titulo = {item.title}
nota = {item.vote_average}  
img = {item.poster_path} 
sinopse = {item.overview} >
</CardMovies>

)}
/>
</View>
</View>
)}
 
const style = StyleSheet.create({

container: {
   flex: 1,
   backgroundColor: '#141a29',
   alignItems:"center"
}

})