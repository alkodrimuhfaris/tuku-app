import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'native-base';
import homeImage from './src/assets/homePhotos/headers.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell, faCircle, faStar} from '@fortawesome/free-solid-svg-icons';
import currency from './src/helpers/currencyFormat';

function StarRating(prop) {
  return (
    <View style={ratingStyles.parent}>
      <View style={ratingStyles.innerStar}>
        {[...Array(5)].map((_item, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color={'#9B9B9B'} />
        ))}
        <View
          style={[ratingStyles.outerStar, {width: `${prop.percent || 0}%`}]}>
          {[...Array(5)].map((_item, index) => (
            <FontAwesomeIcon key={index} icon={faStar} color={'#FFBA49'} />
          ))}
        </View>
      </View>
    </View>
  );
}

const ratingStyles = StyleSheet.create({
  parent: {
    width: 81,
  },
  outerStar: {
    flexDirection: 'row',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0,
  },
  innerStar: {
    position: 'relative',
    flexDirection: 'row',
    zIndex: 1,
  },
});

function Header() {
  return (
    <View style={headerStyles.headerParent}>
      <Image source={homeImage} style={headerStyles.headerImage} />
      <Text style={headerStyles.headerTitle}>Street Clothes</Text>
      <TouchableOpacity style={headerStyles.notifContainer}>
        <View style={headerStyles.notifWrapper}>
          <View style={headerStyles.bellContainer}>
            <FontAwesomeIcon icon={faBell} color={'white'} size={28} regular />
          </View>
          <FontAwesomeIcon
            icon={faCircle}
            color={'red'}
            size={10}
            style={headerStyles.notifDot}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  headerParent: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 196,
  },
  headerTitle: {
    color: 'white',
    fontSize: 34,
    position: 'absolute',
    top: 136,
    left: 16,
    fontWeight: 'bold',
  },
  notifContainer: {
    position: 'absolute',
    top: 66,
    right: 15,
  },
  notifWrapper: {
    position: 'relative',
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  bellContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
});

function NewItem(props) {
  return (
    <Card style={cardStyle.parent}>
      <TouchableOpacity>
        <View style={cardStyle.relativeParent}>
          <View style={cardStyle.newSign}>
            <Text style={cardStyle.signTxt}>New</Text>
          </View>
          <Image
            source={{
              uri:
                'http://52.200.32.180:8080/Uploads/2-product_image-1603966940378.jpg',
            }}
            style={cardStyle.image}
          />
          <View style={cardStyle.bellowImgWrap}>
            <View style={cardStyle.starWrap}>
              <StarRating percent={100} />
              <Text style={cardStyle.ratingCount}>
                ({props.ratingCount || 0})
              </Text>
            </View>
            <Text style={cardStyle.storeName}>Arsenal Clothes</Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={2}
              style={cardStyle.itemName}>
              Illi London Woman's Maxi Dress
            </Text>
            <Text style={cardStyle.itemPrice}>{currency(150000)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
}

function PopularItems(props) {
  return (
    <Card style={cardStyle.parent}>
      <TouchableOpacity>
        <View style={cardStyle.relativeParent}>
          <Image
            source={{
              uri:
                'http://52.200.32.180:8080/Uploads/2-product_image-1603966940378.jpg',
            }}
            style={cardStyle.image}
          />
          <View style={cardStyle.bellowImgWrap}>
            <View style={cardStyle.starWrap}>
              <StarRating percent={100} />
              <Text style={cardStyle.ratingCount}>
                ({props.ratingCount || 0})
              </Text>
            </View>
            <Text style={cardStyle.storeName}>Arsenal Clothes</Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={2}
              style={cardStyle.itemName}>
              Illi London Woman's Maxi Dress
            </Text>
            <Text style={cardStyle.itemPrice}>{currency(150000)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
}

const cardStyle = StyleSheet.create({
  parent: {
    width: 150,
    height: 300,
  },
  newSign: {
    padding: 5,
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#102526',
    zIndex: 2,
    borderRadius: 15,
  },
  relativeParent: {
    position: 'relative',
  },
  signTxt: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
    zIndex: 3,
  },
  image: {
    width: 150,
    height: 180,
    borderRadius: 8,
    zIndex: 1,
  },
  bellowImgWrap: {
    padding: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  ratingCount: {
    marginLeft: 2,
  },
  starWrap: {
    flexDirection: 'row',
  },
  storeName: {
    fontSize: 11,
    color: '#9B9B9B',
  },
  itemName: {
    fontSize: 16,
    color: '#102526',
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#102526',
  },
});

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView vertical>
        <Header />

        <View style={styles.heading}>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>New</Text>
            <Text style={styles.subtitle}>You'll never seen it before</Text>
          </View>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          {[...Array(5)].map((_item, index) => (
            <NewItem
              key={index}
              style={index === 0 ? styles.rightMargin : styles.noRightMargin}
            />
          ))}
        </ScrollView>

        <View style={styles.heading}>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>Popular</Text>
            <Text style={styles.subtitle}>You'll never seen it before</Text>
          </View>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          {[...Array(5)].map((_item, index) => (
            <PopularItems
              key={index}
              style={index === 0 ? styles.rightMargin : styles.noRightMargin}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rightMargin: {
    marginRight: 4,
  },
  noRightMargin: {
    marginRight: 4,
    marginLeft: 4,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15,
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  wrapTitle: {
    flexDirection: 'column',
  },
  title: {
    color: '#102526',
    fontSize: 34,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#9B9B9B',
    fontSize: 11,
  },
  viewAll: {
    color: '#102526',
  },
});
