import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';
type Operation = '+' | '-' | '×' | '÷';

interface OperationButtonProps {
  operation: Operation;
  isSelected: boolean;
  onPress: (operation: Operation) => void;
  color: string;
}

export const OperationButton: React.FC<OperationButtonProps> = ({
  operation,
  isSelected,
  onPress,
  color,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color },
        isSelected && styles.selected,
      ]}
      onPress={() => onPress(operation)}
    >
      <Text style={styles.text}>{operation}</Text>
    </TouchableOpacity>
  );
};
