export default {
  // Добавить товар в корзину
  addCartProduct: ({ commit, state }, product) => {
    const result = JSON.parse(JSON.stringify(state.cartProducts));
    const productFind = result.find((item) => item.id === product.id);
    if (productFind) {
      ++productFind.quantity;
    } else {
      const cartProduct = JSON.parse(JSON.stringify(product));
      cartProduct.quantity = 1;
      result.push(cartProduct);
    }
    commit("SET_CART_PRODUCTS", result);
  },

  // Удалить товар из корзины
  deleteCartProduct: ({ commit, state }, product) => {
    const result = JSON.parse(JSON.stringify(state.cartProducts));
    const productFind = result.find((item) => item.id === product.id);
    if (productFind.quantity > 1) {
      productFind.quantity--;
    } else {
      result.splice(result.indexOf(productFind), 1);
    }
    commit("SET_CART_PRODUCTS", result);
  },

  // Удалить товар полностью из корзины
  removeCartProduct: ({ commit, state }, product) => {
    const result = JSON.parse(JSON.stringify(state.cartProducts));
    const productFind = result.find((item) => item.id === product.id);
    if (productFind) {
      result.splice(result.indexOf(productFind), 1);
    }
    commit("SET_CART_PRODUCTS", result);
  },

  // Сбросить все значения модуля авторизации
  reset: ({ commit }) => {
    commit("RESET");
  },
};
