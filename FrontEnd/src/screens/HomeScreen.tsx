import React from 'react';
import { Text, View } from 'react-native';
import HeaderApp from '../components/HeaderApp';
import DeezerWidget from '../components/deezerWidget'
import s from '../assets/styles/globalStyles'
import { getOneRandomAlbum } from '../../../BackEnd/src/services/musiques/musicProposition';


interface State {
    randomAlbumId: string;
}


export class HomeScreen extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = { randomAlbumId: '' };
    }

    componentDidMount() {
        this.getOneRandomAlbum();
    }

    getOneRandomAlbum = async () => {
        const randomAlbumId = await getOneRandomAlbum();
        this.setState({ randomAlbumId });
    };

    render() {
        return (

            <View>
                <HeaderApp />
                <View style={s.secondarybackgroundColor} />
                <Text style={[s.backgroundColor, s.primaryColor, s.fs36, s.p2]}>La Musique</Text>
                <DeezerWidget album_id={this.state.randomAlbumId} />
            </View>


        );
    }
}

// export default HomeScreen;