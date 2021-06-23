<template>
<div>
  <h1> Outcome of the game! </h1>
  <p> Here are the results... </p>
  <p> {{cart[0].name}} is going to take the shot </p>
  <p> He gets the pass from {{cart[1].name}}</p>
  <p> He chooses to go for a {{this.$root.$data.shot}} </p>
  <p v-if="description">{{description}}</p>




  <h1> Roster: </h1>
  <p> if you'd like to try again you can remove the one or all of the players and restart </p>
  <p> Just remember you can only play with 5 players at a time. No more no less. (just like in a real game) </p>
  <div class="product" v-for="player in this.$root.$data.cart" :key="player.id">

    <div class="info">
      <p>{{player.name}}</p>
      <button class="auto" @click= "removeFromCart(player)">Remove from Roster</button>
    </div>
  </div>

</div>

</template>

<!--
<div>
  <h1> Confirm Choices </h1>
  <PlayerList :players="cart" />
  <div class="product" v-for="player in this.$root.$data.cart" :key="player.id">
    <div class="info">
      <h1>{{player.name}}</h1>
      <p>{{player.country}}</p>

    </div>
    <div class="image">
      <img :src="'/images/products/'+product.image">
    </div>
    <div class="price">
      <h2>{{player.price}}</h2>
      <button class="auto" @click= "removeFromCart(player)">Remove from Roster</button>
    </div>
  </div>
  <h2> What shot did you select? </h2>
  <ShotData :shotdata="bucket" />
  <div class="shot" v-for="shot in this.$root.$data.bucket" :key="shot.id">
    <div class="info">
      <h1>{{shot.name}}</h1>
    </div>
  </div>

  <div v-if="emptyCart">
    <h1>The Cart is Empty, go put more stuff in.</h1>

  </div>

</div>
</template>
-->


<script>

export default {
  name: 'Cart',
  components: {
  },
  data() {
    return {
      description: null
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
    emptyCart() {
      if (this.$root.$data.cart.length == 0) {
        return true
      }
      else {
        return false
      }
    }
  },
  created() {
  console.log("attempting")
    if (this.$root.$data.cart && this.$root.$data.cart.length == 5) {
    console.log("step 1")
      if (this.$root.$data.cart[0].clout > 2) {
        this.description = "YOU MADE THE SHOT! YOU WIN!!!"
        console.log("step 2")
      }
      else {
        this.description = "YOU MISSED... YOU LOSE!!!"
      }
    }
  },
  methods: {
    removeFromCart(player) {
      ///make need to find the index using a for loop.
      var i;
      for (i = 0; i < this.$root.$data.cart.length; i++) {
        if (this.$root.$data.cart[i] == player) {
          this.$root.$data.cart.splice(player,1)
        }

      }
    }
  }
}


</script>
