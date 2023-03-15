import React, { useContext, useState, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';







import { AuthContext } from '../../contexts/auth';

import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';



export default function Updateproducts({ route, navigation }) {


  const { user, idProduct } = useContext(AuthContext);


  const [products, setProducts] = useState([]);


  const { productImg } = route.params;



  const [produto, setProduto] = useState({
    id: idProduct,
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




  const updateProduct = async () => {

    const endpointPhp = 'http://127.0.0.1:4000/_github/php_api_bistro_data';

    await fetch(`${endpointPhp}/?action=updateproduto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        produto
      })

    })
      .then((response) => response.json())

      .then(
        (result) => {

          if (result === produto.nome) {

            navigation.navigate("Home");

            console.log(" produto " + result + " atualizado com sucesso ");

          } else {
            console.log(result);
          }
        });
  }





  useEffect(() => {

    getProducts();


    /*
    const endpointPhp  = 'http://127.0.0.1:4000/_github/php_api_bistro_data';

    fetch(`${endpointPhp}/?action=getproduto&id=${idProduct}`)
          .then(res => res.json())
          .then(
               (result)=>{
                   setProducts(result)
               }
          )    
         .catch(() => {
          Alert.alert('Erro', 'Não foi possível carregar os dados do Produto');
         });
   */



  }, []);



  const getProducts = async () => {

    const endpointPhp = 'http://127.0.0.1:4000/_github/php_api_bistro_data';

    await fetch(`${endpointPhp}/?action=getproduto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        idProduct
      })



    })

      .then(res => res.json())
      .then(
        (result) => {
          setProducts(result)
        }
      )

  }






  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >

      <LinearGradient

        colors={
          [
            'rgba(221, 175, 95, 1.0)',
            'rgba(251, 195, 95, 0.5)'
          ]
        }
        style={styles.containerMain}
      >

        <LinearGradient

          colors={
            [
              'rgba(250, 165, 35, 1.0)',
              'rgba(250, 185, 38, 0.5)'
            ]
          }

          style={styles.containerHeader}
        >


          <Text style={styles.textMain}>Tela Update</Text>

          <View style={styles.contentHeader}>

            <Text style={styles.textInfo}>{`User: ${user}`}</Text>

            <LinearGradient
              colors={['#66110A', '#F42E16']}
              style={styles.containerBtn}
            >

              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Home")}>
                <Text style={styles.textAlert}>Voltar</Text>
              </TouchableOpacity>

            </LinearGradient>

          </View>

        </LinearGradient>



        <LinearGradient
          colors={['#66110A', '#FFB233']}
          style={styles.containerData}
        >

          <View>
            <Image
              source={require(`../../../assets/${productImg}.png`)}
              style={styles.contentDataImg}
            />
          </View>


          <TextInput
            style={styles.input}
            placeholder={` Img :   ${products.img}`}
            placeholderTextColor="#F1E767"
            type="text"

            onChangeText={
              (valor) => handleInputChange("img", (valor))
            }
            value={produto.img}
          />


          <TextInput
            style={styles.input}
            placeholder={` Nome :   ${products.nome}`}
            placeholderTextColor="#F1E767"
            type="text"

            onChangeText={
              (valor) => handleInputChange("nome", (valor))
            }
            value={produto.nome}
          />


          <TextInput
            style={styles.input}
            placeholder={` Info  :   ${products.info}`}
            placeholderTextColor="#F1E767"
            type="text"

            onChangeText={
              (valor) => handleInputChange("info", (valor))
            }
            value={produto.info}
          />


          <TextInput
            style={styles.input}
            placeholder={` Preco :   ${products.preco}`}
            placeholderTextColor="#F1E767"
            type="text"

            onChangeText={
              (valor) => handleInputChange("preco", (valor))
            }
            value={produto.preco}
          />


          <TextInput
            style={styles.input}
            placeholder={` Estoque :  ${products.estoque}`}
            placeholderTextColor="#F1E767"
            type="text"

            onChangeText={
              (valor) => handleInputChange("estoque", (valor))
            }
            value={produto.estoque}
          />


          <TextInput
            style={styles.input}
            placeholder={` Produção :  ${products.producao}`}
            placeholderTextColor="#F1E767"
            type="text"

            onChangeText={
              (valor) => handleInputChange("producao", (valor))
            }
            value={produto.producao}
          />


          {
            produto.img === "" || produto.nome === "" || produto.info === "" || produto.preco === ""
              ?
              <LinearGradient
                colors={['#66110A', '#F42E16']}
                style={styles.containerBtn}
              >

                <TouchableOpacity
                  disabled={true}
                >
                  <Text style={styles.textAlert}>Editar</Text>
                </TouchableOpacity>

              </LinearGradient>
              :

              <LinearGradient
                colors={['#F42E16', '#66110A']}
                style={styles.containerBtn}
              >

                <TouchableOpacity
                  onPress={() => updateProduct()}>
                  <Text style={styles.textAlert}>Atualizar</Text>
                </TouchableOpacity>

              </LinearGradient>

          }


        </LinearGradient>

        {/*  <View style={{ height: 100 }}></View> */}

      </LinearGradient>

    </KeyboardAvoidingView>


  );
}