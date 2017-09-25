import productServices from '../../app/components/products/services';

const getProductsState = async () => {
  const response = await productServices.getList();
  return {
    products: {
      items: response.data.products,
    },
  };
};

export default async (url) => {
  switch (url) {
    case '/products':
      return getProductsState();
    default:
      return {};
  }
};
