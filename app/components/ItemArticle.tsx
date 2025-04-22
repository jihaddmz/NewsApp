import React from 'react';
import {View, Text} from "react-native";

interface Props {
    article: Article;
}


const ItemArticle = ({article}: Props) => {
    return (
        <View className="flex-col p-5 bg-gray-300 rounded-lg gap-2">
            <Text className="font-bold text-lg">{article.title}</Text>
            <Text>{article.description}</Text>
            <Text>{article.content}</Text>
            <Text>Source Name: {article.source.name}</Text>
        </View>
    );
};

export default ItemArticle;