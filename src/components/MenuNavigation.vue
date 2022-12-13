<template>
    <div class="menunavcont">
        <q-btn @click="tgnav=!tgnav" class="navb" style="background:linear-gradient(45deg,rgba(229,115,115,1),rgba(255,215,64,1));" fab><q-icon name="menu"/></q-btn>

        <div class="navscr" v-if="tgnav">
          <div style="display:flex;justify-content:center;flex-direction:column;">
          <div v-for="(cat,index) in categories" :key="index" class="navs" @click.stop="navigateToCategory(index)">
            <div class="ccc"><q-icon size="25px" name="expand_more"/></div>
            <div>{{cat}}</div>
          </div>
         </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
    props:{
        categories:{datatype:Object, default:[]}
    },
    data:()=>({
        tgnav:false
    }),
    methods:{
        navigateToCategory(index){
            document.getElementsByClassName("bgg")[index].scrollIntoView({
                behavior:"smooth"
            });
            this.tgnav=false;
        }
    }
})
</script>

<style scoped>
.menunavcont{
    position:fixed;
    top:30px;
    left:20px;
    min-width:100%;
    z-index:9;
}
.navb{
    font-family:"martian";
    color:white;
    font-weight:bold;
}
.navs{
    background:rgba(229,115,115,1);
    height:50px;
    border-radius:25px;
    font-size:14px;
    font-family:"martian";
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:4px 0px;
    transition:width 2s;
    color:white;
    
}
@media screen and (min-width:640px){
    .navs{
        max-width:300px;
    }
}

@media screen and (max-width:620px){
    .navs{
        max-width:90%;
    }
}
.ccc{
    width:35px;
    height:35px;
    border-radius:100%;
    background:rgba(0,0,0,.5);
    margin:0px 4px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:rgba(229,115,115,1);
    box-shadow:inset 1px 1px 5px rgba(0,0,0,.3),inset -1px -1px 5px rgba(0,0,0,.3);
}
.navscr{
    max-height:600px;
    overflow-y:scroll;
}
</style>