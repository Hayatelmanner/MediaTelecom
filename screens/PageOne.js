import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';

const LoginPage = () => {
  const imageAnimation = new Animated.Value(0); // Animation pour l'image
  const labelsAnimation = new Animated.Value(0); // Animation pour le titre
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showInputs, setShowInputs] = useState(false);

  useEffect(() => {
    Animated.timing(imageAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => setShowInputs(true)); // Changer l'état showInputs une fois l'animation terminée
  }, []);

  const imageTranslateY = imageAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0], // Animation du milieu de la page (200) vers le haut (0)
  });

  return (
    <>
      <View style={styles.container}>
        <Animated.Image source={require('../assets/logo.png')} style={[styles.logo, { transform: [{ translateY: imageTranslateY }] }]} />
      </View>

      <View style={styles.form}>
        {showInputs && (
          <>
            <View style={styles.formControl}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                autoCompleteType="email"
                textContentType="emailAddress"
                autoFocus
              />
            </View>
            <View style={styles.formControl}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                textContentType="password"
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Don't have an account? <Text style={styles.link}>Register</Text></Text>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  formControl: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#F06622',
    borderRadius: 8,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    color: '#F06622',
    textDecorationLine: 'underline',
  },
});

export default LoginPage;
