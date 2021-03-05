import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomes, setNomes] = useState ([]);
  const [telefones, setTelefones] = useState ([]);
  const [contadorRegistros, setContadorRegistros] = useState(0);

//captura o nome digitado
  const capturarNome = (nome) =>{setNome(nome)};

//captura o telefone digitado
  const capturarTelefone = (telefone) =>{setTelefone(telefone)};

//para adicionar o nome que foi digitado
  const adicionarNome = () => {setNomes ((nomes) =>{console.log(nomes);
    setContadorRegistros (contadorRegistros + 1);
    return [...nomes, {key: contadorRegistros.toString(), value: nome}];
  });
}

  //para adicionar o telefone que foi digitado
  const adicionarTelefone = () => {setTelefone ((telefone) =>{console.log(telefones);
        setContadorRegistros (contadorRegistros + 1);
  return [...telefones, {key: contadorRegistros.toString(), value: telefone}];
  });
}

  return (
    <View style={styles.container}>
      <View style={styles.textoInputView}>
      <View style={{width: '80%', alignSelf: "center"}}>
      <FlatList
      data={nomes}
      renderItem={
        nome => (
          <View style={styles.itemNaLista}>
            <Text>{nome.item.value}</Text>
          </View>
        )
      }
      renderItem={
        telefone => (
          <View style={styles.itemNaLista}>
            <Text>{telefone.item.value}</Text>
          </View>
        )
      }
      />
      </View>
        {/*Inserção de Nomes*/}
        <TextInput placeholder="Insira o nome aqui" 
        style={styles.textoTextInput}
        onChangeText={capturarNome}
        value={nome}
        />
        {/*Inserção de Telefones*/}
        <TextInput placeholder="Insira o telefone aqui" 
        style={styles.textoTextInput}
        onChangeText={capturarTelefone}
        value={telefone}
        />
        <View style={{width: '25%'}}>
        <Button title="Adicionar" 
        onPress={adicionarNome && adicionarTelefone}
        />
      </View>
      </View>
      <View>
        {
        /*aqui sera exibida a lista de nomes*/
        nomes.map((nome) => 
        <View key={nome} style={styles.itemNaLista}><Text>{nome}</Text></View>)
        }
        {
        /*aqui sera exibida a lista de telefones*/
        telefones.map((telefon) => 
        <View key={telefone} style={styles.itemNaLista}><Text>{telefone}</Text></View>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  textoInputView: {
    alignItems: 'left',
    marginBottom: 12
  },
  textoTextInput: {
    width: '25%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2,
    textAlign: 'left'
  },
  textoInputButton: {
    width: '25%'
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'letf'
  }
});
