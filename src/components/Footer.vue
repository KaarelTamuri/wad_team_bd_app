<template>
    <footer>
        <ul>
            <li>Kaarel Tamuri</li>
            <li>Brigit Parra</li>
            <li>Stina-Marie Maripuu</li>
        </ul>
    </footer>
</template>
  
<script>
    export default {
        name: 'Footer',
    };
</script>
  
<style scoped>
footer {
    background-color: #242526;
    color: whitesmoke;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-top: 20px;
    text-align: center;

}



footer ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center; 
    
}

footer li {
    display: inline-block; 
    margin: 10px;
    opacity: 0.5;
}
  </style>
  