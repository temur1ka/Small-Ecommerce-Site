<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="HeadSets/HeadSet7.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      
      </v-img>
      <v-card cols="12">
        <v-card-title
          >targeal 7.1 Surround Sound Gaming Headset for PS5, PS4, Switch, PC, Laptop, Tablet, Mobile Phone <br>
        - USB Wired Gamer Headphone with Noise Canceling Mic - 4 Modes RGB - White Headset <br />with C Cable</v-card-title
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
          <span class="text-red"> 7 left</span>
          <h4>Purchase Via Amazon</h4>
          <a href="https://www.amazon.com/Targeal-Surround-Gaming-Headset-Switch/dp/B09PD1MW8X/ref=d_pb_rfob_btf_desktop_sccl_2_7/146-7794941-9800038?pd_rd_w=ipgoH&content-id=amzn1.sym.352a669b-c257-47ce-abc1-05c606609da4&pf_rd_p=352a669b-c257-47ce-abc1-05c606609da4&pf_rd_r=61BWMCP7CB0C4ETBFM3E&pd_rd_wg=wI6nK&pd_rd_r=3b7f4f68-0e35-41da-a962-e01659bdbe15&pd_rd_i=B09PD1MW8X&th=1">Link</a>
          <v-divider></v-divider>
          
          <span id="sizee"> <sup> $</sup>37.99</span>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>USB A/C</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">targeal</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">White</span>
            <br />
            <span id="p">Form Factor</span>
            <span id="pa" class="mx-6">Over Ear</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              Wired</span
            >

            <br />
            <span id="p">Special Feature</span>
            <span id="pa" class="mx-1"> Foldable</span>
            <br />
            <span id="p">Movement</span>
            <span id="pa" class="mx-8"> Optical</span>
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            Trip Into Metaverse: The deep thunder peal on peal afar, the cannon's opening roar nearby; footsteps rouse, firing pin hits, echoes of<br /> burst surrounded; wearing Targeal
             Null-916 gaming headset, uncovers the rich details of every sound, the ultimate<br /> immersed listening experience will launch you a grand scene of game world, with previously unheard texture and accuracy.
          </li>
          <li>
          Noise Isolation Microphone: Flexible design microphone with omnidirectional noise canceling tech help to<br /> reduce distracting background noise, filter out most of the noise in the environment,
         pick up <br /> your voice with great sensitivity, ensure your gaming chat clear and smoothly.
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
  