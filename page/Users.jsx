import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { firebase } from '../config';

const UsersScreen = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const getUsers = async () => {
        const usersRef = firebase.firestore().collection('users');
        const snapshot = await usersRef.get();
        const fetchedUsers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(fetchedUsers);
      };
  
      getUsers();
    }, []);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Users:</Text>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View style={styles.userContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  userContainer: {
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 16,
    color: 'gray'
  }
});

export default UsersScreen;