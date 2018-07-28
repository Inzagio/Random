const scribble = require('scribbletune');

let perc = scribble.clip({
    notes: ['c2', 'c#2', 'd2', 'd#2'],
    pattern: 'x-x-x--x',
    sizzle: true,
    shuffle: true
});  
let perc1 = scribble.clip({
    notes: ['f2', 'f#2', 'g2', 'g#2'],
    pattern: 'x-x-xxxx',
    sizzle: true,
    shuffle: true
});  
    
scribble.midi(perc.concat(perc1, perc, perc1));