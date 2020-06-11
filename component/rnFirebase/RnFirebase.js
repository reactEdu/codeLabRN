import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

class RnFirebase extends Component {
  componentDidMount() {
    // 익명 로그인
    // auth().signInAnonymously()
    // .then( authInfo => {
    //   console.log('authInfo', authInfo);
    // })
    // .catch(error => {
    //   if (error.code === 'auth/operation-not-allowed') {
    //     console.log('Enable anonymous in your firebase console.');
    //   }
      
    //   console.error(error);
    // });

    // 이메일로 가입시키고 로그인
    auth()
    .createUserWithEmailAndPassword('<test1></test1>@gmail.com', 'SuperSecretPassword!')
    .then( authInfo => {
      console.log('authInfo', authInfo);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
  }
  render() {
    return (
      <View>
        <Text>파이어베이스</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default RnFirebase;