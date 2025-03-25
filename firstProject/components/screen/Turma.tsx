import Title from '@/components/ui/text/Title/Title';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View, Text, ScrollView, TextInput, Image } from 'react-native';
import Header from '../ui/Layout/Header';
import ImageComponent from '../ui/Image/ImageComponent';
import CustomTextInput from '../ui/TextInput/CustomTextInput';
import { TurmaType } from '@/types/TurmaType';
import TurmaList from '../ui/List/TurmaList';

const courseColors = [
  '#FF6B6B', // Vermelho
  '#4ECDC4', // Turquesa
  '#45B7D1', // Azul claro
  '#96CEB4', // Verde água
  '#FFEEAD', // Amarelo
  '#D4A5A5', // Rosa
];

const turmasData: TurmaType[] = Array.from({ length: 6 }, (_, i) => ({
  id: `${i + 1}`,
  name: `DSM${i + 1}`,
  color: courseColors[i % courseColors.length] // Cicla pelas cores
}));


export default function TurmaScreen() {
  return (
    <View style={styles.container}>
      <>
        <Header
          title='Turma'
          subtitle='DSM4'
          titleStyle={{ color: '#ff0000' }}
          subtitleStyle={{ color: '#000000' }}
        />
        <ImageComponent
          uri='https://cdn-icons-png.flaticon.com/512/7092/7092289.png'
        />
        <CustomTextInput
          hint="Digite o nome da turma..."
          inputStyle={styles.customInput}
        />
      </>

      <TurmaList
        turmas={turmasData}
        style={styles.listContainer}
      />

      <View style={styles.separator} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  customInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  listContainer:{
    paddingHorizontal:16
  }
});
