import { StackNavigator } from 'react-navigation';

// Views
import Home from 'scenes/Home';
import SearchResults from 'scenes/SearchResults';

const routes = {
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
  }
};

const AppNavigator = StackNavigator(routes);

export default AppNavigator;