<template>
  <div class="mainPage">
    <div class="mainPage__container">
      <header class='mainPage__header'>
        <h1 class="mainPage__title">Добавление товара</h1>
        <select
          v-model='selected'
          class='mainPage__select'
          @change='setNewSortingMethod'
        >
          <option value="">По умолчанию</option>
          <option>По цене min</option>
          <option>По цене max</option>
          <option>По наименованию</option>
        </select>
      </header>
      <div class="mainPage__block">
        <AddProductForm />
        <ProductsList />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ProductsList from '../components/ProductsList';
import AddProductForm from '../components/AddProductForm';
export default {
  name: 'IndexPage',
  components: { AddProductForm, ProductsList },
  data() {
    return {
      selected: '',
    };
  },
  mounted() {
    if(!localStorage.getItem('products')) {
      this.fetchProducts();
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'setSortingMethod']),
    setNewSortingMethod() {
      this.setSortingMethod(this.selected);
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
    padding: 16px 16px 16px 32px;
    max-width: 1440px;
    margin: 0 auto;
  }
  &__header {
    padding-right: 16px;
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
      gap: 8px;
    }
  }

  &__select {
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 0;
    padding: 10px 16px;
    appearance: none;
    overflow: hidden;
    background: url('../assets/images/select-arrow-down.svg') no-repeat calc(100% - 16px) center;
  }
}
</style>
