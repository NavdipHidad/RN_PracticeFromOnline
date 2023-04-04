import React, {Component} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const CartScreen = () => {
  const myCartItem = useSelector(state => state.cart);
  console.log('In cart -= ', myCartItem);
  const dispatch = useDispatch(state => state.cart);
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={styles.headerStyle}>
        <Text style={{fontSize: 20}}>Redux toolkit demo</Text>
      </View> */}
      <FlatList
        data={myCartItem}
        renderItem={(item, index) => {
          return (
            <View style={styles.productCards}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwq49xJaIlE7fNLSAMmfDmtWNey9dGCU8Ybg&usqp=CAU',
                }}
                style={styles.imgStyle}
              />
              <View style={{flexDirection: 'column'}}>
                <View style={{padding: 10, flexDirection: 'column'}}>
                  <Text style={{fontSize: 25, fontWeight: '700'}}>
                    {item.item.item.name}
                  </Text>
                  <Text style={styles.priceTxt}>
                    {'₹' + item.item.item.price}
                  </Text>
                  {/* <Text>{console.warn(item.item.item.price)}</Text> */}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  {item.item.qty == 0 ? null : (
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{fontSize: 20, color: 'white'}}>-</Text>
                    </TouchableOpacity>
                  )}
                  {item.item.qty == 0 ? null : (
                    <Text style={{marginLeft: 10, fontSize: 20}}>
                      {item.item.item.qty}
                    </Text>
                  )}
                  {item.item.qty == 0 ? null : (
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{fontSize: 20, color: 'white'}}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue',
    // shadowColor: 'black',
    // shadowOpacity: 2,
    // sha,
  },

  productCards: {
    width: '94%',
    height: 120,
    backgroundColor: '#f2f2f2',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 7,
    borderColor: '#f2f2f2',
    borderWidth: 3,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  imgStyle: {
    height: '100%',
    width: '30%',
    borderRadius: 10,
  },

  priceTxt: {
    fontSize: 20,
    color: 'green',
    fontWeight: '600',
    fontSize: 17,
  },

  cartBtn: {
    backgroundColor: 'green',
    height: '70%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
});

export default CartScreen;
