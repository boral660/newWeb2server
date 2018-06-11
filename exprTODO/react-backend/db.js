var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:azpylz15@ds247270.mlab.com:47270/todowb');
mongoose.connection
 .once('open', () => console.log('Good to go!'))
 .on('error', (error) => {
 console.warn('Warning', error);
 });