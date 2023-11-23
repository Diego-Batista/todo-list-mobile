import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import { TaskDTO } from '../../dtos/taskDTO';
import { theme } from "../../theme";
import { style } from "./styles";

export function Task({ title, isCompleted }: TaskDTO) {
    return (
        <View style={style.taskContainer}>
            <TouchableOpacity>
                <MaterialCommunityIcons 
                    name={isCompleted ? "checkbox-marked-circle-outline" : "checkbox-blank-circle-outline"}
                    size={22}
                    color={isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue}
                />
            </TouchableOpacity>
            <View style={style.textContainer}>
                <Text style={isCompleted ? style.textDone : style.textCreated}>{title}</Text>
            </View>
            <TouchableOpacity>
                <MaterialCommunityIcons 
                    name="trash-can-outline"
                    size={20}
                    color={theme.colors.base.gray300}
                />
            </TouchableOpacity>
        </View>
    )
}