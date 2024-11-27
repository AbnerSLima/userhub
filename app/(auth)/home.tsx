import React from 'react';
import { Link, router, useRouter,Stack } from "expo-router";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Button, Pressable, SafeAreaView } from 'react-native';

export default function Home() {
  const usuarios = [
    { user_id: 1, nome: 'João', login: 'joao123', senha: '12345', data_cadastro: '2024-11-01' },
    { user_id: 2, nome: 'Maria', login: 'maria123', senha: '12345', data_cadastro: '2024-11-02' },
  ];
  const handleCreate = () => {
    router.push('/create');
  };
  const handleProfile = () => {
    router.push('/profile');
  };
  const handleEditar = () => {
    router.push('/edit');
  };
  const handleExcluir = (id: number) => {
    console.log(`Excluir usuário ID: ${id}`);
  };
  const handleLogoff = () => {
    router.push('/login');
  };

  return(
    <SafeAreaView style={styles.container}>
      <View style={[styles.button, styles.addButton]}>
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
              title="Adicionar Usiário"
              color={'#4CAF50'}
              onPress={handleCreate}
              />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Digite o nome ou email"
          placeholderTextColor={"gray"}
          style={styles.input}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchClean}>
          <Text style={styles.searchCleanText}>Limpar filtro</Text>
        </TouchableOpacity>
      </View>
        <View>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, styles.headerCell]}>ID</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Nome</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Login</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Data de Cadastro</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Ações</Text>
          </View>

          {usuarios.map((usuario) => (
            <View key={usuario.user_id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{usuario.user_id}</Text>
              <Text style={styles.tableCell}>{usuario.nome}</Text>
              <Text style={styles.tableCell}>{usuario.login}</Text>
              <Text style={styles.tableCell}>{usuario.data_cadastro}</Text>
              <Text style={styles.tableCell}>
                <TouchableOpacity
                    style={[styles.button, styles.viewButton]}
                    onPress={handleProfile}>
                        <Text style={styles.buttonText}>Visualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.editButton]}
                    onPress={handleEditar}>
                        <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.deleteButton]}
                    onPress={() => handleExcluir(usuario.user_id)}>
                       <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
              </Text>
            </View>
          ))}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor:'#49688d',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: '#fff',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#fff',
    marginLeft: 5,
  },
  tableContainer: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    padding: 10,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  headerCell: {
    fontWeight: 'bold',
    color: '#fff',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 2,
  },
  userLogo: {
    height: 100,
    width: 100,
  },
  viewButton: {
    backgroundColor: '#4CAF50',
  },
  editButton: {
    backgroundColor: '#FFC107',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  button: {
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
  linkUser: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  linkLogoff: {
    color: '#F44336',
  },
  searchClean: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#12',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    marginLeft: 10,
  },
  searchCleanText: {
    color: '#F44336',
    marginLeft: 5,
  },
})