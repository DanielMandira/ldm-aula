import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';
interface HistoryItem {
  expression: string;
  result: string;
  color: string;
}

interface HistoryListProps {
  history: HistoryItem[];
}

export const HistoryList: React.FC<HistoryListProps> = ({ history }) => {
  return (
    <ScrollView style={styles.container}>
      {history.length > 0 ? (
        history.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.expression}>{item.expression}</Text>
            <Text style={[styles.result, { color: item.color }]}>
              {item.result}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.empty}>Nenhum cálculo realizado</Text>
      )}
    </ScrollView>
  );
};

