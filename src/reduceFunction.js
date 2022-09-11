// reduce of an array with example
const numbers = [10, 12, 14, 16, 18, 15];

// numbers.map(num => num * 2);
// numbers.filter(num => num > 20);
// numbers.find(num => num > 25);

//reduce concepts
//numbers.reduce - 2 parameter + arrow + default parameter
//console.log(total);
//like for loop, 0 second parameter default value

// const total = numbers.reduce( (sum,num) => sum + num ,0);
// console.log(total); //85

const total = numbers.reduce( (sum,num) => {
    console.log(sum + num);//show iteration
    return sum + num
} ,0);
// console.log(total);

 //reduce on object
 const devNames = [
    {name: 'Pranav', amount: 67},
    {name: 'Lutful', amount: 76},
    {name: 'Ashiq', amount: 38},
    {name: 'Sourav', amount: 92},
    {name: 'Sourav', amount: 75}
 ];
 const total2 = devNames.reduce( (sum,devName) => {
    console.log(sum + devName);//show iteration
    return sum + devName.amount;
} ,0);
console.log(total2);


const final = numbers.reduce( (sum, devName) => sum + devName.amount ,0)
console.log(final);