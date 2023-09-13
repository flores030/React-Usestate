import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import useCadastro from './useCadastro';

const MainScreen = () => {
  const { dadosCadastro, handleChange, handleCadastro } = useCadastro();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Desafio em sala</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={dadosCadastro.nome}
        onChangeText={(valor) => handleChange('nome', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={dadosCadastro.genero}
        onChangeText={(valor) => handleChange('genero', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dadosCadastro.dataNascimento}
        onChangeText={(valor) => handleChange('dataNascimento', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={dadosCadastro.usuario}
        onChangeText={(valor) => handleChange('usuario', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={dadosCadastro.senha}
        onChangeText={(valor) => handleChange('senha', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={dadosCadastro.email}
        onChangeText={(valor) => handleChange('email', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirme seu E-mail"
        value={dadosCadastro.confirmaEmail}
        onChangeText={(valor) => handleChange('confirmaEmail', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={dadosCadastro.cpf}
        onChangeText={(valor) => handleChange('cpf', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Idioma do Currículo"
        value={dadosCadastro.idioma}
        onChangeText={(valor) => handleChange('idioma', valor)}
      />

      <Button
        title="Cadastrar"
        onPress={handleCadastro}
        style={styles.botao}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#A6CCF5',
  },
  
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    border:0,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#D4DEF3',
    borderRadius: 10,
  },
  botao: {
    marginTop: 20,
  },
});

export default MainScreen;
