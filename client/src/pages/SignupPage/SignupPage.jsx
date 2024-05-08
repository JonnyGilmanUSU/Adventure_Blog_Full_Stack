import React, { useState } from 'react';
import axios from 'axios';
import { Link, redirect } from 'react-router-dom';
import styles from './signup.module.css';


function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrorMessage('');
    setSuccessMessage('');
    try {
        const response = await axios.post('http://localhost:3001/signup', formData)
        // Redirect or handle response here, such as redirecting to the login page
        console.log("Response:  ", response.data.message)

        if(response.status === 201) {
             // Reset form data before redirecting
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              password: ''
          });
          setSuccessMessage(response.data.successMessage);
          window.location.href = '/login'; // Use the desired URL
        }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message)
        setErrorMessage(error.response.data.message);
      } else {
        console.log('Error', error.message)
      }
    }
};

  return (
<div className={styles.loginContainer}>
            <form onSubmit={handleSubmit}  className={styles.loginForm}>
                <h2>Sign Up</h2>
                {Object.entries(formData).map(([key, value]) => (
                    <div className={styles.inputGroup} key={key}>
                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                        <input type={key === "password" ? "password" : "text"} 
                               id={key} name={key} value={value} 
                               onChange={handleChange} required />
                    </div>
                ))}
                <button type="submit">Sign Up</button>
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                <p className={styles.signupLink}>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
  )
}

export default SignUpPage;