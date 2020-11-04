import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Card, Container, Button} from 'native-base';

function CategoryCard(prop) {
  return (
    <TouchableOpacity>
      <Card style={cardStyle.parent}>
        <Text style={cardStyle.text}>New</Text>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/ac/d5/7b/acd57b7e53a6be7134a4192ed21c0872.jpg',
          }}
          style={cardStyle.image}
        />
      </Card>
    </TouchableOpacity>
  );
}

const cardStyle = StyleSheet.create({
  viewScroll: {
    width: '100%',
  },
  parent: {
    marginTop: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  text: {
    marginLeft: 23,
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '50%',
    height: '100%',
  },
});

export default function Categories() {
  return (
    <Container style={styles.container}>
      <Button rounded style={styles.btn}>
        <Text style={styles.btnTxt}>VIEW ALL ITEMS</Text>
      </Button>

      <Text style={styles.text}>Choose category</Text>

      <ScrollView style={styles.viewScroll}>
        {[...Array(5)].map((_item, index) => (
          <CategoryCard
            key={index}
            style={index === 0 ? styles.topMargin : styles.noTopMargin}
          />
        ))}
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  viewScroll: {
    width: '100%',
  },
  container: {
    paddingRight: '2%',
    paddingLeft: '2%',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
    color: '#9B9B9B',
    textAlign: 'center',
  },
  topMargin: {
    marginTop: 5,
  },
  noTopMargin: {
    marginTop: 5,
    marginBottom: 5,
  },
  btn: {
    marginTop: 10,
    padding: 5,
    width: '100%',
    backgroundColor: '#457373',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
