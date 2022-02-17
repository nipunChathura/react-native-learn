import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [name, setName] = useState('Nipun');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName('Nipun Chathuranga');
    setSession({number: 7, title: 'Style'});
    setCurrent(false);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>My Name is {name}</Text>
      <Text style={styles.text}>
        This is session number {session.number} and adout {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'current session' : 'next session'}
      </Text>
      <Button title="Click" onPress={onClickHandler} />
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
