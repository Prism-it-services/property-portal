import { ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const httpLink = new HttpLink({

    uri: 'https://djbobegaqvdpdhh4k3evlcrlj4.appsync-api.us-east-1.amazonaws.com/graphql',
    headers: {
        'x-api-key': 'da2-6e7x72l7dzgwthnjnwqb5onljq'
      }

});

export const client = new ApolloClient({

    link: httpLink,
    cache: new InMemoryCache(),

});