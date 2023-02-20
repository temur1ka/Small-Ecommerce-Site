<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="HeadSets/HeadSet3.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      
      </v-img>
      <v-card cols="12">
        <v-card-title
          >NUBWO G06 Wireless Gaming Headset with Microphone for PS5, PS4, PC, Mac, 3-in-1 Gamer <br />Headphones with Mic, 
           2.4GHz Wireless for Playstation Console, Bluetooth Mode for Switch,<br /> Wired Mode for Controller</v-card-title
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
          <span id="size">-38%</span>
          <span id="sizee"> <sup> $</sup>49.99</span>
          <h4>Purchase Via Amazon</h4>
          <a href="https://www.amazon.com/Microphone-PC-Headphones-Playstation-Bluetooth-Controller/dp/B08TBF4S42/ref=sr_1_7?keywords=gaming%2Bheadsets&pd_rd_r=745a6081-98a6-4f40-aefc-3d8b399240d0&pd_rd_w=n7vLi&pd_rd_wg=3CcHc&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=25WY3NCF1P9D50486K63&qid=1673193705&sr=8-7&th=1">Link</a>
          <v-divider></v-divider>
          
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">NUBWO</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">Orange</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              Wireless</span
            >

            <br />
            <span id="p">Form Factor</span>
            <span id="pa" class="mx-5"> Over Ear</span>
            
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            Ultimate In-game Sounds - Wireless gaming headset for PS5, PS4 get immersed in stereo audio <br />
            experience provided by 50mm driver and 2 double chamber drivers. Hear every sound all over the game.
          </li>
          <li>
            2.4GHz wireless connectivity - lossless wireless connectivity via USB dongle for consoles <br />
            (PS5, PS4, PlayStation 4, PlayStation 5) and PCs.
          </li>
          
          <li>
            Bluetooth connectivity - Low latency Bluetooth mode for switches and mobile devices (phones, pads). <br />Watch videos and listen to music in a flow. 
             (With the headset on, quickly press the power button 3 times to enter Bluetooth mode)
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
  