import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Card, Button, CardItem} from 'native-base';
import StatusBar from '@components/StatusBar';
import {incrementCount, decrementCount} from '../../store/actions/countActions';
import {connect} from 'react-redux';

const Detail = (props: any, {navigation}: any) => {
  return (
    <SafeAreaView>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="#fff"></StatusBar>
      <Card>
        <CardItem>
          <Text>{props.counter}</Text>
        </CardItem>
      </Card>
      <Button primary block onPress={() => props.increment()}>
        <Text>Increment</Text>
      </Button>
      <Button primary block onPress={() => props.decrement()}>
        <Text>Decrement</Text>
      </Button>
    </SafeAreaView>
  );
};

const mapStateProps = (state: any) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: (counter: number) => {
      dispatch(incrementCount(counter));
    },

    decrement: (counter: number) => {
      dispatch(decrementCount(counter));
    },
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Detail);
