<template>
<div class="contft">
    <div>
        <div class="felem">
            <div class="imgbxf"><img class="imgf" src="whatsapp.svg"/></div>
            <div class="imgbxf"><img class="imgf" src="call.svg"/></div>
            <div class="text-white">07069637571,08129691245</div>
        </div>

        <div class="text-white q-pa-xs" style="font-size:11px;display:inline-flex;justify-content:center;align-items:center;">
        <q-icon name="pin_drop" size="20px"/>
        <span>Along Ekweme Square Road,  close to X-Fit, opposite Cliniix, Aroma, Awka</span>
        </div>
    </div>
</div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({

    name:"LastFooter",

    data:()=>({

    }),
    methods:{

    }
})
</script>

<style scoped>
.contft{
    border-top:5px solid rgba(229,115,115,1);
}
.felem{
    display:flex;
    flex-direction:row nowrap;
    justify-content:center;
    align-items:center;
    background:rgba(229,115,115,.5);
}
.imgbxf{
    width:32px;
    height:32px;
}
.imgf{
   width:100%;
   height:auto;
}
</style>