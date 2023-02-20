<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="HeadSets/HeadSetBrah.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      
      </v-img>
      <v-card cols="12">
        <v-card-title
          >FEIYING Gaming Headset with Microphone, Gaming Headphones Stereo 7.1 Surround <br />Sound PS4 Headset 50mm Drivers,
           3.5mm Audio Jack Over Ear Headphones Wired<br />
            for PC Switch Playstation Xbox PS5 Laptop</v-card-title
        >
        <div>
          <v-rating
          readonly
            class="mx-3"
            v-model="rating"
            size="sm"
            background-color="orange lighten-3"
            color="orange"
          ></v-rating>
        </div>

        <div class="mx-3">
          <span>In Stocks</span>
          <span class="text-red"> 30+ left</span>
          <v-divider></v-divider>
          <span id="size">-23%</span>
          <span id="sizee"> <sup> $</sup>21.99</span>
          <h4>Purchase Via Amazon</h4>
          <a href="https://www.amazon.com/Headset-Microphone-Headphones-Surround-Playstation/dp/B09XJVXDGL/ref=sr_1_13?keywords=gaming%2Bheadsets&pd_rd_r=745a6081-98a6-4f40-aefc-3d8b399240d0&pd_rd_w=n7vLi&pd_rd_wg=3CcHc&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=25WY3NCF1P9D50486K63&qid=1673193705&sr=8-13&th=1">Link</a>
          <v-divider></v-divider>
          
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">FEIYING</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">Camo RGB</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              Wired</span
            >

            <br />
            <span id="p">Form Factor</span>
            <span id="pa" class="mx-6"> Over Ear</span>
            <br />
            <span id="p">Age Range</span>
            <span id="pa" class="mx-8"> Adult</span>
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            Born for Gaming - High-intensity magnetic neodymium driver in this gaming headset provides incredible surround<br /> sound for games and musics. 
            No matter playing shooter, role-playing or racing game, you will 
            enjoy immersive <br />and vivid sound with this excellent gaming headphones.
          </li>
          <li>
            6-Color LED Light - 6 colors LED in turn on the ps5 headset lets you enjoy cool RGB gaming experience. FEIYING Service - All product<br />
             branded FEIYING enjoys 1-year warranty. You could feel free to contact us if you meet any problem.
          </li>
          
        </div>
      </v-card>
    </div>
  </v-dialog>
       
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        dialogg: false,
        rating: 4,
        dialogm1: "",
      };
    },
  };
  </script>
  
  <style scoped>
  .v-dialog {
    overflow-y: visible;
  }
  #size {
    font-size: 2rem;
    font-weight: 200;
    color: rgb(247, 3, 3);
  }
  #sizee {
    font-size: 2rem;
    font-weight: 400;
  }
  #p {
    font-size: 13px;
    font-weight: 600;
  }
  </style>
  