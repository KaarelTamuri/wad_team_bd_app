<template>
    <header>
      <ul class ='nav'>
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/signup" class="nav-link">Signup</router-link></li>
      </ul>
      <img src="images.jpg" class="logo" alt="My picture">

    </header>

</template>
  
<script>
    export default {
        name: 'Header',
    };
</script>
  
<style scoped>
  /* header {
    background-color: #f5f5f5; 
    padding: 10px 0;
    text-align: center;
  }
  
  nav {
    display: inline-block;
    margin: 0 auto;
  }
  
  .nav-link {
    margin: 0 15px; 
    text-decoration: none;
    color: #333; 
    font-size: 1.2em;
  }
  

  .router-link-active {
    font-weight: bold;
    color: #007bff;
  } */

header {
    padding-top: 1em;
    padding-bottom: 1em;
    margin-bottom: 2em;
    background-color: #242526;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    position: -webkit-sticky; /* For Safari */
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo{
    margin-inline: 2em;
    border-radius: 50%;
    height: 50px;
    width: 50px;
}

.a {
    color: #34495e;
    text-decoration: none;
    display: inline-block;

    
}

.a:active{
    opacity: 0.8;
}


.nav {
    margin-inline: 2em;
    
}

.nav a {
    padding: 10px 15px;
    text-align: center;
    display: block;
    color: whitesmoke;
    font-size: .99em;
    border-radius: 3px;
}

.nav a:hover {
    background-color: #E5C3A6;
    color: #092747;
    transition: 50ms;
}
</style>
  