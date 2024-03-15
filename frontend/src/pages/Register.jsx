import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import { Logo, FormRowInput } from '../components';
import axios from 'axios';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();

  // Turning array of arrays into an object
  const data = Object.fromEntries(formData);

  // console.log(data);

  try {
    await axios.post('/auth/register', data);
    return redirect('/login');
  } catch (error) {
    console.error(error);
    return error;
  }
};

const Register = () => {
  // Navigation State
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';

  return (
    <main className="register-page">
      <Form method="post" className="form">
        <Logo />

        <h3>Register</h3>

        <FormRowInput type="text" name="name" defaultValue="john" />

        <FormRowInput
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="doe"
        />

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
          register
        </button>

        <p>
          Already have an account?{' '}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </Form>
    </main>
  );
};
export default Register;
