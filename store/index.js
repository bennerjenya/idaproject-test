export const state = () => ({
  products: JSON.parse(localStorage.getItem('products')) || [],
})
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
}

export const actions = {
  addProduct({ commit, state }, product) {
    commit('ADD_PRODUCT', product);
    commit('SAVE_PRODUCTS', state.products);
  },
  removeProduct({ commit, state }, id) {
    commit('REMOVE_PRODUCT', id);
    commit('SAVE_PRODUCTS', state.products);
  },
  saveProducts({ commit, state }) {
    commit('SAVE_PRODUCTS', state.products);
  },
  setProducts({ commit, state }, products) {
    commit('SET_PRODUCTS', products);
    commit('SAVE_PRODUCTS', state.products);
  },
}

