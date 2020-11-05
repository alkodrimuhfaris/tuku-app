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

function OrderCard() {
  return (
    <Card rounded style={orderStyle.card}>
      <View style={orderStyle.invoiceWrap}>
        <Text style={orderStyle.invoice} numberOfLines={1}>
          Invoice {'TUKU316042490890964'}
        </Text>
        <Text style={orderStyle.date}>{'2020-11-01'}</Text>
      </View>
      <View style={orderStyle.subWrapper}>
        <Text style={orderStyle.key}>Tracking Number:</Text>
        <Text style={orderStyle.value}>{'#'}</Text>
      </View>
      <View style={orderStyle.subWrapper}>
        <Text style={orderStyle.key}>Quantity:</Text>
        <Text style={orderStyle.value}>{'#'}</Text>
      </View>
      <View style={orderStyle.subWrapper}>
        <Text style={orderStyle.key}>Total Amount:</Text>
        <Text style={orderStyle.value}>{'#'}</Text>
      </View>
      <View style={orderStyle.deliveredWrap}>
        <Text style={orderStyle.delivered}>Delivered</Text>
      </View>
    </Card>
  );
}

const orderStyle = StyleSheet.create({
  card: {
    width: 350,
    height: 170,
    padding: 28,
  },
  invoiceWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  invoice: {
    width: '70%',
    flexWrap: 'wrap',
    fontSize: 14,
    color: '#102526',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#5A6868',
  },
  subWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  key: {
    fontSize: 14,
    color: '#5A6868',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#102526',
  },
  delivered: {
    fontSize: 14,
    color: '#457373',
  },
  deliveredWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default function ViewOrder() {
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>My Order</Text>

      <ScrollView>
        <View style={styles.orderArrWrap}>
          {[...Array(10)].map((_item, index) => (
            <TouchableOpacity key={index} style={styles.wrapper}>
              <OrderCard />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  title: {
    marginTop: 50,
    marginBottom: 30,
    fontSize: 34,
    fontWeight: 'bold',
    color: '#102526',
  },
  orderArrWrap: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
});
