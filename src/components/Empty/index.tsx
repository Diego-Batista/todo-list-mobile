import { Image, Text, View } from "react-native";
import Clipboard from '../../assets/clipboard.png';
import { style } from "./styles";

export function Empty() {
    return (
        <View style={style.emptyContainer}>
            <Image 
                source={Clipboard}
                style={style.image}
            />
            <Text style={style.textBold}>Voc~e ainda não tem tarefas cadastradas.</Text>
            <Text style={[style.textBold, style.textRegular]}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}