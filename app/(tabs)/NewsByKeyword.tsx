import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from "react-native";
import SearchBar from "@/app/components/SearchBar";
import ItemArticle from "@/app/components/ItemArticle";
import useFetch from "@/app/hooks/useFetch";
import {getNewsByKeywords, getNewsByTitle} from "@/app/api/api";

const NewsByKeyword = () => {
    const {data, error, loading, refetch} = useFetch<News>(getNewsByKeywords, false, "");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (search) {
                refetch(search);
            } else {
                refetch("");
            }
        }, 700) // debouncing api calls for performance and efficiency

        return () => clearTimeout(timeOutId);

    }, [search]);

    return (
        <View className="px-5 flex-1 mt-20">
            <Text className="font-bold text-xl">NewsByKeyword</Text>
            <Text className="mt-2">This screen is responsible for fetching articles by keywords</Text>

            <View className="mt-5">
                <SearchBar value={search} placeholder={"Search for Articles"} onTextChange={setSearch}/>
                {search && (
                    <Text className="text-black mt-1">Displaying results for <Text className="text-blue-500 text-lg">{search}</Text> </Text>
                )}
            </View>


            {loading && (
                <View className="flex-1 z-10 justify-center items-center absolute top-0 bottom-0 right-0 left-0">
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
                    keyExtractor={(item, index) => index.toString()} // we have used here index just because there is no id
                    // to use for the articles
                    renderItem={({item}) => (
                        <View className="mb-2">
                            <ItemArticle article={item}/>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default NewsByKeyword;