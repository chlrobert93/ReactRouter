import {Route,Switch} from 'react-router-dom';
import AllMeetup from './pages/AllMeetup';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './Components/Layout/Layout';


function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/">
            <AllMeetup />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/new/meetup" component={NewMeetup} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;