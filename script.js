"use strict"

let a = 50;

console.log(a);

// a = 50;

//console.log(a); [here it will show error in our console bcoz of strict mode];

let a1 = 20;

function fn(){
    'use strict';
    let b = 25;
    console.log(b);
};

fn();

function test(a,b,c){
    console.log(a+b+c)

};
test(10,20,30);