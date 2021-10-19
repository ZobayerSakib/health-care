import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Program from './pages/Program/Program';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Training from './pages/Training/Training';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Details from './pages/Details/Details';
import Register from './pages/Register/Register';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/details/:serviceId'>
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute exact path='/program'>
              <Program></Program>
            </PrivateRoute>
            <Route exact path='/training'>
              <Training></Training>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
