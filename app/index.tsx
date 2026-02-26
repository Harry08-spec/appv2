//import all required elements / items to use in code from various frameworks 
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

//Simple array for testing before we do an API call
const STARTING_POKEMON =[
"bulbasour",
"ivysaur",
"venusaur",
"charmander",
"charmeleon",
"charizard",
"squirtle",
"wartortle",
"blastoise",
"caterpie",
]

export default function Index() {
  //LOCKED TO 1 POKEMON FOR TESTING, ADD CHANGES OF POKEMON LATER
  //const ACTIVEPOKEMON = useState(STARTING_POKEMON[5]);

  /*randomly pick pokemon based on array indices and based on length of
  array and rounding random number down to whole number */
const  rand = Math.floor(Math.random()*STARTING_POKEMON.length);

  const [ACTIVEPOKEMON] = useState(
    STARTING_POKEMON[rand]
  );

  //shows on screen
  return (
    <SafeAreaProvider> 
    <SafeAreaView style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.header}>Who's that Pokemon</Text>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rand+1}.png`
        }}
        style={styles.pokeImg}
        />
      <Text style={styles.pokemon}>{ACTIVEPOKEMON}</Text>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
//styling for the elements
const styles = StyleSheet.create({
  pokeImg: {
    width:250,
    height:250,
  },
  container: {
    backgroundColor: "#f5f5f5",
    flex:1,
    justifyContent:"center",
    alignContent:"center",
  },
  card: {
    padding:20,
    backgroundColor: "white",
    borderRadius:20,
    shadowColor: "black",
    elevation: 5,
    alignItems: "center"
  },
  header: {
    fontSize: 20,
    color:"#666",
    marginBottom:10,
  },
  pokemon: {fontSize:32,
     fontWeight:"bold",
      color:"#333"}
});