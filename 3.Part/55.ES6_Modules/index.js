// ES6 MODULE = An external file that contains reusable code that can be imported into other javascript files
//              Write reasable code for many different apps. ECMAScript 2015 update

import {PI, getCircurference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

const circurference = getCircurference(10);
const area = getArea(10);


console.log(circurference.toFixed(2)) 
console.log(area.toFixed(2)) 