import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://souzmultapi.ru/api',
  cache: new InMemoryCache()
});

export default client;
