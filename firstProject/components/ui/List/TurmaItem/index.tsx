import { TurmaType } from '@/types/TurmaType';
import styles from './styles';
import { Touchable, TouchableOpacity, ViewStyle } from 'react-native';
import Title from '../../text/Title';

type TurmaItemProps={
    turma:TurmaType;
    style?:ViewStyle;
    onPress?:()=>void;
};

export default function turmaItem(
    {
        turma,
        style,
        onPress
    }:TurmaItemProps
){
    <TouchableOpacity
    style={[styles.itemContainer, style]}
    onPress={onPress}
    >
        <Title style={styles.itemText}>
            {turma.name}
        </Title>


    </TouchableOpacity>
    
}