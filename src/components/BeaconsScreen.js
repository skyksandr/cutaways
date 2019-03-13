import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FAB, IconButton } from 'react-native-paper';
import BeaconCard from './BeaconCard';
import { withGlobalContext } from './GlobalContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 16,
    bottom: 16,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
  },
});

function BeaconsScreen(props) {
  const {
    global: { beacons },
  } = props;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {beacons.map(beacon => (
          <BeaconCard {...beacon} />
        ))}
      </ScrollView>
    </View>
  );
}

function TabButtons({ navigation }) {
  const passData = { titleNavBar: 'Добавление маяка' };

  return (
    <View style={styles.tab}>
      <IconButton
        color="#fff"
        icon="add"
        onPress={() => navigation.navigate('EditScreen', passData)}
      />
      <IconButton
        color="#fff"
        icon="settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </View>
  );
}

const withGlobal_BeaconScreen = withGlobalContext(BeaconsScreen);
withGlobal_BeaconScreen.navigationOptions = ({ navigation }) => ({
  title: 'Список маяков',
  headerRight: <TabButtons navigation={navigation} />,
});

export default withGlobal_BeaconScreen;
