//
///
/////object destructuring



// const person = {
//     name: 'Arnav',
//     age: 18,
//     likes: ['football','coding','and thats all'],
//     location: {
//         city: 'New Delhi',
//         temperature: 43
//     }
// };

// const { name='anonymous', age, location }  = person;
// const { temperature: temp, city } = location;

// console.log(`${name} is ${age} years old.`);

// console.log(`It's ${temp} in ${city}.`);

// const book = {
//     name: 'Small Acts Of Freedom',
//     author: 'Gurmehar Kaur',
//     publisher: {
//         //name: 'Penguin'
//     }
// }

// const { name: bookName, author: authorName, publisher } = book;
// const { name: publisherName='Anonymous' } = publisher;

// console.log(`The book ${bookName} is written by ${authorName} and published by ${publisherName}.`);





//
////
////array destructuring

// const address = ['221 B Baker Street','London','Great Britain','Europe'];
// const [ street, city, country, continent ] = address;
// console.log(`You are in ${street}, ${city}, ${country}, ${continent}.`);

const  item = [ 'Coffee (hot)', '$2.00', '2.50', '2.75'];
const [ name, small, medium, large ] = item;
console.log(`The price of ${name} is ${small}, ${medium} and ${large} for small medium and large sizes respectively.`);