import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    ActivityIndicator,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

function Home({ navigation }) {

    const [load, setLoad] = useState(true);
    const [cases, setCases] = useState();

    //api call
    async function fetchUrl(url) {
        const response = await fetch(url);
        const json = await response.json();
        const data = json.feed;

        setCases(data);
        setLoad(false);
    };


    useEffect(() => {
        fetchUrl(`https://staging-app.figure1.com/mock/feed`)
    }, []);

    // navigation on click function
    const pressHandler = item => {
        navigation.navigate('Card', { item });
    }

    if (load) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    } else {

        return (
            <SafeAreaView style={styles.container}>

                <FlatList
                    data={cases}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => pressHandler(item)}
                        >
                            <View style={styles.card}>
                                <Image
                                    style={{ height: 200, width: 200 }}
                                    source={{ uri: `${item.image.post}` }}
                                />
                                <Text style={styles.text}>USERNAME: {item.username}</Text>
                                <Text style={styles.text}>
                                    CAPTION:{item.caption == null ? "empty" : item.caption}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    card: {
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: 'tomato',
        marginBottom: 20,
        padding: 10,
        width: 300,
    },

    img: {
        borderWidth: 5,
        borderStyle: 'solid',

    },

    text: {
        fontSize: 20,
    }
});

export default Home;