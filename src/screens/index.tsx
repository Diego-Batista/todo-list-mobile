import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Empty } from "../components/Empty";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import { TaskDTO } from "../dtos/taskDTO";
import { style } from "./styles";

export function HomeScreen() {
    const [tasks, setTasks] = useState<TaskDTO[]>([
        // {
        //     id: '1',
        //     isCompleted: true,
        //     title: 'Task 1'
        // },
        // {
        //     id: '2',
        //     isCompleted: false,
        //     title: 'Task 2'
        // },
        // {
        //     id: '3',
        //     isCompleted: true,
        //     title: 'Task 3'
        // },
    ])

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

                <FlatList 
                    data={tasks}
                    keyExtractor={(tasks) => tasks.id!}
                    renderItem={({item}) => (
                        <Task 
                            key={item.id}
                            title={item.title}
                            isCompleted={item.isCompleted}
                        />
                    )}
                  ListEmptyComponent={<Empty />}
                />
            </View>
        </View>
    )
}