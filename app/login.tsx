// app/login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter, Href } from 'expo-router';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Contraseña:", password);
    // Navega a la pantalla de inicio después del inicio de sesión
    router.push('/' as Href);
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">Iniciar Sesión</Text>
      <TextInput
        className="border rounded p-2 w-full mb-4"
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        className="border rounded p-2 w-full mb-4"
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} className="bg-blue-500 rounded p-2 w-full">
        <Text className="text-white text-center">Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/register' as Href)} className="mt-4">
        <Text className="text-blue-500">¿No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
