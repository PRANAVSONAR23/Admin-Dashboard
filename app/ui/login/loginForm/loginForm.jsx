"use client";

import styles from "./loginForm.module.css";
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleRedirect();
  };

  const handleRedirect = () => {
    router.push('/dashboard');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
