import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Pressable,Text } from 'react-native';
import useToken from '../../Services/zustand';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_Confirmation] = useState('');
    const [name, setName] = useState('');
    const {setToken} = useToken();

    const handleLogin = async () => {
            const user = await fetch('http://127.0.0.1:8000/api/Auth/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    password_confirmation,
                }),
            })
            .then(response => {return response.json()})
            .catch(error => console.log(error));
            setToken(user.token);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmar Contraseña"
                secureTextEntry
                value={password_confirmation}
                onChangeText={setPassword_Confirmation}
            />
            <Button title="CrearCuenta" onPress={handleLogin} />
            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text>¿Ya tienes una cuenta?</Text>
                <Text>Iniciar sesión</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default Register;