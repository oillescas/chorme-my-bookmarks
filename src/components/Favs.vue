<script>
    import FavFolder from './Fav-Folder.vue';
    import FavItem from './Fav-Item.vue';

    export default {
        name: "Favs",
        props: ['fav'],
        mounted: function () {
           //console.log(this.fav);
        },
        components: {
           FavFolder,
           FavItem
        },
        methods:{
          selected:function(){
            console.log(`select  ${this.fav}`);
            this.$emit('select')
          }
        }
    }
</script>

<template>
  <div class="large-3 columns">
    <fav-folder v-on:select="selected(fav)"  v-if="fav.children" :fav="fav"/>
    <fav-item  v-else :fav="fav"/>
  </div>
</template>
