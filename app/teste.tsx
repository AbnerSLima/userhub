import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, StyleSheet, Platform, SafeAreaView } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
  // Aqui você pode adicionar a lógica para autenticação
  Alert.alert('Login', `Email: ${email}\nSenha: ${password}`);
  };
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Tela de Login</Text>
    <TextInput
    style={styles.input}
    placeholder="entre com o e-mail"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
    />
  <TextInput
  style={styles.input}
  placeholder="entre com a senha"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
  />
  <Button title="Entrar" onPress={handleLogin} />
  </View>
  );
  };
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    },
    title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    },

    input: {
      height: 40,
      borderColor:'gray',
      borderWidth: 5,
      marginBottom: 12,
      paddingHorizontal: 10,
      
      },
      });

      export default LoginScreen;

