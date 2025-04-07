import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { calculatorScreenStyles, operationColors } from './CalculatorScreen.styles';

// Definir o tipo para as operações
type Operation = '+' | '-' | '×' | '÷';

export const CalculatorScreen = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState<Operation | ''>('');
  const [history, setHistory] = useState<Array<{expression: string, result: string, color: string}>>([]);

  const calculate = (op: Operation) => {
    if (!firstNumber || !secondNumber) {
      setResult('Digite dois números');
      return;
    }

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let calculatedResult = 0;

    switch (op) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '×':
        calculatedResult = num1 * num2;
        break;
      case '÷':
        if (num2 === 0) {
          setResult('Não é possível dividir por zero');
          return;
        }
        calculatedResult = num1 / num2;
        break;
    }

    const resultString = calculatedResult.toString();
    setResult(resultString);
    setOperation(op);
    
    // Adicionar ao histórico com a cor da operação
    const expression = `${num1} ${op} ${num2}`;
    const newHistory = [
      { expression, result: resultString, color: operationColors[op] },
      ...history.slice(0, 4) // Manter apenas os 5 últimos resultados
    ];
    setHistory(newHistory);
  };

  const clearAll = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
    setOperation('');
  };

  // Obter a cor atual para o resultado
  const getCurrentColor = () => {
    return operation ? operationColors[operation] : '#333';
  };

  return (
    <SafeAreaView style={calculatorScreenStyles.container}>
      <Text style={calculatorScreenStyles.title}>Calculadora Simples</Text>
      
      <View style={calculatorScreenStyles.inputContainer}>
        <Text style={calculatorScreenStyles.label}>Primeiro Número:</Text>
        <TextInput
          style={calculatorScreenStyles.input}
          value={firstNumber}
          onChangeText={setFirstNumber}
          keyboardType="numeric"
          placeholder="Digite o primeiro número"
        />
        
        <Text style={calculatorScreenStyles.label}>Segundo Número:</Text>
        <TextInput
          style={calculatorScreenStyles.input}
          value={secondNumber}
          onChangeText={setSecondNumber}
          keyboardType="numeric"
          placeholder="Digite o segundo número"
        />
      </View>
      
      <View style={calculatorScreenStyles.operationContainer}>
        <TouchableOpacity 
          style={[
            calculatorScreenStyles.operationButton, 
            { backgroundColor: operationColors['+'] },
            operation === '+' && calculatorScreenStyles.selectedOperation
          ]} 
          onPress={() => calculate('+')}
        >
          <Text style={calculatorScreenStyles.operationText}>+</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            calculatorScreenStyles.operationButton, 
            { backgroundColor: operationColors['-'] },
            operation === '-' && calculatorScreenStyles.selectedOperation
          ]} 
          onPress={() => calculate('-')}
        >
          <Text style={calculatorScreenStyles.operationText}>-</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            calculatorScreenStyles.operationButton, 
            { backgroundColor: operationColors['×'] },
            operation === '×' && calculatorScreenStyles.selectedOperation
          ]} 
          onPress={() => calculate('×')}
        >
          <Text style={calculatorScreenStyles.operationText}>×</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            calculatorScreenStyles.operationButton, 
            { backgroundColor: operationColors['÷'] },
            operation === '÷' && calculatorScreenStyles.selectedOperation
          ]} 
          onPress={() => calculate('÷')}
        >
          <Text style={calculatorScreenStyles.operationText}>÷</Text>
        </TouchableOpacity>
      </View>
      
      <View style={calculatorScreenStyles.resultContainer}>
        <Text style={calculatorScreenStyles.resultLabel}>Resultado:</Text>
        <Text style={[calculatorScreenStyles.resultText, { color: getCurrentColor() }]}>
          {result || '0'}
        </Text>
      </View>
      
      <View style={calculatorScreenStyles.historyContainer}>
        <Text style={calculatorScreenStyles.historyTitle}>Últimos 5 Resultados:</Text>
        <ScrollView style={calculatorScreenStyles.historyList}>
          {history.length > 0 ? (
            history.map((item, index) => (
              <View key={index} style={calculatorScreenStyles.historyItem}>
                <Text style={calculatorScreenStyles.historyExpression}>{item.expression}</Text>
                <Text style={[calculatorScreenStyles.historyResult, { color: item.color }]}>
                  {item.result}
                </Text>
              </View>
            ))
          ) : (
            <Text style={calculatorScreenStyles.emptyHistory}>Nenhum cálculo realizado</Text>
          )}
        </ScrollView>
      </View>
      
      <TouchableOpacity style={calculatorScreenStyles.clearButton} onPress={clearAll}>
        <Text style={calculatorScreenStyles.clearButtonText}>Limpar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}; 