import React from 'react';
import { View } from 'react-native';
import Card from './Card';
import s from '../assets/styles/globalStyles'

interface Props {
  album_id: string;
}

const DeezerWidget: React.FC<Props> = ({ album_id }) => {
  return (
    <Card bkgColor={s.backgroundColor} borderColor={s.borderColor}>
      <h2>Tirage au sort de l'album n°{album_id}</h2>
      <View style={s.m2}>
        <iframe
          id="deezer-widget"
          src={`https://widget.deezer.com/widget/dark/album/${album_id}?app_id=457142&autoplay=false&radius=true&tracklist=true`}
          allowtransparency="true"
          allowfullscreen="true"
          allow="encrypted-media"
          width="100%"
          height="100%"
        />
      </View>

    </Card>
  );
};

export default DeezerWidget;
