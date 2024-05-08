import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css';


function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { login } = useAuth(); // Get the login function from AuthContext
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrorMessage('');
    setSuccessMessage('');
    try {
        const response = await axios.post('http://localhost:3001/login', formData)
        // Redirect or handle response here, such as redirecting to the login page

        if(response.status === 201) {
            login(response.data.user.admin); // Set the global isLoggedIn to true
            setSuccessMessage(response.data.successMessage);
            
            setTimeout(() => {
              navigate('/'); // Adjust the route as needed
          }, 1000);

            // Reset form data before redirecting
            setFormData({
              email: '',
              password: ''
          });
          
        }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
      } else {
        console.log('Error', error.message)
      }
    }
};


  return (
    <div class={styles.loginContainer}>
      <form onSubmit={handleSubmit} class={styles.loginForm}>
        <h2>Login</h2>
            {Object.entries(formData).map(([key, value]) => (
              <div className={styles.inputGroup} key={key}>
                  <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  <input type={key === "password" ? "password" : "text"} 
                          id={key} name={key} value={value} 
                          onChange={handleChange} required />
              </div>
            ))}
          <button type="submit">Login</button>
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          <p className={styles.signupLink}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
    </div>
  )
}

export default LoginPage