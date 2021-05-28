import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Auth from '../modules/auth';

const Authentication = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const auth = new Auth({ host: 'https://fakest-newzz.herokuapp.com/api' });
  const authenticateUser = async () => {
    const response = await auth.signIn(email, password);
    navigation.navigate('My Application');
    setMessage(`Welcome ${response.data.first_name} ${response.data.last_name}`
    );
  };

  return (
    <View>
      {message ? (
        <Text>{message}</Text>
      ) : (
        <>
          <Text>Log in</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          <Button
            title="Log in"
            type="solid"
            color="#A9A9A9"
            onPress={() => authenticateUser()}
          />
        </>
      )}
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: '#d3d3d3',
  },
});
