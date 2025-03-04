import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProjectListView = () => {
  // Initialize state to store project data
  const [projects, setProjects] = useState([]);

  // Fetch data from the Django API when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:8000/finance/project-list/')  // Django API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);  // Check if data has expected properties
        setProjects(data);  // Update state with the fetched data
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run once on component mount

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project List</Text>
      <FlatList
        data={projects}  // Data for the list
        keyExtractor={(item) => (item?.id ? item.id.toString() : Math.random().toString())}
        renderItem={({ item }) => (
          <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>{item?.title || 'No Title'}</Text>
            <Text>{item?.description || 'No Description'}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Styles for the component
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
    borderColor: '#ddd',
    borderWidth: 1,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProjectListView;
