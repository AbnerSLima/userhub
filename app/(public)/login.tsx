import { View, Text, TextInput, Button, Alert, Image, StyleSheet, Platform, SafeAreaView, Pressable } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { useState } from 'react';
import { Link } from "expo-router";

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
  // Aqui você pode adicionar a lógica para autenticação
  Alert.alert('Login', `Email: ${email}\nSenha: ${password}`);
  };
  return(
    <View style={styles.container}>
      <Image
          source={require('@/assets/images/logo1.png')}
          style={styles.userLogo}
      />
      <Text style={styles.title}>Bem-vindo</Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Digite seu e-mail..."
        placeholderTextColor={"gray"}
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Digite sua senha..."
        placeholderTextColor={"gray"}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Entrar"
        color={"#121212"}
        onPress={handleLogin}
      />
      <Link href="/reset" asChild>
        <Pressable style={styles.link1}>
          <Text>Esqueci minha senha</Text>
        </Pressable>
      </Link>
      <Link href="/register" asChild>
        <Pressable style={styles.link2}>
          <Text>Ainda não tem conta? Cadastre-se!</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#213a59',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    borderColor:'#49688d',
    borderWidth: 2,
    width: 300,
    borderRadius: 25,
    marginBottom: 12,
    padding: 10,
    marginVertical: 4,
    backgroundColor: '#fff',
  },
  userLogo: {
    height: 200,
    width: 200,
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    margin: 8,
    alignItems: 'center',
    borderRadius: 25,
  },
  link1: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
  link2: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
});