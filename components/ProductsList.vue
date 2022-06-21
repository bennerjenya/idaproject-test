<template>
  <transition-group ref='productsList' tag='div' name='fade' class="list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </transition-group>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductItem from './ProductItem';

export default {
  name: 'ProductsList',
  components: { ProductItem },
  computed: {
    ...mapGetters([
      'getProducts',
      'getProductsByMinPrice',
      'getProductsByMaxPrice',
      'getProductsByName',
      'getSortingMethod'
    ]),
    products() {
      let products;

      this.getSortingMethod === 'По наименованию' ? products = this.getProductsByName
        : (this.getSortingMethod === 'По цене min' ? products = this.getProductsByMinPrice
          : (this.getSortingMethod === 'По цене max' ? products = this.getProductsByMaxPrice
            : products = this.getProducts));

      return products;
    },
  },
}
</script>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: 1fr;
  padding: 8px 16px 16px 8px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
