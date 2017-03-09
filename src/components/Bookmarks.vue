<script>
    import BookmarkService from '../services/bookmarks';
    import Favs from './Favs.vue';
    export default {
        name: "Bookmarks",
        data: function () {
            return {
                tree: {}, 
                active: {},
                pila:[]
            }
        },
        components: {
           Favs
        },
        mounted: function () {
            BookmarkService.getTree().then(resp => {
                console.log(resp[0]);
                this.tree = resp[0];
                this.active = this.tree;
            }, function (response) {
                console.log(response)
            });

        },
         methods: { 
            selected:function(fav){
                this.pila.push(this.active);
                this.active = this.active.children.find(element=>element.id===fav.id);
            }, 
            atras:function(){
                this.active = this.pila.pop();
            }
         }
    }

</script>

<template>
    <div>
        <div>
            <h1>{{active.title}}</h1>
            <button v-if="pila.length!==0" v-on:click="atras">ir arriba</button>
            <div class="row">
                <Favs  v-for="fav in active.children" :fav="fav" v-on:select="selected(fav)"></Favs>
            </div>
        </div>
    </div>

</template>