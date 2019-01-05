import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, View, Text,
} from 'react-native';

import Post from '~/components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
});

class App extends Component {
  state = {
    posts: [{
      title: 'Aprendendo React Native',
      author: 'Alex Claude Georges Bauruel',
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit nec turpis vitae venenatis. Nulla metus arcu, cursus sed viverra at, viverra at massa. Donec ut enim sit amet leo blandit lobortis vel at ex. Sed mattis volutpat urna, vitae molestie dolor venenatis at. Fusce et blandit neque, ac bibendum ex. Nunc eros sem, ultricies in porta et, congue in tortor. Suspendisse justo massa, pretium a ipsum id, luctus bibendum nunc. Praesent suscipit, metus eu cursus vulputate, magna est molestie tortor, at tristique magna lacus sed purus. Proin ornare pulvinar mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis id sodales sapien. Morbi sit amet metus dapibus, consequat ipsum sed, aliquam metus. Quisque et elit vitae magna semper commodo quis vel metus. Morbi imperdiet purus nec nisl consequat cursus. Nunc et leo lectus. Maecenas vitae leo tortor.',
    },
    {
      title: 'Aprendendo React Native',
      author: 'Alex Claude Georges Bauruel',
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit nec turpis vitae venenatis. Nulla metus arcu, cursus sed viverra at, viverra at massa. Donec ut enim sit amet leo blandit lobortis vel at ex. Sed mattis volutpat urna, vitae molestie dolor venenatis at. Fusce et blandit neque, ac bibendum ex. Nunc eros sem, ultricies in porta et, congue in tortor. Suspendisse justo massa, pretium a ipsum id, luctus bibendum nunc. Praesent suscipit, metus eu cursus vulputate, magna est molestie tortor, at tristique magna lacus sed purus. Proin ornare pulvinar mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis id sodales sapien. Morbi sit amet metus dapibus, consequat ipsum sed, aliquam metus. Quisque et elit vitae magna semper commodo quis vel metus. Morbi imperdiet purus nec nisl consequat cursus. Nunc et leo lectus. Maecenas vitae leo tortor.',
    },
    {
      title: 'Aprendendo React Native',
      author: 'Alex Claude Georges Bauruel',
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit nec turpis vitae venenatis. Nulla metus arcu, cursus sed viverra at, viverra at massa. Donec ut enim sit amet leo blandit lobortis vel at ex. Sed mattis volutpat urna, vitae molestie dolor venenatis at. Fusce et blandit neque, ac bibendum ex. Nunc eros sem, ultricies in porta et, congue in tortor. Suspendisse justo massa, pretium a ipsum id, luctus bibendum nunc. Praesent suscipit, metus eu cursus vulputate, magna est molestie tortor, at tristique magna lacus sed purus. Proin ornare pulvinar mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis id sodales sapien. Morbi sit amet metus dapibus, consequat ipsum sed, aliquam metus. Quisque et elit vitae magna semper commodo quis vel metus. Morbi imperdiet purus nec nisl consequat cursus. Nunc et leo lectus. Maecenas vitae leo tortor.',
    }],
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.posts.map(post => (
          <Post key={() => Math.random()} post={post} />
        ))}
      </ScrollView>
    );
  }
}

export default App;
