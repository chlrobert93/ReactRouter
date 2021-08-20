import {Route,Switch} from 'react-router-dom';
import AllMeetup from './pages/AllMeetup';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './Components/Layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          <AllMeetup />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/new/meetup" component={NewMeetup} />
      </Switch>
    </div>
  );
}

export default App;