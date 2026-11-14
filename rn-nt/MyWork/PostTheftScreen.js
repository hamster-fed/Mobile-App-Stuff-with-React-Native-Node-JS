import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default class PostTheftScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      
      this.setState({
        isLoading: false,
        data: json,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        error: 'Failed to fetch data. Check your internet connection.',
      });
    }
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.postId}>Post #{item.id}</Text>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postBody} numberOfLines={2}>
          {item.body}
        </Text>
      </View>
    );
  };

  render() {
    const { isLoading, data, error } = this.state;

    if (isLoading) {
      return (
        <View style={styles.centerContainer}>
          <Text>Fetching data...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={this.fetchData}>
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>JSONPlaceholder Posts</Text>
        </View>
        
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  postId: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 4,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  postBody: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryText: {
    color: 'white',
    fontWeight: 'bold',
  }
});