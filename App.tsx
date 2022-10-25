import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';

import {QueryClient, QueryClientProvider} from 'react-query';
import {useList, useUserData, providers} from './src/constate';
import Compose from './src/utils/compose';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <QueryClientProvider client={queryClient}>
        <Compose components={providers}>
          <Home />
        </Compose>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

const Home = () => {
  const {isLoading, list, refetch} = useList();
  const {mutate} = useUserData();
  useEffect(() => {
    console.log('list: ', list);
  }, [list]);

  return (
    <View style={styles.main}>
      <ActivityIndicator animating={isLoading} size={'large'} color={'#fff'} />
      <Button title={'Get data'} onPress={refetch} />
      <Button title={'Push data'} onPress={() => mutate()} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safe: {
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
    height: 50,
    width: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    backgroundColor: 'darkgrey',
    height: 50,
    width: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
});

export default App;
