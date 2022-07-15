const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('started');
});

eventEmitter.emit('start');

//multiple arguments

eventEmitter.on('start',  (start, end) => {
    console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);
