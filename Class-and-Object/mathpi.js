const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const student = {
    name : "Amit",
    rollno: 123,
    isPresent : true,

    callStudent: function(){
        console.log('Student not present');
    }
}

// console.log(Object.getOwnPropertyDescriptor(student, "name"))

// Before property change we can iterate on object property name

console.log('Before property change');
for (const [key, value] of Object.entries(student)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

//Changing student name property
Object.defineProperty(student, 'name', {
    // writable:false,
    enumerable: false
})

// After property change we can not  iterate on object proerty name

console.log('After property change');
for (const [key, value] of Object.entries(student)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

// console.log(Object.getOwnPropertyDescriptor(student, "name"))
