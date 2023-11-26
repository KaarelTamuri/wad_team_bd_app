<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>



* {
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;;
}

body {
    line-height: 1.6;
    background-color: #18191a;
    color: whitesmoke;

    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    
   
}



ul {
    list-style: none;
}





@media (max-width: 799px) {
    .nav, header, footer {
        flex-direction: column;
        display: flex;
    }        
        
    header,footer {
        flex-direction: column;
        align-items: center;
    }
}

@media (min-width: 800px) {
    header, .nav {
        display: flex;
    }
    header {
        flex-direction: column;
        align-items: center;
    }
}

@media (min-width: 1000px) {
    header {
        flex-direction: row;
        justify-content: space-between;
    }
}

.flexboxI {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex: 1;
     
}

.flexboxI > div{ /*Child Selector*/
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);

}

.post {
    background-color: #3a3b3c;
    margin: 20px;
    padding: 20px;
    font-size: 15px;
    border-radius: 8px;
    width: 90%;
    
}

.post > .postImg{ /*Child Selector*/
    border-radius: 8px;
    width: 640px;
    height: 360px;
    display: block;
    object-fit: cover; 
    max-width: 100%;
}

#likeButton{
  margin-top: 20px;
  height: 30px;
  width: 30px;
}

.andmed ul{
    display: flex;
    align-items: center;
    
}

.andmed li{
    display: inline-block;
    padding-right: 10px;
    
}

.andmed li >img{
    border-radius: 50%;
    width: 30px;
    height: 30px;

}

.andmed + p{ /*Adjacent Sibling Selector */
    font-weight:bold;
    padding-top: 25px;
    
}

.andmed ~ p{ /*General Sibling Selector*/
    padding-bottom: 15px;


}




#login{
    text-align: center;
}




#login a{
    color: #E5C3A6;
    padding: 5px;
}

#login a:hover{
    transform: scale(1.03);
    transition: transform 150ms;
}




#logInButton{
    margin-top: 2em;
}


.box {
    background-color: #3a3b3c;
    padding: 20px;
    margin: 40px;
    border-radius: 8px;
    color: whitesmoke;
    min-width: 300px;
}

.box h2{
    font-weight: bold;
    margin:1em;
}

.box > form{
    padding-top: 2em;
}



.box label, .box textarea, .box input[type="file"], .box button{
    display: block;
    margin-bottom: 20px;
    width: 100%;
}

.box button, .resetButton{
    cursor: pointer;

    background-color: #83715f;
    color: whitesmoke;
    border: none;
    padding: 10px;
    border-radius: 5px;
    display: block;
}

.box button:hover, .resetButton:hover, .likeButton:hover{
    background-color: #E5C3A6;
    color: #092747;
    transition: 150ms;
}

.box button:active, .resetButton:active, .likeButton:active{
    opacity: 0.8;
}



#addText, #emailA, #emailP{ /*ID Selector*/
    border-radius: 8px;
    background-color: #787a7c;
    padding: 0.5em;
    color:whitesmoke;
    resize: none;
    width: 100%;
    margin-top:0.2em;
    

}

::placeholder{ /*pseudo-element*/
    color: whitesmoke;
    opacity: 0.5;
}



.likeButton {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.likes{
  color: whitesmoke;
}




</style>
