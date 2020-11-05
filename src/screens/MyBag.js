/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Card, Container, Button} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';

function BookingCard({index, parentCount, updateSet, parentPrice}) {
  const [count, setCount] = useState(parentCount);
  const [price, setPrice] = useState(parentPrice);
  const [del, isDelOpen] = useState(false);

  useEffect(() => {
    setPrice(count * parentPrice);
    updateSet(count);
  }, [count]);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const openDel = () => {
    isDelOpen(!del);
  };

  return (
    <TouchableOpacity>
      <Card style={cardStyle.parent}>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/ac/d5/7b/acd57b7e53a6be7134a4192ed21c0872.jpg',
          }}
          style={cardStyle.image}
        />
        {del ? (
          <TouchableOpacity style={cardStyle.delete}>
            <Text style={cardStyle.delTxt}>Delete from the list</Text>
          </TouchableOpacity>
        ) : null}
        <View style={cardStyle.productDetail}>
          <View style={cardStyle.spreadWrap}>
            <Text style={cardStyle.title}>{'New'}</Text>
            <TouchableOpacity onPress={openDel}>
              <FontAwesomeIcon icon={faEllipsisV} color={'#5A6868'} size={16} />
            </TouchableOpacity>
          </View>

          <View style={cardStyle.detailCont}>
            <View style={cardStyle.detailWrap}>
              <Text style={cardStyle.key}>Color: </Text>
              <Text style={cardStyle.value}>{'Brown'}</Text>
            </View>
            <View style={cardStyle.detailWrap}>
              <Text style={cardStyle.key}>Size: </Text>
              <Text style={cardStyle.value}>{'L'}</Text>
            </View>
          </View>

          <View style={cardStyle.spreadWrap}>
            <View style={cardStyle.btnWrap}>
              <TouchableOpacity style={cardStyle.btn} onPress={increase}>
                <Text style={cardStyle.btnTxt}>-</Text>
              </TouchableOpacity>
              <Text style={cardStyle.counter}>{count}</Text>
              <TouchableOpacity style={cardStyle.btn} onPress={decrease}>
                <Text style={cardStyle.btnTxt}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={cardStyle.price}>{price}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const cardStyle = StyleSheet.create({
  viewScroll: {
    width: '100%',
  },
  bookingDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productDetail: {
    marginLeft: 10,
    flexDirection: 'column',
    width: 240,
    padding: 10,
  },
  title: {
    fontSize: 16,
    color: '#102526',
    fontWeight: 'bold',
  },
  parent: {
    marginTop: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    height: 105,
  },
  delete: {
    position: 'absolute',
    top: 10,
    right: 50,
    padding: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  delTxt: {
    fontSize: 14,
    color: '#102526',
  },
  spreadWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 100,
  },
  btn: {
    width: 36,
    height: 36,
    borderRadius: 36,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 16,
    color: '#5A6868',
  },
  counter: {
    marginLeft: 10,
    marginRight: 10,
  },
  price: {
    fontSize: 16,
    color: '#102526',
    fontWeight: 'bold',
  },
  image: {
    width: 105,
    height: 105,
  },
  detailCont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  detailWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 10,
  },
  key: {
    fontSize: 12,
    color: '#5A6868',
  },
  value: {
    fontSize: 12,
    color: '#102526',
    fontWeight: 'bold',
    marginLeft: 2,
  },
});

export default function Categories() {
  const dataCart = [...Array(5)].map(() => ({quantity: 5, price: 30}));
  const [totalPrice, setTotalPrice] = useState();
  const [quantity, setQuantity] = useState(
    dataCart.map((item) => item.quantity),
  );
  const [price, setPrice] = useState(dataCart.map((item) => item.price));

  function update(i) {
    return function updateing(val) {
      setQuantity((prevQty) => {
        return prevQty.map((item, index) => {
          item = index === i ? val : item;
          return item;
        });
      });
    };
  }

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>My Bag</Text>

      <ScrollView style={styles.viewScroll}>
        {dataCart.map((_item, index) => (
          <BookingCard
            key={index}
            index={index}
            count={quantity[index]}
            price={price[index]}
            updateSet={update(index)}
            style={index === 0 ? styles.topMargin : styles.noTopMargin}
          />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.totalWrap}>
          <Text style={styles.text}>Total amount</Text>
          <Text style={styles.total}>{'112$'}</Text>
        </View>
        <View style={styles.parentBtn}>
          <Button style={styles.btn}>
            <Text style={styles.btnTxt}>CHECK OUT</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    marginBottom: 30,
    fontSize: 34,
    fontWeight: 'bold',
    color: '#102526',
    marginRight: '5%',
    marginLeft: '5%',
  },
  viewScroll: {
    marginRight: '5%',
    marginLeft: '5%',
    marginBottom: '5%',
  },
  wrapper: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  container: {
    backgroundColor: '#E5e5e5',
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
  footer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'white',
    height: 120,
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  btn: {
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 100,
    padding: 5,
    width: 350,
    justifyContent: 'center',
    backgroundColor: '#457373',
  },
  parentBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  totalWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
