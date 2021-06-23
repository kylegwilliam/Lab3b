<template>
<div class="wrapper">
  <div class="products">
    <div class="players" v-for="player in players" :key="player.id">
      <div class="info">
        <h1>{{player.name}}</h1>
        <p>{{player.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+player.image">
      </div>
      <div class="price">
        <h2>{{player.price}}</h2>
        <button class="auto" @click="addToCart(player)">Add to My Team</button>

      </div>
    </div>
    <div class="shotdata" v-for="shot in shotdata" :key="shot.id">
      <div class="info">
        <h3>{{shot.name}}</h3>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayerList',
  props: {
    players: Array,
    shotdata: Array,
  },
  methods: {
    addToCart(player) {
      this.$root.$data.cart.push(player)
    },
    addShotToCart(shot){
      this.$root.$data.bucket.push(shot)
    }
  }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: center;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #4945D6;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #26661A;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
