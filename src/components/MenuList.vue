<template>
<div class="bgg">

    <div class="q-pa-sm imgcc" style="display:flex;justify-content:center;">
        <div class="img-tray-outer">
            <div class="img-tray-inner">
             <img class="category-image" :src="'category_images/'+image"/>
            </div>
        </div>
    </div>

    <div style="min-width:100%;">
     <div class="title-cat">{{category}}</div>
     <div class="listxcont">
        <div class="listx" v-for="(item,i) in foods" :key="i" style="padding:10px;min-width:100%;display:grid;grid-template-rows:auto;grid-template-columns:30% 75%;justify-content:space-between;">
            <div style="display:flex;justify-content:flex-start;">
             <div class="outer-count">
             <div class="inner-count">{{i+1}}</div>
            </div>

            </div>
            <div class="food-info">
                <div>
                <div>{{item.name}}</div>
                <div v-if="item.size">{{item.size}}</div>
                <div class="btncc">
                <q-btn flat class="sb" @click="$emit('select',i,categoryIndex)" rounded><span>SELECT</span><q-icon name="add"/></q-btn>
                </div>
                </div>

                <div>Price {{new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN'}).format(item.price)}}</div>
            </div>
        </div>
     </div>
    </div>

</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:"MenuList",
    data:()=>({
    }),
    props:{
        foods:{datatype:Object, default:[]},
        category:{datatype:String , default:null},
        image:{datatype:String , default:null},
        categoryIndex:{datatype:Number, default:undefined}
    }
})
</script>

<style scoped>
.img-tray-outer{
     border-radius:100%;
    background:linear-gradient(45deg,rgba(229,115,115,1),rgba(255,215,64,1));
    padding:4px;
    box-shadow: 1px 1px 5px rgba(0,0,0,1), -1px -1px 5px rgba(0,0,0,1);
}
.img-tray-inner{
    border-radius:100%;
    background:linear-gradient(45deg,rgba(229,115,115,1),rgba(255,215,64,1));
    display:flex;
    justify-content:center;
    align-items:center;
    padding:6px;
    box-shadow: 3px 1px 15px rgba(255,255,255,.5), -3px -1px 15px rgba(255,255,255,.5);
}
@media screen and (min-width:640px){
    .img-tray-outer{
        width:260px;
        height:260px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .img-tray-inner{
        width:230px;
        height:230px;
    }
    .bgg{
        display:grid;
        grid-template-rows:auto;
        grid-template-columns:30% 60%;
        justify-content:space-between;
    }
    .title-cat{
        text-align:left;
    }
    .food-info{
        display:grid;
        grid-template-rows:auto;
        grid-template-columns:70% 20%;
        justify-content:center;
    }
}

@media screen and (max-width:620px){
    .img-tray-outer{
         width:200px;
        height:200px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .img-tray-inner{
         width:180px;
        height:180px;
    }
    .bgg{
       
    }
    .title-cat{
        text-align:center;
    }
    .imgcc{
        padding-top:2rem;
    }
    .listx{
        border-bottom:1.1px solid rgba(229,115,115,.6);
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
    }
    .listxcont{
        padding-bottom:1.2rem;
    }
}
.food-info{
    font-family:"martian";
    font-size:16px;
    color:rgba(255,255,255,.8);
}
.category-image{
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:100%;
}
.bgg{
    background:rgba(255,255,255,.08);
    margin-top:1rem;
    border-radius:25px;
}
.title-cat{
    overflow:break-word;
    font-size:25px;
    font-family:"rubik";
    padding-top:1rem;
    color:rgba(255,255,255,1);
    text-shadow:1px 1px rgb(0,0,0);
}
.outer-count{
    height:45px;
    width:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    border-radius:100%;
    background:rgba(229,115,115,1);
}
.inner-count{
    height:35px;
    width:35px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    font-family:"martian";
    color:white;
    border-radius:100%;
    box-shadow:inset 1px 1px 10px rgba(0,0,0,.5),inset -1px -1px 10px rgba(0,0,0,.5);
    background:rgba(229,115,115,1);
}
.btncc{
        margin:5px 0px;
        display:flex;
        justify-content:flex-end;
        padding-right:1rem;
}
.sb{
    background:hsla(0, 69%, 60%, 1);
    color:hsla(0, 69%, 80%, 1)
}
</style>