import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    //Rename the app title from index to something else.
   <Stack>
    <Stack.Screen
    name="index"
    options={{title:"Who's that Pokemon"}}
    />
   </Stack>
  );
}
