import { StackNavigator } from 'react-navigation';

// Views
import Home from 'scenes/Home';
import SearchResults from 'scenes/SearchResults';
import User from 'scenes/User';
import Repository from 'scenes/Repository';

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
      headerBackTitle: 'Back',
      title: `Results for: ${navigation.state.params.phrase}`,
    }),
  },
  UserScreen: {
    screen: User,
    navigationOptions: ({ navigation }) => ({
      headerBackTitle: 'Back',
      title: `User: ${navigation.state.params.userLogin}`,
    }),
  },
  RepositoryScreen: {
    screen: Repository,
    navigationOptions: ({ navigation }) => ({
      headerBackTitle: 'Back',
      title: `Repo: ${navigation.state.params.ownerLogin}/${navigation.state.params.repoName}`,
    }),
  },
});

export default AppNavigator;
