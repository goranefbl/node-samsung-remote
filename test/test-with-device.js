'use strict';
var Samsung = require('./../lib/node-samsung-remote');
var remote = new Samsung({ip: '192.168.0.102', debug: true});

//test the command buffer and commandInterval
//for(let i = 0; i < 10; i++) {
//  remote.number(i);
//}
//
////test set channel
//remote.setChannel(104);
//
////test volume and channel
//remote.volume(true);
//remote.volume(false);
//remote.channel(true);
//remote.channel(false);
//
////test arrow keys
//remote.arrow('left');
//remote.arrow('right');
//remote.arrow('up');
//remote.arrow('down');

//for(let i = 0; i < 5; i++) {
//  remote.volume(false);
//}
//
//for(let i = 0; i < 5; i++) {
//  remote.volume(true);
//}

//remote.send(Samsung.keys.TV);

//remote.setChannel(102);

//remote.info();
//remote.enter();
//remote.back();
//remote.back();
//remote.send(Samsung.keys.HOME);
//remote.send(Samsung.keys.);

remote.hdmi();
remote.tv();