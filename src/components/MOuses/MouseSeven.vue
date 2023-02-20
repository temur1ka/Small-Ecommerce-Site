<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="Mouses/Mouse6.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      </v-img>

      <v-card cols="12">
        <v-card-title
          >Redragon M602 Griffin RGB Gaming Mouse, RGB Spectrum Backlit 
          Ergonomic Mouse with 7<br> Programmable Backlight Modes up to 7200 DPI for Windows PC Gamers (White, Wired)</v-card-title
        >
        <div>
          <v-rating
            class="mx-3"
            readonly
            v-model="rating"
            size="sm"
            background-color="orange lighten-3"
            color="orange"
          ></v-rating>
        </div>

        <div class="mx-3">
          <span>In Stocks</span>
          <span class="text-red"> 2 left</span>
          <v-divider></v-divider>
          <span id="size">-20%</span>
          <span id="sizee"> <sup> $</sup>19.99</span>
          <h4>Purchase via Amazon</h4>
          <a href="https://www.amazon.com/dp/B07MR2XHY2/ref=syn_sd_onsite_desktop_24?ie=UTF8&pd_rd_plhdr=t&th=1">Link</a>
          
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Wired</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">Redragon</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">White</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              USB</span
            >

            <br />
            <span id="p">Special Feature</span>
            <span id="pa" class="mx-1"> Ergonomic Design</span>
            <br />
            <span id="p">Movement</span>
            <span id="pa" class="mx-8"> Optical</span>
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            WIRED GAMING MOUSE; built for Gaming Computers - Ergonomic Redragon M602-RGB “Griffin” RGB Backlit <br>
             Gaming PC Mouse up to 7200 DPI (user adjustable 800/1200/1600/2400/7200 DPI), 10G acceleration. The High-Precision <br>
             Sensor delivers Pinpoint Accuracy while the Gaming Grade Micro Switches ensure <br>
            longevity, greater durability and extreme responsiveness, giving you an even greater edge over your competition
          </li>
          <li>
            PC GAMING MOUSE COMPATIBILITY: Windows 10, Windows 8, Windows 7, Windows Vista,<br>
             or Windows XP, Limited Mac OS support Works well with all major Gaming Computers Brands and Gaming Laptops.
          </li>
          <li>
            ERGONOMIC GAMER MOUSE; Delivering an extremely comfortable and precise experience for Computer Games.
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
  