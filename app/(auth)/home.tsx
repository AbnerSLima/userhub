import React from 'react';
import { Link, router, useRouter,Stack } from "expo-router";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';

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

  return(
    <View style={styles.container}>
      <View style={[styles.button, styles.addButton]}>
      <Image
          source={require('@/assets/images/logo2.png')}
          style={styles.userLogo}
      />
        <Button
        title="Adicionar Usiário"
        color={'#4CAF50'}
        onPress={handleCreate}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome ou email"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Buscar</Text>
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
    </View>
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
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
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
})