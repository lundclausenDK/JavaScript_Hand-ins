import React from 'react';
import {Query} from "react-apollo";
import {StyleSheet, Text, View} from 'react-native';
import gql from "graphql-tag";

const BlogPosts = () => (
    <Query
        query={gql`
        {
            getAllBlogs {
                id
                headline
                content
            }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <Text>Loading...</Text>;
            if (error) return <Text>Error :(</Text>;

            return data.getAllBlogs.slice(0).reverse().map(({id, headline, content}) => (
                <View key={id} style={styles.blogContainer}>
                    <Text>
                        <Text style={styles.blogHeading}>{headline}</Text>{"\n"}
                        <Text>{content}</Text>
                    </Text>
                </View>
            ));
        }}
    </Query>
);

const styles = StyleSheet.create({
    blogContainer: {
        margin: 10,
        padding: 10,
        backgroundColor: 'rgb(255, 255, 255)',
        borderWidth: 1,
        borderColor: '#999'
    },
    blogHeading: {
        fontWeight: 'bold',
        flex: 1,
        flexDirection: 'column'
    }
});

export default BlogPosts;