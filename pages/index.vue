<template>
  <div class="mainPage">
    <div class="mainPage__container">
      <header class='mainPage__header'>
        <h1 class="mainPage__title">Добавление товара</h1>
        <select v-model='selected' @change='sortProducts'>
          <option value="">По умолчанию</option>
          <option>По цене min</option>
          <option>По цене max</option>
          <option>По наименованию</option>
        </select>
      </header>
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
  data() {
    return {
      selected: '',
      products: [],
    }
  },
  mounted() {
    if(!localStorage.getItem('products')) {
      this.setProducts();
    }
    this.products = this.$store.getters.getProducts;
  },
  methods: {
    sortProducts() {
      switch (this.selected) {
        case 'По наименованию':
          return this.products.sort((a, b) => (b.name > a.name ? 1 : -1));
        case 'По цене min':
          return this.products.sort((a, b) => (a.price - b.price));
        case 'По цене max':
          return this.products.sort((a, b) => (a.price + b.price));
        default:
          return this.products;
      }
    },
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
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
