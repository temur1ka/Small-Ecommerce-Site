<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="HeadSets/HeadSet10.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      
      </v-img>
      <v-card cols="12">
        <v-card-title
          >Gaming Headset PS4 Headset, Xbox Headset with 7.1 Surround Sound, Gaming Headphones with 
           <br />Noise Cancelling Flexible Mic RGB Light Memory Earmuffs for PC,PS5,PS4,Xbox Series X/S,<br /> Xbox one,Switch</v-card-title
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
          <span class="text-red"> 50 left</span>
          <v-divider></v-divider>
          <span id="size">-21%</span>
          <span id="sizee"> <sup> $</sup>25.95</span>
          <h4>Purchase Via Amazon</h4>
          <a href="https://www.amazon.com/Surround-Headphones-Cancelling-Flexible-Earmuffs/dp/B09TB15CTL/ref=sr_1_21?content-id=amzn1.sym.7d1cec21-d5cf-4aa0-b55a-3303ecdebc2b%3Aamzn1.sym.7d1cec21-d5cf-4aa0-b55a-3303ecdebc2b&keywords=Gaming%2Bheadsets%2Bwith%2Bmicrophone&pd_rd_r=c00286e0-991c-4ca4-bc35-04a882a195f9&pd_rd_w=cGPnQ&pd_rd_wg=MMdzz&pf_rd_p=7d1cec21-d5cf-4aa0-b55a-3303ecdebc2b&pf_rd_r=RBDGRMCFXEYQNKDBRNP8&qid=1673195152&sr=8-21&th=1">Link</a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Modern</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">Ozeino</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16"> White</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              Wired</span
            >

            <br />
            <span id="p">Model Name</span>
            <span id="pa" class="mx-6"> ZW1</span>
            
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            🎧Superb 7.1 Surround Sound: Featuring a high-precision 50mm magnetic neodymium driver<br />
             to create an immersive gaming experience with stereo surround sound in gaming headset for incredibly realistic sound.
          </li>
          <li>🎧Noise-Cancelling Microphone: 360° omnidirectionally rotatable sensitive microphone,<br />
             premium noise cancellation, sound localisation, reduces distracting background noise, to collect your voice clearly.</li>
          <li>🎧Multi-Platform Compatibility: This gaming headset support PS5, PS4, New Xbox One, Xbox Series X/S, Switch, PC,<br /> Laptop, iOS, Mobile Phone and other devices with 3.5mm jack.
             Please note you need an extra Microsoft Adapter (Not Included)<br />
              when connect with an old version Xbox One controller.</li>
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
  