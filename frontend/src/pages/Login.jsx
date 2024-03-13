import { Link } from 'react-router-dom';
import { Logo, FormRowInput } from '../components';

const Login = () => {
  return (
    <main className="register-page">
      <form className="form" action="">
        <Logo />

        <h3>Login</h3>

        <FormRowInput
          type="email"
          name="email"
          defaultValue="johndoe@gmail.com"
        />

        <FormRowInput
          type="password"
          name="password"
          defaultValue="password123"
        />

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <p>
          Not a member?{' '}
          <Link to="/register" className="link">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
};
export default Login;
