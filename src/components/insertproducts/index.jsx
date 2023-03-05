import React, { useContext, useState, useEffect } from 'react';

import {
  Alert,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';


import { AuthContext } from '../../contexts/auth';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';






export default function Insertproducts({ navigation }) {




  const { user } = useContext(AuthContext);





  const [produto, setProduto] = useState({

    img: '',
    nome: '',
    info: '',
    preco: '',
    estoque: '',
    producao: ''
  });





  const handleInputChange = (atribute, value) => {

    setProduto({
      ...produto, [atribute]: value
    })
  }







  /*
  const addProduc=()=>{


      console.log(

          " img   "+produto.img+
          " nome  "+produto.nome+
          " info  "+produto.info+
          " preco "+produto.preco+
          " estoque "+produto.estoque+
          " producao "+produto.producao
          
          )

      }
     */






  const addProduct = async () => {


    const endpointPhp = 'http://127.0.0.1:4000/_github/php_api_bistro_data';

    await fetch(`${endpointPhp}/?action=addproduto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        produto
      })

    })
      .then((response) => response.json())
      .then((responseJson) => (
        console.log(responseJson)
      ));



    setProduto({
      ...produto, ["img"]: "",
      produto, ["nome"]: "",
      produto, ["info"]: "",
      produto, ["preco"]: "",
      produto, ["estoque"]: "",
      produto, ["producao"]: "",
    })


    navigation.navigate("Home");


  }






  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}

      style={styles.body}
    >




      <LinearGradient

        colors={
          [
            'rgba(0, 0, 45, 1)',
            'rgba(0, 0, 45, 0.8)'
          ]
        }
        style={styles.containerMain}
      >




        <ScrollView>



          <View style={styles.containerHeader}>


            <Text style={styles.textInfo}>{`user: ${user}`}</Text>


            <Text style={styles.textMain} >Tela de cadastro de produtos</Text>



            <View>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Home")}>
                <Text style={styles.textMain}>Voltar</Text>
              </TouchableOpacity>

            </View>




          </View>







          <View style={styles.containerForm}>



            <TextInput
              style={styles.input}
              placeholder=" digite o nome da imagem"
              placeholderTextColor="white"
              type="text"

              onChangeText={
                (valor) => handleInputChange("img", (valor))
              }
              value={produto.img}
            />





            <TextInput
              style={styles.input}
              placeholder=" digite o nome do produto"
              placeholderTextColor="white"
              type="text"

              onChangeText={
                (valor) => handleInputChange("nome", (valor))
              }
              value={produto.nome}
            />




            <TextInput
              style={styles.input}
              placeholder=" digite informações sobre o produto"
              placeholderTextColor="white"
              type="text"

              onChangeText={
                (valor) => handleInputChange("info", (valor))
              }
              value={produto.info}
            />




            <TextInput
              style={styles.input}
              placeholder=" digite o valor do produto"
              placeholderTextColor="white"
              type="text"

              onChangeText={
                (valor) => handleInputChange("preco", (valor))
              }
              value={produto.preco}
            />





            <TextInput
              style={styles.input}
              placeholder=" digite a quantidade do estoque"
              placeholderTextColor="white"
              type="text"

              onChangeText={
                (valor) => handleInputChange("estoque", (valor))
              }
              value={produto.estoque}
            />





            <TextInput
              style={styles.input}
              placeholder=" digite a quantidade produzida"
              placeholderTextColor="white"
              type="text"

              onChangeText={
                (valor) => handleInputChange("producao", (valor))
              }
              value={produto.producao}
            />






            {
              produto.img === "" || produto.nome === "" || produto.info === "" || produto.preco === "" || produto.estoque === "" || produto.producao === ""

                ?

                <TouchableOpacity
                  style={styles.btn}
                  disabled={true}
                >
                  <Text style={styles.textMain}>Adcionar</Text>
                </TouchableOpacity>


                :

                <View>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => addProduct()}>
                    <Text style={styles.textMain}>Cadastrar</Text>
                  </TouchableOpacity>
                </View>
            }













          </View>






        </ScrollView>






        <View style={{ height: 100 }}></View>



      </LinearGradient>

    </KeyboardAvoidingView>

  );

};