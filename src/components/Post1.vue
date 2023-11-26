<!--<template>
    <div class="post">
        <div class="andmed">
            <ul>
                <li><img src="images.jpg" alt="User photo"></li>
                <li><p>Oct 1, 2023</p></li>
            </ul>
        </div>
        <p>Õunad</p>
        
        
        
        <p>Apple teatas laupäeval, et on tuvastanud mitmeid 
        probleeme, mille tõttu võivad uued iPhone'id 
        töötada oodatust soojemalt, vahendab Reuters. </p>
    
        <img src="res/images/apple.jpg" class="postImg" alt = "Apples">
        <img  src="like.svg" id="likeButton">
    </div>
</template>-->

<template>
      <div class="post" v-for="post in data" :key="post.id">
        <div class="andmed">
            <ul>
                <li><img :src="post.profilePicture" alt="User photo"></li>
                <li>
                    {{ post.username }}
                </li>
                <li>
                    {{ post.time }}
                </li>
            </ul>
        </div>
        <p>{{ post.title }}</p>
        <p>{{ post.body }}</p>
        <!-- Here we control with v-if if there is an image in post or not-->
        <template v-if="post.imageLink">
            <img class="postImg" :src="post.imageLink" :alt="post.title">
        </template>
        <!-- Here we make an interactive like button -->
        <button @click="toggleLike(post.id)" class="likeButton">
            <img src="like.svg" id="likeButton">
        </button>
        <p class = "likes">{{ post.likes }} Likes</p>
      </div>
      <button @click="resetLikes" class="resetButton">Reset likes</button>
  </template>

<script>
// https://api.npoint.io/227c0565e484071cee4f <-- JSON-file endpoint
// if local --> '/data.json' (public directory)
export default {
//name: 'Post1',
data() {
    return {
      data: [],
    };
},
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('https://api.npoint.io/227c0565e484071cee4f')  // Assuming data.json is in the public directory
        .then(response => response.json())
        .then(data => {
          this.data = data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    // Here we count up how many likes there is, default is 0
    toggleLike(postId) {
      const post = this.data.find(post => post.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
    resetLikes() {
      // Reset all likes for each post in data
      this.data.forEach(post => {
        post.likes = 0;
      });
    },
  },

};
</script>

<style scoped>
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