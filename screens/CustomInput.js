import React from 'react';
import { StyleSheet, View,Text,TextInput } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View>
        <TextInput value={value}
        onChangeText={setValue} 
        placeholder={placeholder} 
        style= {styles.input}
        secureTextEntry={secureTextEntry}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width :300 ,
        marginHorizontal: 10,
        marginVertical: 5,
    }
})
export default CustomInput;
