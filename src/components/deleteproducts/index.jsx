import React, { useContext, useState, useEffect } from 'react';



import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';





import { AuthContext } from '../../contexts/auth';

import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';





export default function Deleteproducts({ route, navigation }) {





  const { user, idProduct, endpointPhp } = useContext(AuthContext);


  const [products, setProducts] = useState([]);


  const { productImg } = route.params;






  useEffect(() => {

    getProducts();    

  }, []);








  const getProducts = async (idProd) => {  

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


           if(result==="produto deletado com sucesso!!!"){
            navigation.navigate("Home");
            console.log(result);
           }else{
            console.log(result);
           }
          



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


        <Text style={styles.textMain}>Tela Delete</Text>


        <View style={styles.contentHeader}>

          <Text style={styles.textInfo}>{`User :  ${user}`}</Text>

           <LinearGradient
            colors={['#66110A', '#F42E16']}
            style={styles.containerBtn}
           >

            <TouchableOpacity
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
              /*
              source={require(`../../../assets/${route.params.paramKey}.png` ) } 
              source={require("../../../assets/"+products.img+".png" ) } 

              source={require(`../../../assets/${route.params.paramTwo}.png` ) } 
              productImg
              */

              source={require(`../../../assets/${productImg}.png`)}
              style={styles.contentDataImg}
            />
          </View>


          <Text style={styles.contentData}>{` Nome   :  ${products.nome}`}</Text>

          <Text style={styles.contentData}>{` Info   :  ${products.info}`}</Text>

          <Text style={styles.contentData}>{` Preço  :  ${products.preco}`}</Text>



          <LinearGradient
            colors={['#66110A', '#F42E16']}
            style={styles.containerBtn}
          >

            <TouchableOpacity
              onPress={() => deleteProduct()}>
              <Text style={styles.textAlert} >Deletar</Text>

            </TouchableOpacity>

          </LinearGradient>



        </LinearGradient>


      </LinearGradient>


     {/*    <View style={{ height: 10 }}></View> */}

     

    </KeyboardAvoidingView>

  );
}