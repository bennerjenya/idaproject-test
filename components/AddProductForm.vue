<template>
  <form class='form' @submit.prevent>
    <div class='inputBox'>
      <label class='inputBox__label inputBox__label--required' for='productName'>Наименование товара</label>
      <input
        id='productName'
        v-model='product.name'
        class='inputBox__input'
        type='text'
        placeholder='Введите наименование товара'
        required
      >
    </div>
    <div class='textAreaBox'>
      <label class='textAreaBox__label'>Описание товара</label>
      <textarea
        id='productDescription'
        v-model='product.description'
        class='textAreaBox__input'
        placeholder='Введите описание товара'
      ></textarea>
    </div>
    <div class='inputBox'>
      <label class='inputBox__label inputBox__label--required' for='productLink'>Ссылка на изображени товара</label>
      <input
        id='productLink'
        v-model='product.link'
        class='inputBox__input'
        type='text'
        placeholder='Введите ссылку'
        required
      >
    </div>
    <div class='inputBox'>
      <label class='inputBox__label inputBox__label--required' for='productPrice'>Цена товара</label>
      <input
        id='productPrice'
        v-model='product.price'
        class='inputBox__input'
        type='number'
        placeholder='Введите цену'
        required
      >
    </div>
    <button class='btn' :disabled='checkOnFill' @click.prevent='createProductCard'>Добавить товар</button>
  </form>
</template>

<script>
export default {
  name: 'AddProductForm',
  data() {
    return {
      product: {
        name: '',
        description: '',
        link: '',
        price: ''
      }
    }
  },
  computed: {
    checkOnFill() {
      const {name, link, price} = this.product;
      return (name === '' || link === '' || price === '');
    }
  },
  methods: {
    createProductCard() {
      this.$emit('createProductCard', this.product)
      this.product = {
        name: '',
        description: '',
        link: '',
        price: ''
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  max-width: 332px;
  width: 100%;
  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.textAreaBox, .inputBox {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.inputBox {
  &__input {
    height: 36px;
    padding: 0 0 0 16px;
  }

  &__label {
    position: relative;
    width: fit-content;

    &--required {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -4px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #FF8484;
      }
    }
  }
}

.textAreaBox {
  &__input {
    padding: 10px 16px;
    width: 284px !important;
    height: 108px !important;
  }
}

.textAreaBox__input, .inputBox__input {
  box-sizing: border-box;
  width: 100%;

  background: #FFFEFB;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 0;

  &::placeholder {
    color: #B4B4B4;
  }
}

.btn {
  width: 100%;
  height: 36px;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  display: grid;
  place-content: center;
  border: 0;
  &:disabled {
    background: #EEEEEE;
    color: #B4B4B4;
  }
  &:not(:disabled) {
    background: #7BAE73;
    color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

textarea {
  resize: none;
}

textarea, textarea::placeholder, input, input::placeholder {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}
</style>
