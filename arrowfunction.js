const newNum = (num1, num2) => (num1 + num2)

// console.log(newNum(3,5))
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// console.log(materials.map((material) => material.length));


// greetings();

const greetings = (name = 'Sufiyan') => {
    if (!name) {
        console.log('Please enter a name');
    } else {
        console.log(`Hello, ${name}`);
    }
};

// Call the function without passing an argument (uses default 'Sufiyan')
greetings();  // Output: Hello, Sufiyan


