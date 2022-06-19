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
  SAVE_PRODUCTS(state, products) {
    const parsedProducts = JSON.stringify(products);
    localStorage.setItem('products', parsedProducts);
  },
}
export const getters = {
  getProducts: state => {
    return state.products;
  },
  getProductsByName: state => {
    return state.products.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  },
}

export const actions = {
  addProduct({ commit }, product) {
    commit('ADD_PRODUCT', product);
  },
  removeProduct({ commit }, id) {
    commit('REMOVE_PRODUCT', id);
  },
}

