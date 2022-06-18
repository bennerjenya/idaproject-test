<template>
  <form class="form" @submit.prevent>
    <div class="inputBox">
      <label class="inputBox__label inputBox__label--required" for="productName"
        >Наименование товара</label
      >
      <input
        id="productName"
        v-model="product.name"
        class="inputBox__input"
        :class="{'inputBox__input--invalid': $v.product.name.$error}"
        type="text"
        placeholder="Введите наименование товара"
        required
        @input='$v.product.name.$touch()'
      />
      <span>Поле является обязательным</span>
    </div>
    <div class="textAreaBox">
      <label class="textAreaBox__label">Описание товара</label>
      <textarea
        id="productDescription"
        v-model="product.description"
        class="textAreaBox__input"
        placeholder="Введите описание товара"
      ></textarea>
    </div>
    <div class="inputBox">
      <label class="inputBox__label inputBox__label--required" for="productLink"
        >Ссылка на изображени товара</label
      >
      <input
        id="productLink"
        v-model="product.link"
        class="inputBox__input"
        :class="{'inputBox__input--invalid': $v.product.link.$error}"
        type="text"
        placeholder="Введите ссылку"
        required
        @input='$v.product.link.$touch()'
      />
      <span>Поле является обязательным</span>
    </div>
    <div class="inputBox">
      <label
        class="inputBox__label inputBox__label--required"
        for="productPrice"
        >Цена товара</label
      >
      <input
        id="productPrice"
        v-model.number="product.price"
        class="inputBox__input"
        :class="{'inputBox__input--invalid': $v.product.price.$error}"
        placeholder="Введите цену"
        required
        @input='$v.product.price.$touch()'
      />
      <span>Поле является обязательным</span>
    </div>
    <button
      class="btn"
      :disabled='$v.$invalid'
      @click.prevent="createProductCard"
    >
      Добавить товар
    </button>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: 'AddProductForm',
  data() {
    return {
      product: {
        name: '',
        description: '',
        link: '',
        price: '',
      },
    }
  },
  methods: {
    createProductCard() {
      this.product.id = Date.now();
      this.$emit('createProductCard', this.product);
      this.product = {
        name: '',
        description: '',
        link: '',
        price: '',
      };
      this.$v.$reset();
    },
  },
  validations: {
    product: {
      name: { required },
      link: { required },
      price: { required },
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  position: sticky;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  max-width: 332px;
  width: 100%;
  background: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  height: fit-content;
}

.textAreaBox,
.inputBox {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.inputBox {
  position: relative;
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
        background-color: #ff8484;
      }
    }
  }
  & span {
    opacity: 0;
    visibility: hidden;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #ff8484;
    position: absolute;
    bottom: -14px;
    left: 0;
  }
}

.textAreaBox {
  &__input {
    padding: 10px 16px;
    width: 284px !important;
    height: 108px !important;
  }
}

.textAreaBox__input,
.inputBox__input {
  box-sizing: border-box;
  width: 100%;

  background: #fffefb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 0;
  &--invalid {
    border: 1px solid #ff8484;
    & ~ span {
      opacity: 1;
      visibility: visible;
    }
  }
  &::placeholder {
    color: #b4b4b4;
  }
}

.btn {
  width: 100%;
  height: 36px;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  display: grid;
  place-content: center;
  border: 0;
  &:disabled {
    background: #eeeeee;
    color: #b4b4b4;
  }
  &:not(:disabled) {
    background: #7bae73;
    color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}


textarea {
  resize: none;
}

textarea,
textarea::placeholder,
input,
input::placeholder {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}
</style>
