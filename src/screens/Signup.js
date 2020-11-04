import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input, Form, Item, Button, Label} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(email);
    console.log(password);
    console.log(name);
  }, [email, password, name]);

  return (
    <View style={styles.parent}>
      <View style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>
        <Form>
          <View style={styles.secondary}>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
                placeholder="Name"
                onChangeText={(e) => setName(e)}
                style={styles.input}
              />
            </Item>
          </View>
          <View style={styles.secondary}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                placeholder="Email"
                onChangeText={(e) => setEmail(e)}
                style={styles.input}
              />
            </Item>
          </View>
          <View style={styles.secondary}>
            <Item floatingLabel style={styles.inner}>
              <Label>Password</Label>
              <Input
                placeholder="Password"
                secureTextEntry
                onChangeText={(e) => setPassword(e)}
                style={styles.input}
              />
            </Item>
          </View>
          <View style={styles.forgotWrapper}>
            <Text style={styles.forgot}>Already have an account?</Text>
            <FontAwesomeIcon icon={faLongArrowAltRight} color={'#457373'} />
          </View>
          <Button style={styles.btn} block>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </Button>
        </Form>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forgotWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  form: {
    width: '80%',
    backgroundColor: '#E5E5E5',
  },
  forgot: {
    marginRight: 5,
  },
  btn: {
    width: '100%',
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: '#457373',
  },
  title: {
    fontSize: 30,
    marginBottom: 70,
    fontWeight: 'bold',
  },
  secondary: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    elevation: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  danger: {
    borderWidth: 1,
    borderColor: '#F01F0E',
    backgroundColor: 'white',
  },
  success: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2AA952',
  },
  txtSecondary: {
    paddingLeft: 3,
    paddingTop: 3,
    fontSize: 15,
    color: '#9B9B9B',
  },
  txtDanger: {
    fontSize: 15,
    color: '#F01F0E',
  },
  txtSuccess: {
    fontSize: 15,
    color: '#2AA952',
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 0,
  },
});
