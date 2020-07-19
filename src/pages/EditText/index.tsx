import * as React from 'react';
import { Alert, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import StatusBar from '@components/StatusBar';
const EditTextScreen = ({ navigation }: any) => {
    const [text, setText] = React.useState('');
    const hasUnsavedChanges = Boolean(text);
    React.useEffect(() => {
        navigation.addListener('beforeRemove', (e: any) => {
            console.log('111')
            const action = e.data.action;
            if (!hasUnsavedChanges) {
                console.log('!hasUnsavedChanges', !hasUnsavedChanges)

                return;
            }
            e.preventDefault();

            Alert.alert(
                'Discard changes?',
                'You have unsaved changes. Are you sure to discard them and leave the screen?',
                [
                    { text: "Don't leave", style: 'cancel', onPress: () => { } },
                    {
                        text: 'Discard',
                        style: 'destructive',
                        onPress: () => navigation.dispatch(action),
                    },
                ]
            );
        })
    }, [hasUnsavedChanges, navigation])

    return (
        <SafeAreaView style={styles.content}>
            <StatusBar translucent={true} barStyle="dark-content" backgroundColor="#fff" />
            <TextInput
                autoFocus
                style={styles.input}
                value={text}
                placeholder="Type something…"
                onChangeText={setText}
            />
        </SafeAreaView>
    );
};

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
});


export default EditTextScreen