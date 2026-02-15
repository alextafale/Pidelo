import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { RootStackParamList } from '../../navigation/StacNavigation';
import { RouteProp } from '@react-navigation/native';

type AuthNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;
type AuthRouteProp = RouteProp<RootStackParamList, 'Auth'>;

type Props = {
  navigation: AuthNavigationProp;
  route: AuthRouteProp;
};

export default function Auth({ navigation, route }: Props) {
  const { accountType } = route.params;

  const handleRegister = async () => {
    // Aquí implementarás el registro real
    // Por ahora simulamos un registro exitoso
    await AsyncStorage.setItem('userToken', 'fake-token-123');
    await AsyncStorage.setItem('accountType', accountType);
    navigation.replace('HomeFeed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Text style={styles.subtitle}>
        Tipo de cuenta: {accountType === 'client' ? 'Cliente' : 'Negocio'}
      </Text>
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Registrarse (Demo)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#22c55e',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});