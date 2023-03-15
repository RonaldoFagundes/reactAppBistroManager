import React, { useContext, useState } from 'react';



import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';



import { AuthContext } from '../../contexts/auth';

import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';






export default function Login({ navigation }) {


  const { setUser } = useContext(AuthContext);


  const [errorLogin, setErrorLogin] = useState({
    status: '',
    msg: ''
  });




  const [login, setLogin] = useState({
    email: '',
    password: '',
  });




  const handleInputChange = (atributo, valor) => {
    setLogin({
      ...login, [atributo]: valor
    })
  }



  const logar = async () => {

    const endpointPhp = 'http://127.0.0.1:4000/_github/php_api_bistro_data';

    await fetch(`${endpointPhp}/?action=login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        login
      })

    })
      .then(res => res.json())
      .then(
        (result) => {

          if (result != "email ou senha incorretos!") {

            setUser(result);

            setErrorLogin({
              ...errorLogin, ['status']: false
            });

            setLogin({
              ...login, ["email"]: "",
              login, ["password"]: ""
            });

            navigation.navigate("Home");

            console.log(" email " + login.email + " senha " + login.password + " conectado com sucesso com ususario  " + result);

          } else {

            setErrorLogin({
              ...errorLogin, ['status']: true,
              errorLogin, ['msg']: result
            });


            setLogin({
              ...login, ["email"]: "",
              login, ["password"]: ""
            });

            console.log("erro " + login.email + " " + login.password + " " + result)
          }


        });

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


        <View style={styles.contentMain}>


          <View>
            <Text style={styles.textMain}>Tela de Login</Text>
          </View>



          <View>

            <TextInput
              style={styles.input}
              placeholder=" digite seu email"
              placeholderTextColor="#cc0000"
              type="text"

              onChangeText={
                (valor) => handleInputChange("email", (valor))
              }
              value={login.email}
            />

          </View>


          <View>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="digite sua senha"
              placeholderTextColor="#cc0000"
              type="text"

              onChangeText={
                (valor) => handleInputChange("password", (valor))
              }
              value={login.password}
            />
          </View>



          {


            errorLogin.status === true
              ?
              <View>
                <Text style={styles.textAlert}>{errorLogin.msg}</Text>
              </View>
              :
              <View></View>
          }



          {
            login.email === "" || login.password === ""

              ?

              <LinearGradient
                colors={['#EB610C', '#FFA533']}
                style={styles.containerBtn}
              >

                <TouchableOpacity
                  disabled={true}
                >
                  <Text style={styles.textMain} >Login</Text>
                </TouchableOpacity>

              </LinearGradient>

              :

              <LinearGradient
                colors={['#D4580B', '#FA6326']}
                style={styles.containerBtn}
              >
                <TouchableOpacity
                  onPress={logar}>
                  <Text style={styles.textMain} >Logar</Text>
                </TouchableOpacity>

              </LinearGradient>

          }


          <Text style={styles.textInfo}>

            {` não tem cadastro ?  `}

            <Text style={styles.textAlert}
              onPress={() => navigation.navigate("Insertuser")}
            >
              {` cadastre-se agora... `}
            </Text>

          </Text>

        </View>

        <View style={{ height: 100 }}></View>


      </LinearGradient>

    </KeyboardAvoidingView>

  )

}