import {ActivityIndicator, FlatList, Text, View} from "react-native";
import useFetch from "@/app/hooks/useFetch";
import {getNNews} from "@/app/api/api";
import ItemArticle from "@/app/components/ItemArticle";

export default function Index() {
    const {data, error, loading} = useFetch<News>(getNNews, true, 5);

    return (
        <View className="px-5 flex-1 mt-20">
            <Text className="font-bold text-xl">Home</Text>
            <Text className="mt-2">This screen is responsible for fetching N news articles, here N is 5</Text>

            {loading && (
                <View className="flex-1 justify-center items-center absolute top-0 bottom-0 right-0 left-0">
                    <ActivityIndicator size={"small"} className="text-blue-500"/>
                </View>
            )}

            {error && (
                <View className="flex-1 justify-center items-center absolute top-0 bottom-0 right-0 left-0">
                    <Text className="text-red-600">{error.message}</Text>
                </View>
            )}

            {data && (
                <FlatList
                    className="flex-1 mt-10"
                    data={data.articles}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.title}
                    renderItem={({item}) => (
                        <View className="mb-2">
                            <ItemArticle article={item}/>
                        </View>
                    )}
                />
            )}
        </View>
    );
}
