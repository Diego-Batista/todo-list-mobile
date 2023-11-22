import { ActivityIndicator, View } from 'react-native';
import { theme } from '../../theme';
import { style } from './styles';

export function Loading() {
    return (
        <View style={style.container} >
            <ActivityIndicator size={50} color={theme.colors.brand.blue}/>
        </View>
    )
}