<template>
  <div class="mainPage">
    <div class="mainPage__container">
      <h1 class="mainPage__title">Добавление товара</h1>
      <div class="mainPage__block">
        <AddProductForm @createProductCard="pushProductCard" />
        <ProductsList :products="products" @remove="removeProduct" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList'
import AddProductForm from '../components/AddProductForm'
export default {
  name: 'IndexPage',
  components: { AddProductForm, ProductsList },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  mounted() {
    if(!localStorage.getItem('products')) {
      this.setProducts();
    }
  },
  methods: {
    pushProductCard(newProduct) {
      this.$store.dispatch('addProduct', newProduct);
      this.$store.commit('SAVE_PRODUCTS', this.products);
    },
    removeProduct(id) {
      this.$store.dispatch('removeProduct', id);
      this.$store.commit('SAVE_PRODUCTS', this.products);
    },
    async setProducts() {
      const products = await this.$axios.$get('/mock/products.json');
      this.$store.commit('SET_PRODUCTS', products);
      this.$store.commit('SAVE_PRODUCTS', products);
      console.log('done');
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.mainPage {
  font-family: 'Sourse Sans Pro', sans-serif;

  &__container {
    padding: 15px;
  }

  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin: 32px 0 16px;
    color: #3f3f3f;
  }

  &__block {
    @media (min-width: 1024px) {
      display: flex;
      gap: 16px;
    }
  }
}
</style>
