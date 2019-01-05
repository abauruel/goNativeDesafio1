import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 3,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 12,
    color: '#c0c0c0',
  },
  conteudo: {
    marginTop: 10,
  },
});

const Post = ({ post }) => (
  <View style={styles.container} key={() => Math.random()}>
    <Text style={styles.titulo}>{post.title}</Text>
    <Text style={styles.author}>{post.author}</Text>
    <Text style={styles.conteudo}>{post.conteudo}</Text>
  </View>
);

Post.prototype = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  conteudo: PropTypes.string,
};

export default Post;
