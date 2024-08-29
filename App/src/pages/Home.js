import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    const [text, setText] = React.useState('');
    const [Tareas, setTareas] = React.useState([]);

    const agregartarea = (texto) => {
        if (texto.length > 0) {
            setTareas([...Tareas, { nombre: texto, id: Math.random().toString(36).substring(7) }]);
            setText('');
        }
    };

    const eliminar = (id) => {
        setTareas(Tareas.filter(tarea => tarea.id !== id));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Agregar tarea"
            />
            <TouchableOpacity onPress={() => agregartarea(text)} style={styles.button}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
            {Tareas.map(tarea => (
                <View key={tarea.id} style={styles.tarea}>
                    <Text>{tarea.nombre}</Text>
                    <TouchableOpacity onPress={() => eliminar(tarea.id)} style={styles.eliminarButton}>
                        <Text style={styles.eliminarButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
    tarea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    eliminarButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 4,
    },
    eliminarButtonText: {
        color: 'white',
    },
});