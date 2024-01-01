for(let i=0; i<12; i++) {
    console.log(i);
}


// . for all and for of 

//  for of is used to iterate over the values in an 
// iterable object , such as array or string . 
// it allows you to access 
// the values of the object directlly without using index

const myName = 'Raj'
const nums = [2,111,1,2,3,4,5,6]
for(let char of myName) {
    console.log('my Characters ' + char);
}

for(const n of nums) {
    console.log(n);
}

// for in iterates over the keys of the object (enuemerable porpertie of object that is keys)
// remember keys ! keys KEYS

const objecti = {
    a:1, 
    b:3, 
    c:123
            }

for(const key in objecti) {
    console.log(key);
}

for(const key in nums) {
    console.log(key);
}


console.log(Object.keys(nums));


// in means index , in means inside , object keys 