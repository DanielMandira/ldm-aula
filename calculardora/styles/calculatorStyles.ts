import { StyleSheet } from 'react-native';

export const calculatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    marginBottom: 20,
  },
  displayText: {
    color: '#333333',
    fontSize: 48,
    fontWeight: '300',
  },
  buttonContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
}); 