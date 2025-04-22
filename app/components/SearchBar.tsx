import {TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Input} from "postcss";

interface Props {
    value: string;
    placeholder: string;
    onTextChange: (value: string) => void;
}

const SearchBar = ({value, placeholder, onTextChange}: Props) => {
    return (
        <View className="flex-row border-2 items-center border-gray-300 rounded-full px-5">
            <Ionicons name="search" size={25}/>
            <TextInput className="p-4" value={value} onChangeText={onTextChange} placeholder={placeholder}/>
        </View>
    );
};

export default SearchBar;