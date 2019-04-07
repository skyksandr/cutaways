import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  FAB, IconButton, Dialog, Portal, TextInput, Button,
} from 'react-native-paper';
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

const MessageInput = ({ visible, message, onChangeMessage, hideDialog, onSubmit }) => (
  <Portal>
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Title>Сообщение от маяка</Dialog.Title>
      <Dialog.Content>
        <TextInput label="SMS сообщение от маяка" multiline numberOfLines={4} value={message} onChange={onChangeMessage} />
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={() => hideDialog()}>Cancel</Button>
        <Button onPress={() => onSubmit()}>Ok</Button>
      </Dialog.Actions>
    </Dialog>
  </Portal>
);

class BeaconsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smsInputVisible: false,
    };
  }

  render() {
    const {
      global: { beacons },
    } = this.props;

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
