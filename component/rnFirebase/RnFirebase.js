import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

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
    // auth()
    // .createUserWithEmailAndPassword('<test1></test1>@gmail.com', 'SuperSecretPassword!')
    // .then( authInfo => {
    //   console.log('authInfo', authInfo);
    // })
    // .catch(error => {
    //   if (error.code === 'auth/email-already-in-use') {
    //     console.log('That email address is already in use!');
    //   }
    //   if (error.code === 'auth/invalid-email') {
    //     console.log('That email address is invalid!');
    //   }
    //   console.error(error);
    // });

    // database()
    // .ref('/users/2')
    // .set({
    //   userId: 2,
    //   name: 'rick',
    //   email: "rickk@email.com"
    // })
    // .then(() => console.log('Data set.'));

    /*
    User data: [null, {"email": "david@email.com", "name": "david", "userId": 1}, 
      {"email": "rickk@email.com", "name": "rick", "userId": 2}, 
      {"email": "felixk@email.com", "name": "felix", "userId": 3}]
    */
    // database()
    // .ref('users')
    // .once('value')
    // .then(snapshot => {
    //   console.log('User data: ', snapshot.val());
    // });

    // Realtime Database
    database()
    .ref('users')
    .on('value', snapshot => {
      console.log('User data: ', snapshot.val());
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