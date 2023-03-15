
import React, { useContext, useState, useEffect } from 'react';

import {
  Alert,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';


import { AuthContext } from '../../contexts/auth';

import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';





export default function Home({ navigation }) {




  const [products, setProducts] = useState([]);

  const { user, setIdProduct } = useContext(AuthContext);

  const [load, setLoad] = useState(true)





  useEffect(() => {

    getProducts();



    // const endpointNode =  'http://192.168.236.217:3000/tb_usuarios';

    // const endpointPhp  =  'https://phpdatabaseapi.ronaldofagundes.repl.co/';

    // const endpointPhp  =  'http://127.0.0.1:4000/_github/php_api_bistro_data/listProducts.php';

    // const endpointPhp  =  'http://192.168.21.204:4000/_github/php_api_bistro_data/listProducts.php';

    // const endpointPhp  =  'http://127.0.0.1:4000/_github/php_api_bistro_data/listProducts.php';




    /*
    const endpointPhp  = 'http://127.0.0.1:4000/_github/php_api_bistro_data';
    
    fetch(`${endpointPhp}/?action=listprodutos`)
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

    navigation.addListener('focus', () => setLoad(!load))

  }, [load, navigation]);






  const getProducts = async () => {

    const endpointPhp = 'http://127.0.0.1:4000/_github/php_api_bistro_data';

    await fetch(`${endpointPhp}/?action=listprodutos`)
      .then(res => res.json())
      .then(
        (result) => {
          setProducts(result)
        }
      )
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados do Produto');
      });


  }








  const updateProduct = (id, img) => {

    setIdProduct(id);

    navigation.navigate("Updateproducts", { productImg: img });
    console.log(id + " " + img)
  }








  const deleteProduct = (id, img) => {

    setIdProduct(id);

    navigation.navigate("Deleteproducts", { productImg: img });

    console.log(id + "  " + img)
  }





  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >

      <ScrollView>

       <LinearGradient
          colors={['#66110A', '#FFB233']}
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


           <Text style={styles.textMain}>Tela Home</Text>


            <View style={styles.contentHeader}>

              <Text style={styles.textInfo}>{`Bem vindo(a)! ${user}`}</Text>

              <LinearGradient
                colors={['#66110A', '#F42E16']}
                style={styles.containerBtn}
              >

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Login")}
                >
                  <Text style={styles.textAlert} >Logout</Text>
                </TouchableOpacity>

              </LinearGradient>

            </View>

          </LinearGradient>



          <LinearGradient
            colors={['#66110A', '#F42E16']}
            style={styles.containerBtn}
          >

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Insertproducts")}
            >
              <Text style={styles.textAlert}>Adcionar</Text>
            </TouchableOpacity>

          </LinearGradient>


          <LinearGradient
            colors={['#FFB233', '#66110A']}
            style={styles.containerData}
          >

            <View style={styles.containerProducts}>

             <View style={styles.contentProducts}>


                <View style={styles.contentProductsS}>
                  <Text style={styles.textDados}>id</Text>
                </View>


                <View style={styles.contentProductsS}>
                  <Text style={styles.textDados}>img</Text>
                </View>


                <View style={styles.contentProductsM}>
                  <Text style={styles.textDados}>nome</Text>
                </View>


                <View style={styles.contentProductsX}>
                  <Text style={styles.textDados}>informações</Text>
                </View>


                <View style={styles.contentProductsM}>
                  <Text style={styles.textDados}>preço</Text>
                </View>


                <View style={styles.contentProductsS}>
                  <Text style={styles.textDados}>Estoque</Text>
                </View>


                <View style={styles.contentProductsS}>
                  <Text style={styles.textDados}>Produção</Text>
                </View>


                <View style={styles.contentProductsX}>
                  <Text style={styles.textDados}>Ações</Text>
                </View>


              </View>


              {

                products.map(

                  (produto) =>

                    <View style={styles.contentProducts} key={produto.id}>



                      <View style={styles.contentProductsS}>
                        <Text style={styles.textDados}>{produto.id}</Text>
                      </View>


                      <View>
                        <Image
                          source={require(`../../../assets/${produto.img}.png`)}
                          style={styles.contentProductsImg}
                        />
                      </View>



                      <View style={styles.contentProductsM}>
                        <Text style={styles.textDados}>{produto.nome}</Text>
                      </View>


                      <View style={styles.contentProductsX}>
                        <Text style={styles.textDados} >{produto.info}</Text>
                      </View>


                      <View style={styles.contentProductsM}>
                        <Text style={styles.textDados}>{`R$ ${produto.preco},00`}</Text>
                      </View>


                      <View style={styles.contentProductsS}>
                        <Text style={styles.textDados} >{produto.estoque}</Text>
                      </View>




                      <View style={styles.contentProductsS}>
                        <Text style={styles.textDados} >{produto.producao}</Text>
                      </View>




                      <LinearGradient
                        colors={['#66110A', '#F42E16']}
                        style={styles.containerBtn}
                      >

                        <TouchableOpacity
                          onPress={() => updateProduct(produto.id, produto.img)}>
                          <Text style={styles.textAlert}>Update</Text>
                        </TouchableOpacity>


                      </LinearGradient>



                      <LinearGradient
                        colors={['#66110A', '#F42E16']}
                        style={styles.containerBtn}
                      >


                        <TouchableOpacity

                          onPress={() => deleteProduct(produto.id, produto.img)}>
                          <Text style={styles.textAlert} >Delete</Text>
                        </TouchableOpacity>

                      </LinearGradient>


                    </View>

                )

              }



            </View>



          </LinearGradient>


        </LinearGradient>


      </ScrollView>



      <View style={{ height: 100 }}></View>


    </KeyboardAvoidingView>


  );
}















