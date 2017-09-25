import jwt from 'jsonwebtoken';

import config from '../config';

const authController = {
  login(req, res) {
    if (req.body.login === 'login' && req.body.password === 'password') {
      const token = jwt.sign({
        login: req.body.login,
      }, config.jwtSecret, { expiresIn: '1h' });
      res.json({
        user: 'Test user',
        token,
      });
    }
    res.send(401);
  },
  auth() {
    return (req, res, next) =>
      jwt.verify(req.get('Authorization'), config.jwtSecret, (err, decoded) => {
        console.log('auth', err, decoded);
        
        if (err) return res.status(401).json({ error: 'You are not authorized to view this content.' });
        next();
      });
  },

};

export default authController;
