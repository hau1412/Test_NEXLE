import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {bghome, Imagebg} from '../../assets/Index';
import styles from './home-screen.styles';
import LinearGradient from 'react-native-linear-gradient';
import datatest from './mookdatatest';
import {SafeAreaView} from 'react-native-safe-area-context';

import {create} from 'apisauce';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {setListChoose} from '../../redux/actions/pageList';
import type {Store} from 'redux';
import ItemList from './components/renderItem';

const api = create({
  baseURL: 'http://streaming.nexlesoft.com:3001',
});
const HomeScreen = () => {
  const disPatch = useDispatch();
  const listChosse = useSelector(state => state);
  const dispatchAddToList = (item: any) => disPatch(setListChoose(item));

  const store: Store = useStore();

  console.log('store', listChosse);

  const onHandlePress = async (item: any) => {
    console.log('item', item);
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={bghome} style={styles.container}>
          <LinearGradient
            colors={['rgba(0, 0, 0 ,0.1)', 'rgba(1, 1, 1,1)', 'rgb(1, 1, 1)']}
            style={styles.linearGradient}>
            <Text style={styles.textStarted}>
              Wellcome to Nexle Entrance Test
            </Text>
            <Text style={styles.textStarted_}>
              Please select categories what you would like to see on your feed.
              You can set this later on Filter.
            </Text>
            <SafeAreaView>
              <FlatList
                style={{
                  // justifyContent:'space-between'
                  // alignSelf: 'flex-start',
                  // backgroundColor: ' red',
                  width: '100%',
                  height: '80%',
                  // flex: 1
                }}
                data={datatest}
                renderItem={item => (
                  <ItemList onHandlePress={onHandlePress} {...item} />
                )}
                horizontal={false}
                numColumns={3}></FlatList>
            </SafeAreaView>
          </LinearGradient>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
