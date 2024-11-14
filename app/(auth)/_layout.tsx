import { Stack } from "expo-router";

export default function StackPage() {
  return(
    <Stack
      screenOptions={{
        headerStyle:{
          backgroundColor: "#121212"
        },
        headerTintColor: "#fff"
      }}
    >
      <Stack.Screen
        name= "home"
        options={{
          headerTitle: "Home" 
        }} 
      />
            <Stack.Screen
        name= "profile"
        options={{
          headerTitle: "Minha Conta" 
        }} 
      />
    </Stack>

  )
}