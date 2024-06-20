<template>
<div class="wish-page">
    <h1> here u goooo</h1>
<div v-if="isloggedin">  
    <h3>hapy birthday {{ username }} </h3>
    <p> hello</p>
</div>
<div v-else>
    <p> please login properly </p>
</div>
</div>
</template>
<script>
export default {
name: 'wish',
props: ['username'],
computed:{
    isloggedin(){
        console.log(this.username);
        return !!this.username;
    }
}
};
</script>
<style scoped>
.wish-page{
    background-size:cover;
    background-image: url('@/assets/img1.jpg');
    background-size:cover;
    background-position: center;
    height:100vh;
    max-height:500px;
    width: 100vw;
    background-repeat: no-repeat; /* Do not repeat the image */
}
</style>