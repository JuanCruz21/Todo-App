import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Pressable,Text} from 'react-native';
import useToken from '../../Services/zustand';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setToken} = useToken();
    const navigation = useNavigation();
    const handleLogin = async () => {
        const user = await fetch('http://127.0.0.1:8000/api/Auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        .then(response => response.json())
        .catch(error => console.log(error));

        setToken(user.token);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
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
            <Button title="Iniciar sesión" onPress={handleLogin} />
            
            <Pressable onPress={() => navigation.navigate('Register')}>
                <Text>Registrarse</Text>
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

export default Login;