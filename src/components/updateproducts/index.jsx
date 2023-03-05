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





export default function Updateproducts({ navigation }) {




  const { user, idProduct } = useContext(AuthContext);


  const [products, setProducts] = useState([]);



  const [produto, setProduto] = useState({

    img:'',
    nome:'',
    info:'',
    preco:'',
    estoque:'',
    producao:''
});





const handleInputChange=(atribute, value)=>{

     setProduto({
        ...produto,[atribute]:value 
     })
}



const updateProduct = async()=>{

  console.log(produto)
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
            'rgba(0, 0, 45, 1)',
            'rgba(0, 0, 45, 0.8)'
          ]
        }
        style={styles.containerMain}
      >

     


          <ScrollView>




            <View style={styles.containerHeader}>

              <Text style={styles.textInfo}>{`User: ${user}`}</Text>

              <Text style={styles.textMain}>Tela Update</Text>



              <View>

                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.navigate("Home")}>
                  <Text >Voltar</Text>
                </TouchableOpacity>

              </View>


            </View>








           <View style={styles.containerData}>


              <Text style={styles.textMain}>{` id ${products.id}`}</Text>


            

              <TextInput 
                style={styles.input}
                placeholder={` Img :   ${products.img}`}
                placeholderTextColor="white"
                type="text"

                onChangeText={
                  (valor) => handleInputChange("img", (valor))
                }
                value={produto.img}
              />





              <TextInput
                style={styles.input}
                placeholder={` Nome :   ${products.nome}`}
                placeholderTextColor="white"
                type="text"

                onChangeText={
                  (valor) => handleInputChange("nome", (valor))
                }
                value={produto.nome}
              />




              <TextInput
                style={styles.input}
                placeholder={` Info :   ${products.info}`}
                placeholderTextColor="white"
                type="text"

                onChangeText={
                  (valor) => handleInputChange("info", (valor))
                }
                value={produto.info}
              />




              <TextInput
                style={styles.input}
                placeholder={` Preco :   ${products.preco}`}
                placeholderTextColor="white"
                type="text"

                onChangeText={
                  (valor) => handleInputChange("preco", (valor))
                }
                value={produto.preco}
              />





              <TextInput
                style={styles.input}
                placeholder={` Estoque :   ${products.estoque}`}
                placeholderTextColor="white"
                type="text"

                onChangeText={
                  (valor) => handleInputChange("estoque", (valor))
                }
                value={produto.estoque}
              />





              <TextInput
                style={styles.input}
                placeholder={` Produção :   ${products.producao}`}
                placeholderTextColor="white"
                type="text"

                onChangeText={
                  (valor) => handleInputChange("producao", (valor))
                }
                value={produto.producao}
              />






              {
                produto.img === "" || produto.nome === "" || produto.info === "" || produto.preco === "" 

                  ?

                  <TouchableOpacity
                    style={styles.btn}
                    disabled={true}
                  >
                    <Text style={styles.textMain}>Editar</Text>
                  </TouchableOpacity>


                  :

                  <View>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => updateProduct()}>
                      <Text style={styles.textMain}>Atualizar</Text>
                    </TouchableOpacity>
                  </View>
              }







              {/*
              
              <View style={styles.contentData}>

                <Text style={styles.contentDataS}>id</Text>
                <Text style={styles.contentDataM}>img</Text>
                <Text style={styles.contentDataM}>Nome</Text>
                <Text style={styles.contentDataX}>Info</Text>
                <Text style={styles.contentDataM}>Preco</Text>
                <Text style={styles.contentDataM}>Estoque</Text>
                <Text style={styles.contentDataM}>Produção</Text>

              </View>


              <View style={styles.contentData}>

                <Text style={styles.contentDataS}>{products.id}</Text>
                <Text style={styles.contentDataM}>{products.img}</Text>
                <Text style={styles.contentDataM}>{products.nome}</Text>
                <Text style={styles.contentDataX}>{products.info}</Text>
                <Text style={styles.contentDataM}>{products.preco}</Text>
                <Text style={styles.contentDataM}>{products.estoque}</Text>
                <Text style={styles.contentDataM}>{products.producao}</Text>

              </View> 
              
              */}


















              {/* 
                
                
                {            
                
                products.map(
  
                  (produto) => 
  
                  <View style={styles.containerProducts} key={produto.id}>
                                     
                    <Text style={styles.contentProductsS}>{produto.id}</Text> 
                    <Text style={styles.contentProductsM}>{produto.nome}</Text> 
                    <Text style={styles.contentProductsX}>{produto.info}</Text>
                    <Text style={styles.contentProductsS}>{`R$ ${produto.preco},00`}</Text>
                                
                    
                  </View>
  
                    
  
                )     
              
              } 
              
              */}













            </View>




          </ScrollView>




      





        <View style={{ height: 100 }}></View>



      </LinearGradient>


    </KeyboardAvoidingView>




  );
}