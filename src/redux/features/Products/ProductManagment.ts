import { createSlice } from "@reduxjs/toolkit";

type Tproduct = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};
type TInitialState = {
  products: Tproduct[];
  total: number;
  totalQuantity: number;
  address: string;
};

const initialState: TInitialState = {
  products: [],
  total: 0,
  totalQuantity: 0,
  address: "",
};

const ProductManage = createSlice({
  name: "products",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const { productId } = action.payload;
      const findProduct = state.products.find((item) => item.productId === productId);
      if (findProduct) {
        findProduct.quantity = findProduct?.quantity + 1;
      } else {
        state.products.push(action.payload);}
      state.total = selectTotalPrice(state);
      state.totalQuantity = totalQuantityAdd(state);
    },
    removeCart: (state, action) => {
      const  productId  = action.payload;
      const findProduct = state.products.filter((item) => item.productId !== productId);
      state.products = findProduct;
      state.total = selectTotalPrice(state);
      state.totalQuantity = totalQuantityAdd(state);
    },
    updateQuantity: (state, action) => {
      const  productId  = action.payload;
      const findProduct = state.products.find((item) => item.productId === productId);
      if (findProduct) {
        findProduct.quantity = findProduct?.quantity + 1;
      }
      state.total = selectTotalPrice(state);
      state.totalQuantity = totalQuantityAdd(state);
    },
    minusQuantity: (state, action) => {
      const  productId  = action.payload;
      const findProduct = state.products.find((item) => item.productId === productId);
      if (findProduct) {
        findProduct.quantity = findProduct?.quantity - 1;
      }
      state.total = selectTotalPrice(state);
      state.totalQuantity = totalQuantityAdd(state);
    },
    addAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const totalQuantityAdd = (state: TInitialState) =>
  state.products.reduce((total: number, product: Tproduct) => {
    return Number(total + product.quantity);
  }, 0);

export const selectTotalPrice = (state: TInitialState) =>
  state.products.reduce((total: number, product: Tproduct) => {
    return Number(total + product.quantity * product.price);
  }, 0);

export const {
  AddToCart,
  addAddress,
  minusQuantity,
  updateQuantity,
  removeCart,
} = ProductManage.actions;
export default ProductManage.reducer;
