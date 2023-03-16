import React, { useContext, useState} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';


import { AuthContext, endpointPhp } from '../../contexts/auth';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';



export default function Insertuser({ navigation }) {


    const { setUser, endpointPhp } = useContext(AuthContext);


    const [datauser, setDatauser] = useState({
        name: '',
        email: '',
        password: ''
    });



    const [errorValidate, setErrorValidate] = useState({
        email: '',
        password: '',
        msg: ''
    });




    const handleInputChange = (atribute, value) => {

        setDatauser({
            ...datauser, [atribute]: value
        })
    }




    const validate = () => {


        if (datauser.email.includes('@') && datauser.email.includes('.com')) {

            setErrorValidate({
                ...errorValidate, ['email']: false

            })

            console.log(' email ok ');

            if (datauser.password.length >= 8) {

                setErrorValidate({
                    ...errorValidate, ['email']: false,
                    errorValidate, ['password']: false
                });

                addUser();

                console.log(
                    " name  " + datauser.name +
                    " email  " + datauser.email +
                    " password " + datauser.password +
                    " senha ok , cad finalizado chamar metodo de banco de dados aqui! "
                );

            } else {

                setErrorValidate({
                    ...errorValidate, ['password']: true,
                    errorValidate, ['msg']: 'senha minimo de 8 caracteres'
                });
                console.log(' senha minimo de 8 caracteres ');

            }

        } else {

            setErrorValidate({
                ...errorValidate, ['email']: true,
                errorValidate, ['msg']: 'email invalido!'
            })
            console.log('erro no email ');
        }

        setDatauser({
            ...datauser, ["name"]: "",
            datauser, ["email"]: "",
            datauser, ["password"]: ""
        })

    }




    const addUser = async () => {      

        await fetch(`${endpointPhp}/?action=adduser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                datauser
            })

        })
            .then((res) => res.json())

            .then(
                (result) => {

                    if (result === datauser.name) {

                        setUser(result);

                        navigation.navigate("Home");

                        console.log(" nome " + datauser.name + " email " + datauser.email + " senha " + datauser.password + " retorno da api:  " + result);


                    } else {

                        console.log(" nome " + datauser.name + " email " + datauser.email + " senha " + datauser.password + " retorno da api:  " + result);
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
                        <Text style={styles.textMain}>Tela de Cadastro</Text>
                    </View>


                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder=" digite seu Nome"
                            placeholderTextColor="#cc0000"
                            type="text"

                            onChangeText={
                                (valor) => handleInputChange("name", (valor))
                            }
                            value={datauser.name}
                        />
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
                            value={datauser.email}
                        />
                    </View>


                    <View>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="digite uma senha"
                            placeholderTextColor="#cc0000"
                            type="text"

                            onChangeText={
                                (valor) => handleInputChange("password", (valor))
                            }
                            value={datauser.password}
                        />
                    </View>


                    {
                        errorValidate.email === true || errorValidate.password === true
                            ?
                            <View>
                                <Text style={styles.textAlert}>{errorValidate.msg}</Text>
                            </View>
                            :
                            <View></View>
                    }


                    {
                        datauser.name === "" || datauser.email === "" || datauser.password === ""

                            ?

                            <LinearGradient
                                colors={['#EB610C', '#FFA533']}
                                style={styles.containerBtn}
                            >

                                <TouchableOpacity
                                    style={styles.btnLogin}
                                    disabled={true}
                                >
                                    <Text style={styles.textMain}>Cadastrar</Text>
                                </TouchableOpacity>

                            </LinearGradient>

                            :

                            <LinearGradient
                                colors={['#D4580B', '#FA6326']}
                                style={styles.containerBtn}
                            >


                                <View>
                                    <TouchableOpacity
                                        style={styles.btnLogin}
                                        onPress={validate}>
                                        <Text style={styles.textMain}>Enviar</Text>
                                    </TouchableOpacity>
                                </View>

                            </LinearGradient>
                    }

                    <Text style={styles.textInfo}>

                        {` já tem cadastro ?  `}

                        <Text style={styles.textAlert}
                            onPress={() => navigation.navigate("Login")}
                        >
                            {` faça login agora... `}
                        </Text>

                    </Text>

                </View>


                <View style={{ height: 100 }}></View>

            </LinearGradient>

        </KeyboardAvoidingView>

    )

}