import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logoImage from "../../assets/logo.png";
import { theme } from '../../theme';
import { style } from "./styles";

export function Header() {
    return (
        <View style={style.headerContainer}>
            <Image source={logoImage} />
            <View style={style.form}>
                <TextInput 
                    style={style.input} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={theme.colors.base.gray300}
                />
                <TouchableOpacity style={style.button}>
                    <Text>
                        <MaterialCommunityIcons name="plus-circle-outline" size={22} color={theme.colors.base.gray100} />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}