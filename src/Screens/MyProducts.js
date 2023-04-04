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
import {addProductToMyCart} from '../NewRedux/MyCartSlice';

const ProductScreen = props => {
  const myProducts = useSelector(state => state.product);
  // console.log('add pro -=', myProducts);
  const myCartItem = useSelector(state => state.cart);
  console.log('In cart -= ', myCartItem);
  const dispatch = useDispatch(state => state.cart);

  const getTotal = () => {
    let total = 0;
    // console.warn(myCartItem);
    myCartItem.map(item => {
      total = total + item.item.qty * item.item.price;
      // console.warn(item);
    });
    return total;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={styles.headerStyle}>
        <Text style={{fontSize: 20}}>Redux toolkit demo</Text>
      </View> */}
      <FlatList
        data={myProducts}
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
                    {item.item.name}
                  </Text>
                  <Text style={styles.priceTxt}>{'₹' + item.item.price}</Text>
                  {/* <Text>{console.warn(item.item)}</Text> */}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={styles.cartBtn}
                    // onPress={() => props.navigation.navigate('Cart')}
                    onPress={() => {
                      dispatch(addProductToMyCart(item));
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                      }}>
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                  {item.item.qty === 0 ? null : (
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{fontSize: 20, color: 'white'}}>-</Text>
                    </TouchableOpacity>
                  )}
                  {item.item.qty === 0 ? null : (
                    <Text style={{marginLeft: 10, fontSize: 20}}>0</Text>
                  )}
                  {item.item.qty === 0 ? null : (
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{fontSize: 20, color: 'white'}}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
      {myCartItem.length > 0 ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            height: 60,
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              {'Added items(' + myCartItem.length + ')'}
            </Text>
            <Text>{'Total(' + getTotal() + ')'}</Text>
          </View>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Button
              title="Go to Cart"
              onPress={() => {
                props.navigation.navigate('Cart');
              }}
            />
          </View>
        </View>
      ) : null}
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

export default ProductScreen;
