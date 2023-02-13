import React from 'react';
import DeezerWidget from './components/deezerWidget';
import { getOneRandomAlbum } from '../BackEnd/src/services/musiques/musicProposition';
import AppNavigator from './src/components/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
// import * as eva from '@eva-design/eva';


import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

interface State {
  randomAlbumId: string;
}

class App extends React.Component<{}, State> {
  // constructor(props: {}) {
  //   super(props);
  //   this.state = { randomAlbumId: '' };
  // }

  // componentDidMount() {
  //   this.getOneRandomAlbum();
  // }

  // getOneRandomAlbum = async () => {
  //   const randomAlbumId = await getOneRandomAlbum();
  //   this.setState({ randomAlbumId });
  // };

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      // </ApplicationProvider>
    );    
  }
}

export default App;