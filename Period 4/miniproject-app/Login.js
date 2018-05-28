import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

export default class Login extends Component {

    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);

        this.state = {
            inputUser: null,
            inputPass: null,
            login: [],
            loggedIn: false
        }
    }

    async componentWillMount() {
        // Get user data from REST API
        const response = await fetch("http://friendfinder.eu.ngrok.io/api/users/");
        const json = await response.json();

        this.setState({login: json});
    }

    _login = () => {
        // Prepare user data
        let apiUser = "";
        let apiPass = "";

        // Store correct data if exist
        for (let i = 0; i < this.state.login.length; i++) {
            if (this.state.inputUser === this.state.login[i].userName && this.state.inputPass === this.state.login[i].password) {
                apiUser = this.state.login[i].userName;
                apiPass = this.state.login[i].password;
            }
        }

        // Perform login check after fetch
        if (this.state.inputUser === apiUser && this.state.inputPass === apiPass) {
            this.props.navigation.navigate('MapScreen');
        } else {
            alert("Wrong login! Please try again.");
        }


    };

    render() {

        return (
            <View style={styles.loginView}>
                <Text style={styles.heading}>Please login to find friends</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => this.setState({inputUser: text})}
                    autoCapitalize={'none'}
                    keyboardType='email-address'
                    value={this.state.inputUser}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => this.setState({inputPass: text})}
                    secureTextEntry={true}
                    value={this.state.inputPass}
                />
                <Button
                    title='Login'
                    buttonStyle={styles.submitButton}
                    //onPress={this._login}
                    onPress={this._login}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    loginView: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: "rgb(236, 241, 251)"
    },
    inputField: {
        height: 45,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 15,
        fontSize: 18
    },
    submitButton: {
        backgroundColor: "rgb(50, 95, 149)",
        width: 300,
        height: 45
    }
});