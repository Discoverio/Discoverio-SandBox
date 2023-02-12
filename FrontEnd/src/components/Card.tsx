import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

interface Props {
  bkgColor: { backgroundColor: string };
  borderColor: { borderColor: string };
  children: React.ReactNode;
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    card: {
        width: deviceWidth - 50,
        alignSelf: 'center',
        borderRadius: 8,
        borderWidth: 1,
        textAlign: 'center',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "center",
    },
});

export default function Card({ bkgColor, borderColor, children }: Props) {
  return (
    <View style={[styles.card, bkgColor, borderColor]}>
      {children}
    </View>
  );
}