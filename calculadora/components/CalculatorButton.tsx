import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from '../styles/buttonStyles';

interface CalculatorButtonProps {
  label: string;
  onPress: () => void;
  type?: 'number' | 'operator' | 'function';
}

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({ 
  label, 
  onPress, 
  type = 'number' 
}) => {
  return (
    <TouchableOpacity 
      style={[
        buttonStyles.button,
        type === 'operator' && buttonStyles.operatorButton,
        type === 'function' && buttonStyles.functionButton
      ]} 
      onPress={onPress}
    >
      <Text style={[
        buttonStyles.buttonText,
        type === 'operator' && buttonStyles.operatorText,
        type === 'function' && buttonStyles.functionText
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}; 