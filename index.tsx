import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const DATA = [{
  id: '1',
  title: 'Mobile App Development',
}, {
  id: '2',
  title: 'Web Development',
}, {
  id: '3',
  title: 'Push Ups',
}, {
  id: '4',
  title: 'Study room',
}, {
  id: '5',
  title: 'Complete assignment',
}, {
  id: '6',
  title: 'Algorithm and Data structures',
}, {
  id: '7',
  title: 'Fitness',
}, {
  id: '8',
  title: 'Code',
}, {
  id: '9',
  title: 'Interim assessment',
}, {
  id: '10',
  title: 'Workout plan',
}, {
  id: '11',
  title: 'Software development',
}, {
  id: '12',
  title: 'Metro bundler',
}, {
  id: '13',
  title: 'Cookies',
}, {
  id: '14',
  title: 'Cache',
}, {
  id: '15',
  title: 'Cook',
}]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.boldText}>Hello, Devs</Text>
          <Text style={styles.normalText}>14 tasks today</Text>
          <View style={styles.circle}>
            <Image
              source={{ uri: "https://ouch-cdn2.icons8.com/D3q8fCp3QbzypA6R4avBgts4NnyISPxNsvIh6763-PA/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTQ0/LzM5ZGI2N2JlLWQx/NjEtNDBjMy05YmY4/LWIxMjRkMTI0NzQ3/MS5wbmc.png" }}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.searchSection}>
          <Ionicons style={styles.searchIcon} name="search" size={20} color='#000' />
          <TextInput style={styles.input} placeholder='Search' />
        </View>
        <Image
          source={{ uri: "https://cdn.dribbble.com/users/1466638/screenshots/6960051/comp-1.gif" }}
          style={styles.filter}
        />
        <Text style={styles.textCategories}>Categories</Text>
        <View style={styles.categories}>
          <View style={styles.category}>
            <Image
              source={{ uri: "https://ouch-cdn2.icons8.com/GQ1wS92S6x0iyNvFIaaXN4eWAj_wbl3W9NsYR3oD1yU/rs:fit:368:379/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQw/LzdkYjNlZmY0LTY2/ZTQtNDA3Yi1iMDU1/LTljYjNmYTdmYjI5/OS5wbmc.png" }}
              style={styles.categoryImage}
            />
            <Text style={styles.textBold}>Exercise</Text>
            <Text style={styles.textTask}>12 Tasks</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={{ uri: "https://ouch-cdn2.icons8.com/03SeSdIC3u0ZveWvis118-iKSm4ZeL2Pnmn_SrJqDzg/rs:fit:368:330/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjk2/L2U4ZDBlMzIxLTc1/MGItNGU5Yi1hNjUw/LTU2ZmI1Nzk4M2Vk/MC5wbmc.png" }}
              style={styles.categoryImage}
            />
            <Text style={styles.studyBold}>Study</Text>
            <Text style={styles.taskNormal}>12 Tasks</Text>
          </View>
        </View>
        <Text style={styles.OngoingBold}>Ongoing Task</Text>
        <FlatList
          numColumns={1}
          horizontal={false}
          extraData={5}
          refreshing={true}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4B5',
    paddingHorizontal: 10,
  },
  header: {
    alignItems: 'flex-start',
    backgroundColor: '#FFE4B5',
    padding: 20,
  },
  circle: {
    width: 60, // Resize the width of the circle
    height: 60, // Resize the height of the circle
    borderRadius: 30,
    backgroundColor: '#FFE4B5',
    position: 'absolute',
    top: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 5,
  },
  normalText: {
    fontSize: 20,
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    marginRight: 320, 
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  filter: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 155,
    right: 10,
    borderRadius: 10,
  },
  textCategories: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  category: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    width: 150,
    height: 200,
    justifyContent: 'center',
  },
  categoryImage: {
    width: 120,
    height: 120,
  },
  textBold: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  textTask: {
    fontSize: 12,
    fontWeight: '400',
  },
  studyBold: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  taskNormal: {
    fontSize: 12,
    fontWeight: '400',
  },
  OngoingBold: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 17,
    borderRadius: 10,
    marginRight:18,
  },
  title: {
    fontSize: 22,
    height:120,
  },
});





