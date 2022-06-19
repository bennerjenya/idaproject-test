<template>
  <div class="mainPage">
    <div class="mainPage__container">
      <header class='mainPage__header'>
        <h1 class="mainPage__title">Добавление товара</h1>
        <select v-model='selected'>
          <option value="">По умолчанию</option>
          <option>По цене min</option>
          <option>По цене max</option>
          <option>По наименованию</option>
        </select>
      </header>
      <div class="mainPage__block">
        <AddProductForm @createProductCard="pushProductCard" />
        <ProductsList :products="products" @remove="removeProductFromList" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import ProductsList from '../components/ProductsList';
import AddProductForm from '../components/AddProductForm';
export default {
  name: 'IndexPage',
  components: { AddProductForm, ProductsList },
  data() {
    return {
      selected: '',
    }
  },
  computed: {
    ...mapGetters(['getProducts', 'getProductsByMinPrice', 'getProductsByMaxPrice', 'getProductsByName']),
    products() {
      let products;

      this.selected === 'По наименованию' ? products = this.getProductsByName
        : (this.selected === 'По цене min' ? products = this.getProductsByMinPrice
          : (this.selected === 'По цене max' ? products = this.getProductsByMaxPrice
            : products = this.getProducts));

      return products;
    }
  },
  mounted() {
    if(!localStorage.getItem('products')) {
      this.setProductsToStore();
    }
  },
  methods: {
    ...mapActions([
      'addProduct',
      'removeProduct',
      'saveProducts',
      'setProducts'
    ]),
    pushProductCard(newProduct) {
      this.addProduct(newProduct);
      this.saveProducts(this.getProducts);
    },
    removeProductFromList(id) {
      this.removeProduct(id);
      this.saveProducts(this.getProducts);
    },
    async setProductsToStore() {
      const products = await this.$axios.$get('/mock/products.json');
      this.saveProducts(products);
      this.setProducts(products);
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
