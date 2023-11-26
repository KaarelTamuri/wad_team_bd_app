<template>
  <!-- <div> -->
  <body>

  
  <Header />
  <div class="flexboxI">
    <div class="box" id="login">

      <h2>Welcome to PostIt</h2>
      <!-- <p><a href="login.html">Create an account</a><p> -->
      <!-- <p><router-link to="/" class="nav-link">Create an account</router-link></p>@submit.prevent="signup_req" -->
      <!-- <p>or</p> -->
      <p>Please sign up</p>
  
      <form action="index.html" method="get" @submit.prevent="loginReq" >
        <input type="text" placeholder="Email"  id="emailA">
        <input type="password" placeholder="Password"  id="emailP">
        <button type="submit" id="logInButton">Signup</button>
      </form>

      <!-- <p><a href="login.html">Forgot password</a><p> -->
      <!-- <p><router-link to="/signup" class="nav-link">Forgot password</router-link></p> -->


    </div>
  </div>

  <Footer />
  </body>
  <!-- </div> -->
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
  methods: {
    loginReq() {
    // Get values from the form
    var username = document.getElementById("emailA").value;
    var password = document.getElementById("emailP").value;
    var upper = 0;
    var lower = 0;
    var numeric = 0;
    var start = 0;
    var char = 0;

    for (let i = 0; i < password.length; i++){ //counting all requirements except length and username
      var element = password[i]; //current character 
      if (/[A-Z]/.test(element)){//uppercase
        upper+=1
        if (i==0){start+=1;} //starts with uppercase
      }
      else if (/[a-z]/.test(element)){lower+=1;} //lowercase
      else if (/[0-9]/.test(element)){numeric+=1;} //numeric
      else if (element === '_'){char+=1;} //includes '_'
    }
    if (username.length===0){alert("Please fill out userame field.");}
    else if (password.length===0){alert("Please fill out password field.");}
  
    else if (password.length <= 8 || password.length >= 15) {
      alert("Password must be at least 8 and less than 15 characters!");
    }
    else if (upper < 1){alert("Password has to include at least one uppercase alphabet character.");}
    else if (lower < 2){alert("Password has to include at least two lowercase alphabet characters.");}
    else if (numeric < 1){alert("Password has to include at least one numeric value.");}
    else if (start < 1){alert("Password has to start with an uppercase alphabet character.");}
    else if (char < 1){alert("Password has to include the character '_'.");}
    else {
      window.location.href = '/';
    }
    }

  }
}
</script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  