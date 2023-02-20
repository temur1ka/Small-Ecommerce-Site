<template>
    
    <v-dialog v-model="dialogg" scrollable>
      <template v-slot:activator="{ props }">
        <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>    
        </template>

      <div class="d-flex">
        <v-img
          src="computer/headpone.png"
          max-width="750"
          max-height="650"
          cover
        >
        </v-img>

        <v-card cols="12">
          <v-card-title
            >SteelSeries Aerox 3 Wireless - Super Light Gaming Mouse -
            <br />18,000 CPI TrueMove Air Optical Sensor - Ultra-lightweight
            68g Water Resistant Design</v-card-title
          >
          <div>
            <v-rating
              class="mx-3"
              v-model="rating"
              size="sm"
              background-color="orange lighten-3"
              color="orange"
            ></v-rating>
          </div>

          <div class="mx-3">
            <span>In Stocks</span>
            <span class="text-red"> 35 left</span>
            <v-divider></v-divider>
            <span id="size">-30%</span>
            <span id="sizee"> <sup> $</sup>15</span>
            <v-divider></v-divider>
            <p>Style:</p>
            <h4>Wireless</h4>
            <v-divider></v-divider>

            <div>
              <span id="p">Brand</span>
              <span id="pa" class="mx-16">SteelSeries</span>
              <br />
              <span id="p">Color</span>
              <span id="pa" class="mx-16">Onyx</span>

              <br />
              <span id="p">Connectivity</span>
              <span id="pa" class="mx-5">
                Bluetooth, USB, 2.4GHz Wireless</span
              >

              <br />
              <span id="p">Special Feature</span>
              <span id="pa" class="mx-1"> Wireless</span>
            </div>
          </div>
          <div class="my-6 mx-3">
            <h4>About this item</h4>

            <li>
              68g Ultra Lightweight - When quick movements and large swipes
              matter, Aerox 3s super light design allows for
              <br />
              faster and more accurate reaction times in game.
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
