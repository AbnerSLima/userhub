import { useEffect } from "react";
import * as SecureStore from 'expo-secure-store'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { Slot, useRouter, useSegments } from "expo-router";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth()
  const segmentes = useSegments();
  const router = useRouter();
  
  useEffect(() => {
    if(!isLoaded) return;
    
    console.log("User: ", isSignedIn)
    const inAuthGroup = segmentes[0] === "(auth)"

    if(isSignedIn && !inAuthGroup){
      router.replace("/home")
    }else if(!isSignedIn){
      router.replace("/login")
    }

  },[isSignedIn])

  return <Slot/>
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  );
}
