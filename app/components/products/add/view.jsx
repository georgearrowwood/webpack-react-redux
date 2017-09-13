import React from 'react';

const handleTitleChange = () => {};

const AddProduct = () => (
  <div>
    Add Product:
    <div>
      <input type="text" onChange={handleTitleChange} />
      <button onClick={handleTitleChange}>
        Add
      </button>
    </div>
  </div>
);


// AddProduct.propTypes = {
//   handleTitleChange: PropTypes.func,
//   titleValue: PropTypes.string,
//   addHandle: PropTypes.func
// }

export default AddProduct;
