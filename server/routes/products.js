import express from 'express';

const router = express.Router();

let products = [
  { id: 1, title: 'aa' },
  { id: 2, title: 'bb' },
];

function newId() {
  return Math.floor((Math.random() * (1000000 - 10000)) + 10000);
}

router.get('/api/products', (req, res) => {
  setTimeout(() => {
    res.send({ products });
  }, 700);
});

router.post('/api/products', (req, res) => {
  if (req.body.product && req.body.product.title) {
    products.push({ id: newId(), title: req.body.product.title });
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

router.delete('/api/products/:id', (req, res) => {
  products = products.filter(item => item.id !== parseInt(req.params.id, 10));
  res.send({ success: true });
});

module.exports = router;
