<script>
    export default {
        name: "Fav-Folder",
        props: ['fav'],
        mounted: function () {
           //console.log(this.fav);
        },
        methods:{
          selected:function(){
            this.$emit('select')
          }
        }
    }
</script>

<template>
  <a v-on:click="selected(fav)" target="_blank" class="card" style="width: 250px;">
        <div class="card-divider">
            {{fav.title}}
        </div>
        <img src="/images/folder.png">
        <div class="card-section">
            <p>{{new Date(fav.dateAdded).toLocaleString()}}</p>
        </div>
    </a>
</template>
