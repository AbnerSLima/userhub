import { View, Text, TextInput, Button, Alert, Image, StyleSheet, Platform, SafeAreaView, Pressable } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useState } from 'react';
import { Link, router } from "expo-router";

export default function Register(){
  const { isLoaded, setActive, signUp } = useSignUp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const homePage = () => {
    router.push('/home');
  };

  const handleEdit = () => {
    router.push('/edit');
  }

  async function handleCreate(){
  }

  return(
    <SafeAreaView>
      <View style={[styles.buttonExit, styles.addButton]}>
        <View>
          <Image
              source={require('@/assets/images/logo2.png')}
              style={styles.userLogo}
          />
        </View>
        <View>
          <View style={styles.linkUser}>
            <Text>
              Olá Visitante!
            </Text>
            <Link href="/login" asChild>
                <Pressable>
                  <Text style={styles.linkLogoff}>Sair</Text>
                </Pressable>
            </Link>
          </View>
          <Button
            title="Voltar"
            color={'#CC1100'}
            onPress={homePage}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Dados do usuário</Text>
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
          title="Editar"
          color={"#FFC107"}
          onPress={handleEdit}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
    height: 100,
    width: 100,
  },
  link: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
  buttonExit: {
    padding: 5,
    marginHorizontal: 2,
    margin: 8,
    alignItems: 'center',
    borderRadius: 25,
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 5,
    marginHorizontal: 2,
    margin: 8,
    alignItems: 'center',
    borderRadius: 25,
  },
  linkUser: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  linkLogoff: {
    color: '#F44336',
  },
});