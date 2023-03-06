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





export default function Deleteproducts({ navigation }) {



  const { user, idProduct } = useContext(AuthContext);

  const [products, setProducts] = useState([]);















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











  const deleteProduct = async () => {

    const endpointPhp = 'http://127.0.0.1:4000/_github/php_api_bistro_data';

    await fetch(`${endpointPhp}/?action=deleteproduto`, {
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
          console.log(result);
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
            'rgba(251, 195, 95, 1.0)',
            'rgba(251, 195, 95, 0.5)'
          ]
        }
        style={styles.containerMain}
      >



        <ScrollView>



          <LinearGradient

            colors={
              [
                'rgba(250, 65, 35, 1.0)',
                'rgba(250, 85, 38, 0.5)'
              ]
            }
              style={styles.containerHeader}
            >
          

            <Text style={styles.textMain}>Tela Delete</Text>


          <View style={styles.contentHeader}>

           <Text style={styles.textInfo}>{`User :  ${user}`}</Text>


            <LinearGradient
              colors={['#66110A', '#F42E16']}
              style={styles.containerBtn}
            >


            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}>
              <Text style={styles.textMain}>Voltar</Text>
            </TouchableOpacity>


            </LinearGradient>

          </View>


          </LinearGradient>






          <LinearGradient
            colors={['#66110A', '#F42E16']}
            style={styles.containerData}
          >
     
            <Text >{` Id :  ${products.id}`}</Text>

            <Text style={styles.contentData}>{` Img :     ${products.img}`}</Text>

            <Text style={styles.contentData}>{` Nome :    ${products.nome}`}</Text>

            <Text style={styles.contentData}>{` Info  :   ${products.info}`}</Text>

            <Text style={styles.contentData}>{` Preço :   ${products.preco}`}</Text>





            <LinearGradient
                  colors={['#EB610C', '#FFA533']}
                  style={styles.containerBtn}
                >

              <TouchableOpacity               
                onPress={() => deleteProduct()}>
                <Text style={styles.textMain} >Deletar</Text>

              </TouchableOpacity>

           </LinearGradient>



          </LinearGradient>



        </ScrollView>







        <View style={{ height: 100 }}></View>



      </LinearGradient>

    </KeyboardAvoidingView>


  );
}