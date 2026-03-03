//import all required elements / items to use in code from various frameworks 
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

//Simple array for testing before we do an API call
const STARTING_POKEMON =[
{ name: "bulbasour", url: "https://pokeapi.co/api/v2/pokemon/1/" },
{ name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
{ name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
{ name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
{ name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
{ name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
{ name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
{ name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
{ name: "blastois", url: "https://pokeapi.co/api/v2/pokemon/9/" },
{ name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
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
const pokemonId = ACTIVEPOKEMON.url.split("/").filter(Boolean).pop();



const [currentInput, setCurrentInput] = useState("");
const [status, setStatus] = useState("Type your guess...");
const [isRevealeed, setIsRevealed] = useState(false);

const handleGuess = () =>{
const userGuess = currentInput.toLowerCase().trim();
const correctAnswer = ACTIVEPOKEMON.name.toLowerCase().trim();
if ( userGuess === correctAnswer){
alert("Correct! Well done");
setIsRevealed(true);
}else{
alert("Wrong! Please try again");
setIsRevealed(false);
}
setCurrentInput("");
}


  //shows on screen
  return (
    <SafeAreaProvider> 
    <SafeAreaView style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.header}>Who's that Pokemon</Text>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
        }}
        style={styles.pokeImg}
        />
      <Text style={styles.pokemon}>{ACTIVEPOKEMON.name}</Text>
      <TextInput
      style={styles.input}
      placeholder="Who's that Pokemon?"
      onChangeText={(text) => setCurrentInput(text)}
      />
      <TouchableOpacity style={styles.buttonback}>
        <Text style={styles.buttonText} onPress={handleGuess}>
          SUBMIT BUTTON
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
//styling for the elements
const styles = StyleSheet.create({
input:{ height:50, borderWidth:1, borderColor:"#ddd", padding:10, borderRadius:10},
buttonText: {fontWeight:"bold"},
buttonback: {backgroundColor:"#2196f3", padding:10, marginTop:10, borderRadius:10},

  pokeImg: {
    width:250,
    height:250,
  },
  container: {
    backgroundColor: "#b940bf",
    flex:1,
    justifyContent:"center",
    alignContent:"center",
  },
  card: {
    padding:20,
    backgroundColor: "#a2309a",
    borderRadius:20,
    shadowColor: "black",
    elevation: 5,
    alignItems: "center"
  },
  header: {
    fontSize: 30,
    color:"white",
    marginBottom:10,
  },
  pokemon: {fontSize:32,
     fontWeight:"bold",
      color:"white"}
});