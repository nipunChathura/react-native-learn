import React from 'react';
import {Button, Linking, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello Nipun</Text>
      <Text style={styles.text}>Hello Chathuranga</Text>
      <Button
        title="Click"
        onPress={() => {
          Linking.openURL(
            'https://www.youtube.com/watch?v=aabjK4NkuTQ&ab_channel=DkdMusicStudio',
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 20,
  },
});

export default App;
