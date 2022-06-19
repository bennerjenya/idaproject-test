<template>
  <transition-group tag='div' name='fade' class="list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @remove="$emit('remove', product.id)"
    />
  </transition-group>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  name: 'ProductsList',
  components: { ProductItem },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: 1fr;
  padding: 8px 0 0;
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
