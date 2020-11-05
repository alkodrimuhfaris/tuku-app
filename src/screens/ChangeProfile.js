/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Input, Form, Item, DatePicker, Button, Label} from 'native-base';
import RadioButton from './src/component/RadioButton';
import Toggle from './src/component/Toggle';

export default function ChangeProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [dateBirth, setDateBirth] = useState('');
  const [checked, setChecked] = useState(0);
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');
  const [notifSale, setNotifSale] = useState(false);
  const toggleSale = () => setNotifSale((previousState) => !previousState);
  const [notifNew, setNotifNew] = useState(false);
  const toggleNew = () => setNotifNew((previousState) => !previousState);
  const [notifDeliv, setNotifDeliv] = useState(false);
  const toggleDeliv = () => setNotifDeliv((previousState) => !previousState);

  const genders = ['Male', 'Female'];

  const changeGender = (e) => {
    setChecked(e);
  };

  useEffect(() => {
    let genderSelected = genders[checked];
    setGender(genderSelected);
  }, [checked]);

  const settingDate = (e) => {
    e = e.toISOString().split('T');
    let [date] = e;
    setDateBirth(date);
  };

  useEffect(() => {
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(dateBirth);
    console.log(gender);
  }, [name, email, phone, dateBirth, gender]);

  const phoneCheck = (e) => {
    e = e.replace(/[^0-9]/g, '');
    setPhone(e);
  };

  return (
    <ScrollView>
      <Form style={styles.container}>
        <Text style={styles.title}>Setting</Text>

        <Text style={styles.subTitle}>Personal Information</Text>

        <View style={styles.secondary}>
          <Item floatingLabel>
            <Label style={styles.labelTxt}>Name</Label>
            <Input
              placeholder="Name"
              onChangeText={(e) => setName(e)}
              style={styles.input}
              value={name}
            />
          </Item>
        </View>

        <View style={styles.secondary}>
          <Item floatingLabel>
            <Label style={styles.labelTxt}>Email</Label>
            <Input
              placeholder="Email"
              onChangeText={(e) => setEmail(e)}
              style={styles.input}
              value={email}
            />
          </Item>
        </View>

        <View style={styles.secondary}>
          <Item floatingLabel>
            <Label style={styles.labelTxt}>Phone</Label>
            <Input
              placeholder="Phone"
              keyboardType="numeric"
              onChangeText={(e) => phoneCheck(e)}
              value={phone}
              style={styles.input}
            />
          </Item>
        </View>

        <View style={styles.secondary}>
          <Label style={styles.labelTxt}>Date of Birth</Label>
          <DatePicker
            defaultDate={new Date(2000, 1, 1)}
            minimumDate={new Date(1900, 1, 1)}
            maximumDate={new Date()}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Select date"
            textStyle={styles.labelTxt}
            placeHolderTextStyle={styles.labelTxt}
            onDateChange={(e) => settingDate(e)}
            disabled={false}
          />
        </View>

        <View style={styles.radioWrapper}>
          <Text style={[styles.labelTxt, styles.radioLabel]}>Gender</Text>
          <RadioButton
            setChecked={changeGender}
            checked={checked}
            genders={genders}
          />
        </View>

        <View style={styles.alignWrap}>
          <Text style={styles.subTitle}>Password</Text>
          <Text style={styles.changePass}>Change</Text>
        </View>

        <View style={styles.secondary}>
          <Item floatingLabel>
            <Label style={styles.labelTxt}>Password</Label>
            <Input
              placeholder="Password"
              secureTextEntry
              editable={false}
              value={password}
              style={styles.input}
            />
          </Item>
        </View>

        <Text style={styles.subTitle}>Notification</Text>

        <View style={styles.alignWrap}>
          <Text style={styles.toglerTxt}>Sales</Text>
          <View>
            <Toggle isEnabled={notifSale} toggleSwitch={toggleSale} />
          </View>
        </View>
        <View style={styles.alignWrap}>
          <Text style={styles.toglerTxt}>New Arrival</Text>
          <View>
            <Toggle isEnabled={notifNew} toggleSwitch={toggleNew} />
          </View>
        </View>
        <View style={styles.alignWrap}>
          <Text style={styles.toglerTxt}>Delivery Status Change</Text>
          <View>
            <Toggle isEnabled={notifDeliv} toggleSwitch={toggleDeliv} />
          </View>
        </View>
      </Form>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingLeft: '5%',
    paddingRight: '5%',
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
  radioWrapper: {
    marginTop: 10,
    marginBottom: 10,
  },
  floatingSave: {
    position: 'absolute',
    top: 30,
    right: 30,
    color: '#457373',
    padding: 5,
    borderRadius: 30,
    justifyContent: 'center',
  },
  saveTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 34,
    color: '#102526',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#102526',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  labelTxt: {
    color: '#102526',
  },
  radioLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
  alignWrap: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#102526',
  },
  changePass: {
    fontSize: 14,
    color: '#457373',
  },
  toglerTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#102526',
  },
});
