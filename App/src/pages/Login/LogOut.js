import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useToken from '../../Services/zustand';
const LogOut = () => {
    const {setToken} = useToken();
    const handleLogOut = async () => {
        await fetch('http://127.0.0.1:8000/api/Auth/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => {return response.json()})
        .catch(error => console.log(error));
        setToken(null);
    };

    return (
        <View style={styles.container}>
            <Button title="LogOut" onPress={handleLogOut} />
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
});

export default LogOut;