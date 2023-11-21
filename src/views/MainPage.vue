<template>
    <div>
        <Header />
        <div class="flexboxI">
            <Post1 />
            <Post2 />
            <Post3 />
            <Post4 />
            <Post5 />
            <Post6 />
            <Post7 />
            <Post8 />
            <Post9 />
            <Post10 />
        </div>
        <Footer />
    </div>
</template>
  
<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import Post1 from '@/components/Post1.vue';
    /*import Post2 from '@/components/Post2.vue';
    import Post3 from '@/components/Post3.vue';
    import Post4 from '@/components/Post4.vue';
    import Post5 from '@/components/Post5.vue';
    import Post6 from '@/components/Post6.vue';
    import Post7 from '@/components/Post7.vue';
    import Post8 from '@/components/Post8.vue';
    import Post9 from '@/components/Post9.vue';
    import Post10 from '@/components/Post10.vue';*/



    export default {
        name: 'MainPage',
        components: {
            Header,
            Footer,
            Post1,
            /*Post2,
            Post3,
            Post4,
            Post5,
            Post6,
            Post7,
            Post8,
            Post9,
            Post10*/
        },
    };
</script>

<style scoped>
/* Add your styles here */
</style>
  