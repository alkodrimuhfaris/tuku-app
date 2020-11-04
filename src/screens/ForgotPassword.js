import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input, Form, Item, Button, Label} from 'native-base';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordToggle, setPasswordToggle] = useState(false);

  useEffect(() => {
    console.log(email);
    console.log(newPassword);
    console.log(confirmNewPassword);
  }, [email, newPassword, confirmNewPassword]);

  const sendCodePress = () => {
    setPasswordToggle(true);
  };

  const resetPassPress = () => {
    setPasswordToggle(false);
  };

  return (
    <View style={styles.parent}>
      {!passwordToggle ? (
        <View style={styles.form}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.paragraph}>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </Text>
          <Form>
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
            <Button style={styles.btn} block>
              <Text style={styles.btnTxt} onPress={() => sendCodePress()}>
                Send Reset Code
              </Text>
            </Button>
          </Form>
        </View>
      ) : (
        <View style={styles.form}>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.paragraph}>
            We have sent an email containing a password reset instruction to
            your email. please check your email.
          </Text>
          <Form>
            <View style={styles.secondary}>
              <Item floatingLabel>
                <Label>New Password</Label>
                <Input
                  placeholder="New Paswword"
                  onChangeText={(e) => setNewPassword(e)}
                  secureTextEntry
                  style={styles.input}
                />
              </Item>
            </View>
            <View style={styles.secondary}>
              <Item floatingLabel>
                <Label>Confirm New Password</Label>
                <Input
                  placeholder="Confirm New Password"
                  onChangeText={(e) => setConfirmNewPassword(e)}
                  secureTextEntry
                  style={styles.input}
                />
              </Item>
            </View>
            <Button style={styles.btn} block>
              <Text style={styles.btnTxt} onPress={() => resetPassPress()}>
                Reset Password
              </Text>
            </Button>
          </Form>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  forgotWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 14,
    marginTop: 3,
    marginBottom: 3,
    fontWeight: 'bold',
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
