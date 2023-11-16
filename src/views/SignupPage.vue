<template>
    <div>
      <Header />
      <div class="flexboxI">
        <div class="box" id="login">

            <h2>Welcome to PostIt</h2>
            <!-- <p><a href="login.html">Create an account</a><p> -->
            <p><router-link to="/" class="nav-link">Create an account</router-link></p>
            <p>or</p>
            <p>Please log in</p>
        
            <form action="index.html" method="get">
                <input type="text" placeholder="Email" required id="emailA">
                <input type="password" placeholder="Password" required id="emailP">
                <button type="submit" id="logInButton">Log in</button>
            </form>

            <!-- <p><a href="login.html">Forgot password</a><p> -->
            <p><router-link to="/signup" class="nav-link">Forgot password</router-link></p>


        </div>
    </div>

      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'SignupPage',
    components: {
      Header,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  