import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Article = ({ article, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Secound Screen', { article: article });
      }}
    >
      <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Article;

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 22,
    paddingBottom: 10,
    color: 'white',
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
  },
});
