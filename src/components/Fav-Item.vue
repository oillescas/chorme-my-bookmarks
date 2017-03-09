<script>
    export default {
        name: "Fav-Item",
        props: ['fav'],
        mounted: function () {
           //console.log(this.fav);
        },        
        methods:{
        }
    }
</script>

<template>
    <a :href="fav.url" target="_blank" class="card" style="width: 250px;">
        <div class="card-divider">
            {{fav.title}}
        </div>
        <img src="http://lorempixel.com/400/200/city">
        <div class="card-section">
            <p>{{new Date(fav.dateAdded).toLocaleString()}}</p>
        </div>
    </a>
</template>
