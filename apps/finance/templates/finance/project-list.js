import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ProjectListView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Project List View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24, // Similar to <h2> size
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default ProjectListView;
