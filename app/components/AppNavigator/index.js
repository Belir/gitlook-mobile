import { StackNavigator } from 'react-navigation';

// Views
import Home from 'scenes/Home';
import SearchResults from 'scenes/SearchResults';
import User from 'scenes/User';

const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      header: null
    }
  },
  SearchResults: {
    screen: SearchResults,
    navigationOptions: ({ navigation }) => ({
      title: `Results for: ${navigation.state.params.phrase}`,
    }),
  },
  UserScreen: {
    screen: User,
    navigationOptions: ({ navigation }) => ({
      title: `User: ${navigation.state.params.userLogin}`,
    }),
  },
});

export default AppNavigator;