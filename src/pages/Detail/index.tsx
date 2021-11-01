import React from 'react'
import { Button, Stack } from 'native-base'
import {
  incrementCount,
  decrementCount,
} from '../../store/actions/countActions'
import { connect } from 'react-redux'

const Detail = (props: any, { navigation }: any) => {
  return (
    <Stack
      direction={{
        base: 'column',
        md: 'row',
      }}
      space={2}
      alignItems={{
        base: 'center',
        md: 'flex-start',
      }}
    >
      <Button variant="outline">increment</Button>
      <Button variant="outline">decrement</Button>
    </Stack>
  )
}

const mapStateProps = (state: any) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: (counter: number) => {
      dispatch(incrementCount(counter))
    },

    decrement: (counter: number) => {
      dispatch(decrementCount(counter))
    },
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Detail)
