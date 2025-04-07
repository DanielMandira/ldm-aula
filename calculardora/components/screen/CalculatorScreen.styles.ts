import { StyleSheet } from 'react-native';

// Cores para cada operação
export const operationColors = {
  '+': '#4CAF50', // Verde
  '-': '#F44336', // Vermelho
  '×': '#2196F3', // Azul
  '÷': '#FF9800', // Laranja
};

export const calculatorScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  operationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  operationButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedOperation: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  operationText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  resultLabel: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  historyContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    maxHeight: 200,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  historyList: {
    maxHeight: 150,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  historyExpression: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  historyResult: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  emptyHistory: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 10,
  },
  clearButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 