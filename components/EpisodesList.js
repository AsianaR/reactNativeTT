import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';

const _apiBase = 'https://api.tvmaze.com/';

const EpisodesList = ({navigation, route}) => {
  const [data, setData] = useState();
  const date = route.params.date.replace(/\//g, '-');

  useEffect(() => {
    getEpisodes();
  }, [date]);

  const getEpisodes = () => {
    axios.get(`${_apiBase}schedule?date=${date}`).then(response => {
      setData(response.data);
    });
  };

  const renderItems = data?.map(item => (
    <View style={styles.card} key={item?.id}>
      <Image
        style={styles.image}
        source={{
          uri: `${item?.show.image?.medium}`,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.titleText}>{item.show.name}</Text>
        <Text style={styles.premiereText}>{item.show?.premiered.split('-')[0]}</Text>
        <View style={styles.seasons}>
          <Text>Сезон: {item.season}</Text>
          <Text style={styles.episodeText}>Эпизод: {item.number}</Text>
        </View>
      </View>
    </View>
  ));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headline}>{date}</Text>
      <ScrollView>{renderItems}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  image: {
    width: 50,
    height: 80,
    resizeMode: 'stretch',
    marginVertical: 20,
  },
  info: {
      marginLeft: 20,
  },
  seasons:{
    flexDirection: 'row',
    backgroundColor: '#e0e0de',
    color: '#999',
    padding: 8,
    marginTop: 15
  },
  episodeText: {
      marginLeft: 10,
  },
  titleText: {
      fontWeight: 'bold',
  },
  premiereText: {
    fontWeight: '300',
    coolor: '#f9f9f9',
  },
  headline: {
      fontWeight: 'bold',
      borderBottomWidth: 2,
      borderBottomColor: '#333',
      width: '100%',
      marginVertical: 15,
      paddingBottom: 10,
      textAlign: 'center',

  }

});

export default EpisodesList;
