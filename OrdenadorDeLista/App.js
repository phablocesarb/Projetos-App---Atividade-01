import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarNumero = () => {
    if (input !== '' && !isNaN(input)) {
      setLista([...lista, parseFloat(input)]);
      setInput('');
    } else {
      alert('Por favor, insira um número válido!');
    }
  };

  const ordenarLista = () => {
    let listaOrdenada = [...lista];
    let n = listaOrdenada.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (listaOrdenada[j] > listaOrdenada[j + 1]) {
          let temp = listaOrdenada[j];
          listaOrdenada[j] = listaOrdenada[j + 1];
          listaOrdenada[j + 1] = temp;
        }
      }
    }
    setLista(listaOrdenada);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ordenador de Lista</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
      />
      <View style={styles.buttonContainer}>
        <Button title="Adicionar" onPress={adicionarNumero} color="#007AFF" />
        <Button title="Ordenar Lista" onPress={ordenarLista} color="#007AFF" />
      </View>
      <FlatList
        data={lista}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  lista: {
    marginTop: 10,
  },
  item: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});