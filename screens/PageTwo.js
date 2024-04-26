// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Image } from 'react-native';
// import CustomInput from './CustomInput';
// 

// const PageTwo = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const route = useRoute();
//     const navigation = useNavigation(); // Utilisation de useNavigation pour la navigation

//     // Get photo data from navigation parameters
//     const photoUri = route.params?.photoUri;

//     return (
//         <View style={styles.container}>
//             <Image source={{ uri: photoUri }} style={styles.logo} />
//             <CustomInput />
//             <CustomInput />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     logo: {
//         width: 200,
//         height: 200,
//     },
// })

// export default PageTwo;
