import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logoImage from "../../assets/logo.png";
import { theme } from '../../theme';
import { style } from "./styles";

type HeaderProps = {
    task: string
    onChangeText: (task: string) => void
    onPress: () => void
    inputRef: React.RefObject<TextInput>
}

export function Header({ task, onChangeText, onPress, inputRef}: HeaderProps) {
    return (
        <View style={style.headerContainer}>
            <Image source={logoImage} />
            <View style={style.form}>
                <TextInput 
                    style={[style.input, inputRef.current?.isFocused() && task ? style.inputBorder : null]} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={theme.colors.base.gray300}
                    onChangeText={onChangeText}
                    value={task}
                    ref={inputRef}
                    autoCorrect={false}
                    onSubmitEditing={onPress}
                    returnKeyType='done'
                />
                <TouchableOpacity style={style.button} onPress={onPress}>
                    <Text>
                        <MaterialCommunityIcons name="plus-circle-outline" size={22} color={theme.colors.base.gray100} />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}