import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container, Button, Input, Card} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function AddressCards(selected) {
  return (
    <TouchableOpacity style={addressStyle.wrapper}>
      <Card rounded style={addressStyle.card}>
        <View style={addressStyle.nameWrap}>
          <Text style={addressStyle.name}>Jone Doe</Text>
          <TouchableOpacity>
            <Text style={addressStyle.change}>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={addressStyle.address} numberOfLines={2}>
          {'3 Newbridge Court Chino Hills, CA 91709, United States'}
        </Text>
      </Card>
    </TouchableOpacity>
  );
}

const addressStyle = StyleSheet.create({
  card: {
    width: '90%',
    padding: 28,
    height: 108,
  },
  wrapper: {
    width: '100%',
  },
  container: {
    padding: '2%',
  },
  nameWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  name: {
    fontSize: 14,
    color: '#102526',
  },
  change: {
    fontSize: 14,
    color: '#102526',
  },
  address: {
    fontSize: 14,
    color: '#102526',
    marginTop: 10,
  },
});

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <Container style={styles.container}>
      <View style={styles.inputWrapper}>
        <Input
          rounded
          style={styles.input}
          placeholder={'Search'}
          placeholderTextColor={'#DADADA'}
          value={search}
          onChangeText={(e) => setSearch(e)}
        />
        <FontAwesomeIcon
          style={styles.iconSearch}
          icon={faSearch}
          color={'#DADADA'}
          size={16}
        />
      </View>

      <Text style={styles.title}>Address</Text>

      <ScrollView>
        <View style={styles.addressArrWrap}>
          {[...Array(10)].map((_item, index) => (
            <AddressCards key={index} />
          ))}
        </View>

        <Button rounded style={styles.btn}>
          <Text style={styles.btnTxt}>ADD NEW ADDRESS</Text>
        </Button>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '2%',
    paddingLeft: '2%',
  },
  inputWrapper: {
    marginTop: 30,
    height: 40,
    position: 'relative',
  },
  input: {
    borderColor: '#102526',
    paddingLeft: 40,
    borderRadius: 30,
    width: '100%',
    height: 40,
    elevation: 4,
  },
  iconSearch: {
    position: 'absolute',
    top: 12,
    left: 15,
  },
  title: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 16,
    color: '#102526',
    fontWeight: 'bold',
  },
  btn: {
    margin: 3,
    padding: 3,
    width: '100%',
    borderColor: '#102526',
    borderWidth: 2,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#7C4935',
    fontSize: 11,
    textAlign: 'center',
  },
  addressArrWrap: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
});
