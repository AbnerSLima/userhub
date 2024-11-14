import { View, Text, TextInput, Button, Alert, Image, StyleSheet, Platform, SafeAreaView, Pressable } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { useState } from 'react';
import { Link } from "expo-router";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    // Aqui você pode adicionar a lógica futura para recuperação de senha
    Alert.alert("Recuperação de Senha", `Instruções enviadas para: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Image
          source={require('@/assets/images/logo1.png')}
          style={styles.userLogo}
        />
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.description}>
        Insira seu e-mail para receber instruções sobre como redefinir sua senha.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="gray"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Button
        title="Enviar e-mail"
        onPress={handleReset}
        color="#121212"
      />
      <Link href="/login" asChild>
        <Pressable style={styles.link}>
          <Text>Fazer login</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#213a59',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  userLogo: {
    height: 200,
    width: 200,
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
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
  link: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
});