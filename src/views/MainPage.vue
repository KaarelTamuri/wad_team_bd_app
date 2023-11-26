<template>
    <div>
        <Header />
        <div class="flexboxI">
            <Post1 />
        </div>
        <Footer />
    </div>
</template>
  
<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import Post1 from '@/components/Post1.vue';




    export default {
        name: 'MainPage',
        components: {
            Header,
            Footer,
            Post1

        },
    };
</script>

<style scoped>
</style>
  