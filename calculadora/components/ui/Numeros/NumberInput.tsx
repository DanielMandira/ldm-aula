import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface NumberInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        placeholder={`Digite ${label.toLowerCase()}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
}); 