import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import BlogPosts from './data_graphql/BlogPosts';

const client = new ApolloClient({
    uri: "http://friendfinder.eu.ngrok.io/graphql",
    opts: {
        mode: "no-cors",
    }
});

export default class Blog extends Component {

    static navigationOptions = {
        title: 'Blog',
    };

    constructor(props) {
        super(props);

        this.state = {
            // Entries here
        }
    }

    render() {

        return (
            <View style={{flex: 1}}>

                <ScrollView style={{flex: 1}}>
                    <ApolloProvider client={client}>
                        <BlogPosts />
                    </ApolloProvider>
                </ScrollView>

                <View style={styles.footerBar}>
                    <View><Icon name='map' color='#fff' size='50' onPress={() => this.props.navigation.navigate('MapScreen')}/><Text style={styles.footerText}>Map</Text></View>
                    <View><Icon name='menu' color='#fff' size='50' onPress={() => this.props.navigation.navigate('BlogScreen')}/><Text style={styles.footerText}>Blog</Text></View>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    footerBar: {
        height: 80,
        alignItems: 'center',
        backgroundColor: "rgb(50, 95, 149)",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    footerText: {
        color: 'rgb(255, 255, 255)',
        marginLeft: 10
    }
});