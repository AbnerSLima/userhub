import { View, Text, TextInput, Button, Alert, Image, StyleSheet, Platform, SafeAreaView, Pressable } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useState } from 'react';
import { Link } from "expo-router";

export default function Register(){
  const { isLoaded, setActive, signUp } = useSignUp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleSignUp(){
    if (!name || !email || !password) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: name,
          login: email,
          senha: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        // Redirecionar para a tela de login
      } else {
        Alert.alert('Erro', data.message || 'Não foi possível criar a conta.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Algo deu errado. Tente novamente mais tarde.');
    }

  }

  return(
    <View style={styles.container}>
      <Image
          source={require('@/assets/images/logo1.png')}
          style={styles.userLogo}
      />
      <Text style={styles.title}>Criar conta</Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Digite seu primeiro nome..."
        placeholderTextColor={"gray"}
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
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
        title="Criar conta"
        color={"#121212"}
        onPress={handleSignUp}
      />
      <Link href="/login" asChild>
        <Pressable style={styles.link}>
          <Text>Já tem conta? Faça login!</Text>
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
    marginTop: 25,
    alignItems: 'center',
  },
  link: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
});