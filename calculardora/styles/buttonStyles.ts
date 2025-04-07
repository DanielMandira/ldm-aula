import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  button: {
    width: 65,
    height: 65,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  operatorButton: {
    backgroundColor: '#4a90e2',
  },
  functionButton: {
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    color: '#333333',
    fontSize: 22,
    fontWeight: '400',
  },
  operatorText: {
    color: '#ffffff',
  },
  functionText: {
    color: '#333333',
  },
}); 