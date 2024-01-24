import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterUser';
import { MainManagerPage } from './pages/MainManagerPage';
import { MainUserPage } from './pages/MainUserPage';

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/manager/:id">
          <MainManagerPage />
        </Route>
        <Route exact path="/user/:id">
          <MainUserPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/">
        <MainUserPage />
      </Route>
    </Switch>
  );
};
