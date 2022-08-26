import localProducts from '@/static/mock/products.json';
export const state = () => ({
  products: JSON.parse(localStorage.getItem('products')) || [],
  sortingMethod: '',
});
export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  ADD_PRODUCT(state, product) {
    if (!state.products.find(p => product.id === p.id)) {
      state.products = [...state.products, {
        id: product.id,
        image: product.link,
        name: product.name,
        description: product.description,
        price: product.price,
      }];
    }
  },
  REMOVE_PRODUCT(state, id) {
    state.products = state.products.filter(p => p.id !== id);
  },
  SAVE_PRODUCTS(state) {
    const parsedProducts = JSON.stringify(state.products);
    localStorage.setItem('products', parsedProducts);
  },
  SET_SORTING(state, payload) {
    state.sortingMethod = payload;
  },
}
export const getters = {
  getProducts: state => {
    return state.products;
  },
  getProductsByName: state => {
    return [...state.products].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if(nameA > nameB) {return 1;}
      if(nameA < nameB) {return -1;}
      return 0;
    });
  },
  getProductsByMinPrice: state => {
    return [...state.products].sort((a, b) => a.price - b.price);
  },
  getProductsByMaxPrice: state => {
    return [...state.products].sort((a, b) => b.price - a.price);
  },
  getSortingMethod: state => {
    return state.sortingMethod
  },
}

export const actions = {
  fetchProducts({ commit }) {
    // const products = await this.$axios.$get('/mock/products.json');
    commit('SET_PRODUCTS', localProducts);
    commit('SAVE_PRODUCTS');
  },
  addProduct({ commit }, product) {
    commit('ADD_PRODUCT', product);
    commit('SAVE_PRODUCTS');
  },
  removeProduct({ commit }, id) {
    commit('REMOVE_PRODUCT', id);
    commit('SAVE_PRODUCTS');
  },
  saveProducts({ commit }) {
    commit('SAVE_PRODUCTS');
  },
  setSortingMethod({ commit }, method) {
    commit('SET_SORTING', method);
  },
}

