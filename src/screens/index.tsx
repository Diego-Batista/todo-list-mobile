import { Text, View } from "react-native";
import { Header } from "../components/Header";
import { style } from "./styles";

export function HomeScreen() {
    return (
        <View style={style.container}>
            <Header />
            <View style={style.tasksContainer}>
                <View style={style.info}>
                    <View style={style.row}>
                        <Text style={style.tasksCreated}>Criadas</Text>
                        <View style={style.counterContainer}>
                            <Text style={style.counter}>0</Text>
                        </View>
                    </View>
                    <View style={style.row}>
                        <Text style={style.tasksDone}>Concluidas</Text>
                        <View style={style.counterContainer}>
                            <Text style={style.counter}>0</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}