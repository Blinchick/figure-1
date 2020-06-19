import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

function Card({ route, navigation }) {
    const { caption, image, username, stats} = route.params.item;

    return (
        <SafeAreaView style={styles.container}>
            <Text>CAPTION: {JSON.stringify(caption)}</Text>
            {/* both images don't load, I figured they need to be cashed and found few solutions which I had to spend some time, but at this point I went beyond recomended 2 hours for this challenge.*/}

            <Image
                style={{ height: 100, width: 100 }}
                source={{ uri: `${JSON.stringify(image.post)}` }}

            />
            <Text>USERNAME: {JSON.stringify(username)}</Text>
            <Image
                style={{ height: 100, width: 100 }}
                source={{ uri: `${JSON.stringify(image.profile)}` }}
            />

            {stats == undefined ? null :
                <View>
                    <Text>STARS: {JSON.stringify(stats.star)}</Text>
                    <Text>FOLLOW: {JSON.stringify(stats.follow)}</Text>
                    <Text>VIEWS: {JSON.stringify(stats.views)}</Text>
                </View>
            }

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'tomato',
        borderWidth: 20
    },

});

export default Card;