import { Stack } from "expo-router";

export default function PublicLayout() {
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
        name="login"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="reset"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}