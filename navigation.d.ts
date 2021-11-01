export type RootStackParamList = {
    Home: undefined
    Profile: { userId: string }
    Feed: { sort: 'latest' | 'top' } | undefined
}
