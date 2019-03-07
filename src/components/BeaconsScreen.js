import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';
import BeaconCard from './BeaconCard';
import { withGlobalContext } from './GlobalContext';

const fistBeacon = (
  <BeaconCard
    title="Моя основная система"
    phone="+7 (916) 132-12-13"
    pos="N: 5554.2500 E: 03723.1608"
    lastUpd="10.02.2019"
    voltage={4.25}
    messagesCount={10}
  />
);

const secondBeacon = (
  <BeaconCard
    title="Студентическая система №1"
    phone="+7 (916) 421-99-01"
    pos="N: 5553.9613 E: 03143.1127"
    lastUpd="02.02.2019"
    voltage={3.05}
    messagesCount={2}
  />
);

const thirdBeacon = (
  <BeaconCard
    title="Студентическая система №2"
    phone="+7 (916) 421-99-11"
    pos="N: 5553.9613 E: 03143.1127"
    lastUpd="02.02.2019"
    voltage={3.59}
    messagesCount={1}
  />
);

class BeaconsScreen extends Component {
  static navigationOptions = {
    title: 'Список маяков',
  };

  openEditScreen() {
    const { navigation } = this.props;
    navigation.navigate('EditScreen');
  }

  render() {
    const { beacons } = this.props.global;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
          {beacons}
        </ScrollView>
        {beacons.length === 0 && (
          <FAB style={styles.fab} icon="add" onPress={() => this.openEditScreen()} />
        )}
      </View>
    );
  }
}

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
});

export default withGlobalContext(BeaconsScreen);