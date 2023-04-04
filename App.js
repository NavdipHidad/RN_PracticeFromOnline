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
import {Provider} from 'react-redux';

import ProductScreen from './src/Screens/MyProducts';
import Main from './src/Screens/Main';
import {myStore} from './src/NewRedux/MyStore';

const App = () => {
  return (
    <Provider store={myStore}>
      <Main />
    </Provider>
  );
};

export default App;
