
console.log('Hello')

let x = {
    a: 5,
    b: 7,
    count: 3
};
let y = {
    d:"Goga",
    e:'Monya',
    f:"Kaka"
}

let z ={ ...x , ...y};
let q = { ...x , count: 18 };
let s = { ...x , count: 13, name:'Yuka' }
console.log(x)
console.log(z);
console.log(q)
console.log(s)