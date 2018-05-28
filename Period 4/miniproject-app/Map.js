import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Constants, Location, Permissions, MapView} from 'expo';
import Overlay from 'react-native-modal-overlay';
import {Icon} from 'react-native-elements';

console.disableYellowBox = true;

export default class Map extends Component {

    static navigationOptions = {
        title: 'Map',
    };

    constructor(props) {
        super(props);
        this.state = {
            location: null,
            errorMessage: null,
            modalVisible: false,
            markers: [{
                title: 'Hillerød Slot',
                coordinates: {
                    latitude: 55.934787,
                    longitude: 12.29916
                },
            },
                {
                    title: 'Fredensborg Slot',
                    coordinates: {
                        latitude: 55.9825764,
                        longitude: 12.3935617
                    },
                }]
        };
    }


    async componentDidMount() {
        await this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});

        this.setState({location: location});

    };

    _modalOpen = () => {
        console.log("open");
        this.setState({modalVisible: true});
    };

    _modalClose = () => {
        console.log("close");
        this.setState({modalVisible: false});
    };

    render() {
        let text = 'Waiting..';
        let myLoc = [];

        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {

            myLoc[0] = JSON.stringify(this.state.location.coords.latitude);
            myLoc[1] = JSON.stringify(this.state.location.coords.longitude);

            console.log(text);
        }

        return (

            <View style={{flex: 1}}>

                {this.state.location &&
                <MapView
                    style={{flex: 1}}
                    initialRegion={{
                        latitude: this.state.location.coords.latitude,
                        longitude: this.state.location.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                    showsUserLocation={true}
                >

                    {this.state.markers.map((marker) => (
                        <MapView.Marker coordinate={marker.coordinates} title={marker.title}/>
                    ))}

                </MapView>
                }

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

/*<Text style={styles.paragraph}>{myLoc[0]}, {myLoc[1]}</Text>*/