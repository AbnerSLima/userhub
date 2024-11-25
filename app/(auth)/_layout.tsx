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
          headerShown: false 
        }} 
      />
      <Stack.Screen
        name= "profile"
        options={{
          headerShown: false 
        }} 
      />
      <Stack.Screen
        name= "create"
        options={{
          headerShown: false 
        }} 
      />
      <Stack.Screen
        name= "edit"
        options={{
          headerShown: false 
        }} 
      />
    </Stack>

  )
}