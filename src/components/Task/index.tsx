import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import { TaskDTO } from '../../dtos/taskDTO';
import { theme } from "../../theme";
import { style } from "./styles";

type TaskProps = TaskDTO & {
    id: string
    onTaskDone: (id: string) => void
    onTaskDeleted: (id: string) => void
}

export function Task({ title, isCompleted, id, onTaskDone, onTaskDeleted }: TaskProps) {
    return (
        <View style={style.taskContainer}>
            <TouchableOpacity 
                onPress={() => onTaskDone(id)}
            >
                <MaterialCommunityIcons 
                    name={isCompleted ? "checkbox-marked-circle-outline" : "checkbox-blank-circle-outline"}
                    size={22}
                    color={isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue}
                />
            </TouchableOpacity>
            <View style={style.textContainer}>
                <Text style={isCompleted ? style.textDone : style.textCreated}>{title}</Text>
            </View>
            <TouchableOpacity  onPress={() => onTaskDeleted(id)}>
                <MaterialCommunityIcons 
                    name="trash-can-outline"
                    size={20}
                    color={theme.colors.base.gray300}
                />
            </TouchableOpacity>
        </View>
    )
}