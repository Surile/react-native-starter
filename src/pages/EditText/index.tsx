import React, { useState } from 'react'
import { Modal, Button } from 'native-base'
import { TextInput, StyleSheet, SafeAreaView } from 'react-native'
import StatusBar from '@components/StatusBar'

const EditTextScreen = ({ navigation }: any) => {
  const [text, setText] = useState('')

  const [action, setAction] = useState<any>()

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const hasUnsavedChanges = Boolean(text)

  React.useEffect(() => {
    navigation.addListener('beforeRemove', (e: any) => {
      setAction(e.data.action)
      if (!hasUnsavedChanges) {
        console.log('!hasUnsavedChanges', !hasUnsavedChanges)

        return
      }
      e.preventDefault()
    })
  }, [hasUnsavedChanges, navigation])

  return (
    <SafeAreaView style={styles.content}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="#fff"
      />
      <TextInput
        autoFocus
        style={styles.input}
        value={text}
        placeholder="Type something…"
        onChangeText={setText}
      />
      <Modal
        isOpen={isVisible}
        onClose={() => {
          setIsVisible(false)
        }}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Discard changes?</Modal.Header>
          <Modal.Body>
            You have unsaved changes. Are you sure to discard them and leave the
            screen?
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button onPress={() => setIsVisible(false)}>取消</Button>
              <Button onPress={() => navigation.dispatch(action)}>同意</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  input: {
    margin: 8,
    padding: 10,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    backgroundColor: 'white',
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    margin: 8,
  },
})

export default EditTextScreen
