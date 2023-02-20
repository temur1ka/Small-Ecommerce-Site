<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="HeadSets/HeadSet1.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      
      </v-img>
      <v-card cols="12">
        <v-card-title
          >Logitech G PRO X Gaming Headset - Blue VO!CE, Detachable Microphone,
           Comfortable <br />Memory Foam Ear Pads, DTS Headphone 7.1 and 50 mm PRO G Drivers, Official League<br /> of Legends Edition</v-card-title
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
          <span id="size">-54%</span>
          <span id="sizee"> <sup> $</sup>59.99</span>
          <h4>Purchase Via Amazon</h4>
          <a href="https://www.amazon.com/Logitech-PRO-Gaming-Headset-Comfortable/dp/B0943KKQJX/ref=sr_1_4?keywords=gaming%2Bheadsets&pd_rd_r=745a6081-98a6-4f40-aefc-3d8b399240d0&pd_rd_w=n7vLi&pd_rd_wg=3CcHc&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=25WY3NCF1P9D50486K63&qid=1673193705&sr=8-4&th=1">Link
            
          </a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Pro X Wired - League of Legends</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">Logitech </span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">Blue VO!CE</span>

            <br />
       
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            Designed to inspire, chosen for champions: Take your game to the next level with the proven engineering<br /> of the 2nd gen 
            Logitech G PRO X Gaming Headset, crafted to inspire League of Legends players
          </li>
          <li>
            Detachable microphone: Pro grade mic featuring real time Blue Voice technology, including noise reducer, <br />
            compressor, limiter and more for cleaner, professional sounding voice comms
          </li>
          <li>
            Surround sound headphones: Next gen 7.1
             and object based surround sound for greater in game positional, <br />distance, and object awareness during gameplay
          </li>
          <li>
            Clear, precise sound: Advanced PRO G 50 mm drivers deliver clear and precise sound imaging <br />
             with improved bass response; PRO designed EQ profiles available for download with Logitech G HUB software
          </li>
          
          <li>
            Built to last: This noise cancelling headset features durable aluminum forks and a steel headband,<br />
            ensuring the PC USB headset lasts through all of your gaming adventures
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
  