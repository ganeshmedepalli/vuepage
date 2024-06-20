<template>
    <div class="auth-container">
      <h2>Register</h2>
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required placeholder="Enter your username">
        <label for="phone number">Phone:</label>
        <input type="integer" id="phone number" name="phone number" required placeholder="Enter your contact number">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="Enter your full email address">

  
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required placeholder="Enter your password">
  
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register'
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  