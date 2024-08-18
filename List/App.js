import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  { id: '1', name: 'User 1', description: 'Lorem ipsum dolor, consectetur.' },
  { id: '2', name: 'User 2', description: 'Lorem ipsum dolor, consectetur.' },
  { id: '3', name: 'User 3', description: 'Lorem ipsum dolor, consectetur.' },
  { id: '4', name: 'User 4', description: 'Lorem ipsum dolor, consectetur.' },
  { id: '5', name: 'User 5', description: 'Lorem ipsum dolor, consectetur.' },
  { id: '6', name: 'User 6', description: 'Lorem ipsum dolor, consectetur.' },
  { id: '7', name: 'User 7', description: 'Lorem ipsum dolor, consectetur.' },
   { id: '7', name: 'User 7', description: 'Lorem ipsum dolor, consectetur.' },
    { id: '7', name: 'User 7', description: 'Lorem ipsum dolor, consectetur.' },
     { id: '7', name: 'User 7', description: 'Lorem ipsum dolor, consectetur.' },
      { id: '7', name: 'User 7', description: 'Lorem ipsum dolor, consectetur.' },
       { id: '7', name: 'User 7', description: 'Lorem ipsum dolor, consectetur.' },
];

export default function TeacherListScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Icon name="account-circle" size={50} color="#00A2F1" />
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="pencil" size={24} color="#00A2F1" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="trash-can" size={24} color="#d9534f" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi Admin!</Text>
      <Text style={styles.subHeader}>Welcome back to your panel.</Text>
      <Text style={styles.title}>Teacher List</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.fab}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  itemContent: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00A2F1',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  iconButton: {
    marginLeft: 15,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#00A2F1',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});