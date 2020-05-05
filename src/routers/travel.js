const express = require('express');
const router = new express.Router();
const bestRoute = require('../utils/bestRoute');

router.get('', (req, res) => {
  res.render('index', {
    title: 'Book Your Flight!',
    name: 'GT Flight Company'
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'GT Flight Company'
  });
});

router.get('/help', async (req, res) => {

  await res.render('help', {
    title: 'Help',
    name: 'GT Flight Company'
  });
});

router.get('/routes', (req, res) => {
  res.render('routes', {
    title: 'Travel Infos',
    message: 'Here you can find ours destinations: ',
    name: 'GT Flight Company'
  });
});

router.get('/travel', (req, res) => {

  if (!req.query.route) {
    return res.render('404', {
      title: '404',
      message: 'No route provided, that way we cant fetch the best route!'
    });
  }

  let input = req.query.route.toUpperCase();
  input = input.split('-')
  let from = input[0];
  let to = input[1];

  bestRoute(from, to, (err, data) => {
    if (err) {
      return res.render('404', {
        title: '404',
        message: 'Something went wrong with the routerlication!'
      });
    }

    return res.send({
      route: data
    });
  });
});

router.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    message: 'Help article not found'
  });
});

router.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    message: 'Page not found'
  })
});

module.exports = router;