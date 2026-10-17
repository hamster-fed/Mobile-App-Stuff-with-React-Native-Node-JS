import { Text, StyleSheet, View, FlatList, Button} from 'react-native'

const students = [
    {
        id: '1',
        name: 'star',
        lastname: 'iljazi',
        age: 17,
    },
    {
        id: '2',
        name: 'lall',
        lastname: 'lalalall',
        age: 107,
    },
    {
        id: '3',
        name: 'Jane',
        lastname: 'Doe',
        age: 16,
    }
]

const ListScreen = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> List of Students </Text>
            <FlatList
                data={students}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return(
                        <Text style={styles.students}> 
                        {item.name} {item.lastname} - {item.age}
                        </Text>
                    )
                }}
            >
            </FlatList>
            <Button 
            title='Go Back'
            onPress={() => props.navigation.goBack()}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f5e77c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  students: {
    fontSize: 16,
    marginBottom: 10
  }
});

export default ListScreen;