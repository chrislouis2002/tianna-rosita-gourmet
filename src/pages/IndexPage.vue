<template>
  <div id="body">

    <div id="header-section" class="q-pa-sm">
      <div class="logobx"><img src="logo.png" id="logo"/></div>
      <div id="menu">MENU</div>
      <!--<div id="logo-box">
        <div class="logo-box-ch">
          <div class="circle">
          <div class="circle-child"></div>
          </div>
          <img src="logo.png" id="logo"/>
          <img src="cafe.png" id="cafe"/>
        </div>
      </div>

      <div class="blend"></div>

      <div id="info-box">
      <div class="t">Tiannas Treats</div>
      <div class="t" id="menu">MENU</div>
      </div>-->

    </div>

    <div style="display:flex;flex-flow:row nowrap;justify-content:center;">
      <div class="intro-pics"><img class="intimg" src="intro_pics/3.jpg"/></div>
      <div class="intro-pics"><img class="intimg" src="intro_pics/4.jpg"/></div>
      <div class="intro-pics"><img class="intimg" src="intro_pics/16.jpg"/></div>
    </div>

    <div class="q-ma-sm">
    <MenuList 
      v-for="(item,index) in store.menu" 
      :key="index"
      :foods="item.items"
      :category="item.name"
      :image="item.category_image"
      :categoryIndex="index"
      @select="select"
      />
    </div>

    <div @click.stop="cart_list=true" v-if="cart.length" style="position:fixed;" class="cart-outer">
    <div class="cart-inner">
    <img src="13.png" style="width:100%;height:100%;object-fit:cover;border-radius:100%;"/>
    </div>
    <span class="cart-count">{{cart.length}}</span>
    </div>

    <!--FIRST FOOTER-->
    <FirstFooter/>
    <!--FIRST FOOTER-->

    <!--LAST-FOOTER-->
    <LastFooter/>
    <!--LAST FOOTER-->

    <q-dialog v-model="cart_list" persistent>
    <q-card class="cartm">
      <div style="margin-bottom:2.5rem;padding:5px 5px;"><q-btn @click.stop="cart_list=false" flat class="float-right bg-red-2 text-red" fab-mini><q-icon name="close"/></q-btn></div>
      <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 400px; max-width: 450px;"
      >
      <div class="listx" v-for="(item,i) in cart" :key="i" style="position:relative;padding:10px;min-width:100%;display:grid;grid-template-rows:auto;grid-template-columns:30% 75%;justify-content:space-between;">
            <div style="display:flex;justify-content:flex-start;">
             <div class="outer-countindex">
             <div class="inner-countindex">{{i+1}}</div>
            </div>

            </div>
            <div class="food-infoindex text-white">
                <div>
                <div>{{item.name}}</div>
                <div v-if="item.size" style="font-family:'rubik'">{{item.size}}</div>
                </div>
                <q-btn style="position:absolute;right:.5rem;top:1.5rem;" @click.stop="cart.splice(i,1)" flat class=" bg-transparent text-red" fab-mini><q-icon name="close"/></q-btn>
                <div>Price {{new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN'}).format(item.price)}}</div>
            </div>
        </div>
    </q-scroll-area>
    </q-card>
    </q-dialog>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import MenuList from "components/MenuList.vue"
import LastFooter from "components/LastFooter.vue"
import FirstFooter from "components/FirstFooter.vue"
import { useMenu } from "stores/menus"
export default defineComponent({
  setup(){
    const store = useMenu()
    return { store }
  },
  name: 'IndexPage',
  data:()=>({
    cart:[],
    cart_list:false
  }),
  methods:{
    select(index,category){
      this.cart.push(this.store.menu[category].items[index])
    }
  },
  components:{
    MenuList,
    LastFooter,
    FirstFooter
  },
})
</script>

<style lang="scss">
@font-face { 
  font-family:"martian"; 
	 src: url('Martian_Mono/MartianMono-VariableFont_wdth.ttf');      
} 

@font-face { 
  font-family:"rubik"; 
	 src: url('Rubik_Spray_Paint/RubikSprayPaint-Regular.ttf');      
} 
.cartm{
     background:rgba(0,0,0,.7);
     border-radius:25px;
  }
.cart-count{
  font-family:"rubik";
  font-size:20px;
  transform:translate(-30px ,-20px);
  color:rgba(0,0,0,1);
}
  #body{
    background:rgba(0,0,0,.8);
    background-image:url('https://capable-blini-cb030f.netlify.app/6.png');
    background-repeat:no-repeat;
    min-width:100%;
    min-height:100vh;
    position:relative;
    overflow:hidden;
  }
  .intro-pics{
     border:5px solid;
     border-width:5px;
     border-image:linear-gradient(45deg,rgba(229,115,115,1),rgba(255,215,64,1)) 1;
   }

  @media screen and (min-width:640px){
    .logo-box-ch{
      
    }
    #body{
      background-size:100vw 100vh;
    }

    #info-box{
    font-size:4rem;
    position:relative;
   }
   .intro-pics{
     width:100px;
     height:100px;
     margin:1rem .5rem;
   }
   .cartm{
     max-width:600px;
     min-width:350px;
     padding:3px;
   }
   .food-infoindex{
     font-size:10px;
   }
   .logobx{
     width:250px;
     height:250px;
   }
   #logo{
     width:100%;
     height:100%;
     object-fit:contain;
   }
  }

  #info-box{
    color:white;
    text-align:center;
    font-family:"martian";
    text-shadow:1.5px 1.5px rgba(0,0,0,.4);
  }
  @media screen and (max-width:620px){
    .logobx{
     width:250px;
     height:250px;
   }
   #logo{
     width:100%;
     height:100%;
     object-fit:contain;
   }
    #info-box{
    font-size:1.8rem;
   }
   .blend{
     display:none;
   }
   .intro-pics{
     width:90px;
     height:90px;
     margin:0px 5px;
   }
   .cartm{
     width:100%;
     padding:3px;
   }
   #body{
     background-attachment: fixed;
     background-position: center;
   }
  }
  #menu{
    font-family:"rubik";
    text-align:center;
    color:white;
    font-size:40px;
  }
  .blend{
    position:absolute;
    width:800px;
    height:800px;
    background:linear-gradient(45deg,rgba(229,115,115,.1),rgba(255,215,64,.1));
    top:-520px;
    right:-50px;
    border-bottom-left-radius:50%;
    transition:width 2s;
  }
  .intimg{
    object-fit:fill;
    width:100%;
    height:100%;
  }
  .cart-outer{
    width:80px;
    height:80px;
    background:rgba(255,255,255,1);
    border-radius:100%;
    top:3rem;
    right:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow: 1px 1px 20px rgba(0,0,0,.5), -1px -1px 20px rgba(0,0,0,.5);
  }
  .cart-inner{
    width:60px;
    height:60px;
    background:rgba(0,0,0,.1);
    border-radius:100%;
    box-shadow: 1px 1px 10px rgba(0,0,0,.2), -1px -1px 10px rgba(0,0,0,.2);
  }
  .outer-countindex{
    height:35px;
    width:35px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:16px;
    border-radius:100%;
    background:rgba(229,115,115,1);
}
.inner-countindex{
    height:25px;
    width:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:16px;
    font-family:"martian";
    color:white;
    border-radius:100%;
    box-shadow:inset 1px 1px 10px rgba(0,0,0,.5),inset -1px -1px 10px rgba(0,0,0,.5);
    background:rgba(229,115,115,1);
}
.food-infoindex{
    font-family:"martian";
    font-size:16px;
    color:rgba(255,255,255,.8);
}

.listx{
        border-bottom:1.1px solid rgba(229,115,115,.6);
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
}
#header-section{
  display:grid;
  grid-template-rows:auto auto;
  grid-template-columns:auto;
  grid-row-gap:1rem;
  justify-content:center;

}
</style>
