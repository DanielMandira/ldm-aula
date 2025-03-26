import { TurmaType } from '@/types/TurmaType';
import { Button, FlatList, ListRenderItem, StyleProp, View, ViewStyle } from 'react-native';
import { useState } from 'react';
import { Text } from '@/components/Themed';

export default function Counter({}){
    const [count, setCount] = useState(0)
    return (
       <View>
        <Text>
            DSM: {count}
        </Text>
        <Button title="Incrementar" onPress={() => setCount(count + 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
       </View>
    );
}