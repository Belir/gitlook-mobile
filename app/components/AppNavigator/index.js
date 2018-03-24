import { StackNavigator } from 'react-navigation';

// Views
import Home from 'scenes/Home';
import SearchResults from 'scenes/SearchResults';

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
  }
});

export default AppNavigator;