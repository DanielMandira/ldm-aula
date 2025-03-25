import { TurmaType } from '@/types/TurmaType';
import styles from './styles';
import { FlatList, ListRenderItem, StyleProp, View, ViewStyle } from 'react-native';
import { TurmaItem } from '../TurmaItem';

type TurmaListProps = {
    turmas: TurmaType[];
    style?: StyleProp<ViewStyle>;
    itemStyle?: ViewStyle;
};

export default function TurmaList({
    turmas,
    style,
    itemStyle
}: TurmaListProps) {
    const renderItem: ListRenderItem<TurmaType> = ({ item }) => (
        <TurmaItem turma={item} style={itemStyle} />
    );
    return (
        <FlatList
            data={turmas}
            renderItem={renderItem}
            keyExtractor={(item)=> item.id}
            contentContainerStyle={[styles.container,style]}
            showsVerticalScrollIndicator={false}
        />
    );
}