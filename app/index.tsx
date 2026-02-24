import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
  const [ACTIVEPOKEMON] = useState(
    STARTING_POKEMON[Math.floor(Math.random()*STARTING_POKEMON.length)]
  );

  return (
    <SafeAreaProvider> 
    <SafeAreaView>
    <View>
      <Text>Who's that Pokemon</Text>
      <Text>{ACTIVEPOKEMON}</Text>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
