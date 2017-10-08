import productServices from '../../app/components/products/services';

const getProductsState = async (user) => {
  let products = [];
  if (user) {
    const response = await productServices.getList();
    products = response.data && response.data.products ? response.data.products : [];
  }
  return { products: {
    items: products,
  } };
};

export default async (url, user) => {
  switch (url) {
    case '/products':
      return getProductsState(user);
    default:
      return {};
  }
};
