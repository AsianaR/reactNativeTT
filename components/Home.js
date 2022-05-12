import React from 'react';
import {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Image} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

const _apiBase = 'https://api.tvmaze.com/';

const Home = ( {navigation} ) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleClick = (date) => {
    setSelectedDate(date);
    navigation.navigate('Episodes', {date: date})
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <Image style={styles.image} source={require('../assets/tv.png')} />
      <Text style={styles.text}>
        Для получения списка сериалов, {'\n'}
        пожалуйста, выберите {'\n'}
        необходимый месяц и день.
      </Text>
      <DatePicker
        onSelectedChange={date => handleClick(date)}
        mode="calendar"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataPicker: {
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'stretch',
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
});

export default Home;
