<template>
<div>
  <h1> Your Cart </h1>
  <ProductList :products="cart" />
  <div class="product" v-for="product in this.$root.$data.cart" :key="product.id">
    <div class="info">
      <h1>{{product.name}}</h1>
      <p>{{product.country}}</p>
    </div>
    <div class="image">
      <img :src="'/images/products/'+product.image">
    </div>
    <div class="price">
      <h2>{{product.price}}</h2>
      <button class="auto" @click= "removeFromCart(product)">Remove Item</button>
    </div>

  </div>

  <div v-if="emptyCart">
    <h1>The Cart is Empty, go put more stuff in.</h1>

  </div>

</div>
</template>


<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Cart',
  components: {
    ProductList
  },
  data() {
    return {
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
  methods: {
    removeFromCart(product) {
      ///make need to find the index using a for loop.
      var i;
      for (i = 0; i < this.$root.$data.cart.length; i++) {
        if (this.$root.$data.cart[i] == product) {
          this.$root.$data.cart.splice(product,1)
        }

      }
    }
  }
}
</script>
