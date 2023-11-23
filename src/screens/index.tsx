import { useRef, useState } from "react";
import { Alert, FlatList, Text, TextInput, View } from "react-native";
import { Empty } from "../components/Empty";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import { TaskDTO } from "../dtos/taskDTO";
import { uuid } from "../utils/uuid";
import { style } from "./styles";

export function HomeScreen() {
    const [tasks, setTasks] = useState<TaskDTO[]>([
        {
            id: '1',
            isCompleted: true,
            title: 'Task 1'
        },
        {
            id: '2',
            isCompleted: false,
            title: 'Task 2'
        },
        {
            id: '3',
            isCompleted: true,
            title: 'Task 3'
        },
    ])
    const [newTask, setNewTask] = useState('')
    const newTaskInputRef = useRef<TextInput>(null)

    const totalTasksCreated = tasks.length
    const totalTasksCompleted = tasks.filter(({isCompleted}) => isCompleted).length

    function handleTaskAdd() {
        if(newTask !== '' && newTask.length >= 5) {
            setTasks(tasks => [...tasks, {id: uuid(), isCompleted: false, title: newTask.trim()}])
            setNewTask('')     
        }

        newTaskInputRef.current?.blur()
    }

    // função para marcar e desmarcar todo
    function handleTaskDone(id: string) {
        setTasks((task) => task.map((task) => {task.id === id ? (task.isCompleted = !task.isCompleted) : null
            return task}))
    }

    function handleTaskDelete(id: string) {
        Alert.alert('Excluir tarefa', 'Deseja excluir essa tarefa?', [
            {
                text: 'Sim',
                style: 'default',
                onPress: () => setTasks((task) => task.filter((task) => task.id !== id))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={style.container}>
            <Header inputRef={newTaskInputRef} task={newTask} onChangeText={setNewTask} onPress={handleTaskAdd}/>
            <View style={style.tasksContainer}>
                <View style={style.info}>
                    <View style={style.row}>
                        <Text style={style.tasksCreated}>Criadas</Text>
                        <View style={style.counterContainer}>
                            <Text style={style.counter}>{totalTasksCreated}</Text>
                        </View>
                    </View>
                    <View style={style.row}>
                        <Text style={style.tasksDone}>Concluidas</Text>
                        <View style={style.counterContainer}>
                            <Text style={style.counter}>{totalTasksCompleted}</Text>
                        </View>
                    </View>
                </View>

                <FlatList 
                    data={tasks}
                    keyExtractor={(tasks) => tasks.id}
                    renderItem={({item}) => (
                        <Task 
                            key={item.id}
                            onTaskDone={() => handleTaskDone(item.id)}
                            onTaskDeleted={() => handleTaskDelete(item.id)}
                            {...item}
                        />
                    )}
                  ListEmptyComponent={<Empty />}
                />
            </View>
        </View>
    )
}