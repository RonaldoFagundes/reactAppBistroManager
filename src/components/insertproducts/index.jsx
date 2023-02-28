import React, { useContext, useState, useEffect}  from 'react';

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




     export default function Inserproducts({ }){

        

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




        const addProduct=()=>{


            console.log(

                " img   "+produto.img+
                " nome  "+produto.nome+
                " info  "+produto.info+
                " preco "+produto.preco+
                " estoque "+produto.estoque+
                " producao "+produto.producao
                
                )



            setProduto({
                ...produto,  ["img"]: "" ,
                   produto , ["nome"]: "",
                   produto , ["info"]: "",
                   produto , ["preco"]: "",
                   produto , ["estoque"]: "",
                   produto , ["producao"]: "",
              })  

        }



         const addProduc = async()=>{
           
            
            const endpointPhp  = 'http://127.0.0.1:4000/_github/php_api_bistro_data';
		
            await fetch(`${endpointPhp}/?action=addproduto`,{
               method:'POST',
               headers:{
                   'Content-Type': 'application/json'
               },

               body:JSON.stringify({
                produto
               })
                  
            })
               .then((response)=>response.json())
               .then((responseJson)=>(
                   console.log(responseJson)
               ));

        
        
         }
      





       return(

        
        <View>




            <View>
                <Text>Tela de cadastro de produtos</Text>
            </View>






            <View>             





              <TextInput
               
               placeholder=" digite o valor da imagem"
               placeholderTextColor="black"
               type="text"

               onChangeText={
                (valor) => handleInputChange("img",(valor))            
               }
                value={produto.img}
              />



             <TextInput
               
               placeholder=" digite o nome do produto"
               placeholderTextColor="black"
               type="text"

               onChangeText={
                (valor) => handleInputChange("nome",(valor))            
               }
                value={produto.nome}
              />


            <TextInput
               
               placeholder=" digite informações sobre o produto"
               placeholderTextColor="black"
               type="text"

               onChangeText={
                (valor) => handleInputChange("info",(valor))            
               }
                value={produto.info}
              />


              <TextInput
               
               placeholder=" digite o valor do produto"
               placeholderTextColor="black"
               type="text"

               onChangeText={
                (valor) => handleInputChange("preco",(valor))            
               }
                value={produto.preco}
              />



             <TextInput
               
               placeholder=" digite a quantidade do estoque"
               placeholderTextColor="black"
               type="text"

               onChangeText={
                (valor) => handleInputChange("estoque",(valor))            
               }
                value={produto.estoque}
              />


             <TextInput
               
               placeholder=" digite a quantidade produzida"
               placeholderTextColor="black"
               type="text"

               onChangeText={
                (valor) => handleInputChange("producao",(valor))            
               }
                value={produto.producao}
              />





             <TouchableOpacity                    

                 onPress={() => addProduct() }
                >
                <Text >Adcionar</Text>

             </TouchableOpacity>





             </View>




         </View>

        );

     };