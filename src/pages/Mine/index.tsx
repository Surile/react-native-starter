import React from 'react';
import {Text, CardItem, Card, Body} from 'native-base';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import CardView from 'react-native-cardview';

export default () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <CardView
          cardElevation={1}
          cardMaxElevation={1}
          cornerRadius={6}
          style={styles.card}>
          <View>
            <Text style={{backgroundColor: 'yellow'}}>Elevation 0</Text>
            <Text>Elevation 1</Text>
            <Text>Ele</Text>
          </View>
        </CardView>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={6}
          style={styles.card}>
          <View
            style={{
              flex: 1,

              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text>Elevation 0</Text>
            <Text>Elevation 1</Text>
            <Text>Ele</Text>
          </View>
        </CardView>
        <Card transparent>
          <CardItem header button onPress={() => alert('This is Card Header')}>
            <Text>NativeBase</Text>
          </CardItem>
          <CardItem button onPress={() => alert('This is Card Body')}>
            <Body>
              <Text>Click on any carditem</Text>
            </Body>
          </CardItem>
          <CardItem footer button onPress={() => alert('This is Card Footer')}>
            <Text>GeekyAnts</Text>
          </CardItem>
        </Card>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <CardView
          cardElevation={4}
          cardMaxElevation={0}
          cornerRadius={6}
          style={{
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            // backgroundColor: '#ffffff',
          }}>
          <View>
            <Text
              style={{
                color: '#000000',
                fontSize: 12,
                backgroundColor: 'pink',
                textAlign: 'center',
              }}>
              Hello
            </Text>
          </View>
        </CardView>
        <View
          style={{
            width: 200,
            height: 200,
            // borderRadius: 6,
            // margin: 10,
            backgroundColor: 'white',
            borderColor: '#999',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 12,
            }}>
            Hello
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: 24,
    // backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    // backgroundColor: '#EEEEEE',
  },
  card: {
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',
    flex: 1,
    margin: 10,
    borderRadius: 6,
  },
  text: {
    textAlign: 'center',
    margin: 10,
    height: 75,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
