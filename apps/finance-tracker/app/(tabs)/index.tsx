import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/finance/project-list/')
        .then((response) => response.json())
        .then((data) => {
            console.log('Fetched data:', data);  // Log the data from the API
            setProjects(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
}, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project List</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  projectItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;

