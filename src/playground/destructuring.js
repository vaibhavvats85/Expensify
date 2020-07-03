// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;
// console.log(publisherName)


const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];

const [beverage, , cost] = item;

console.log(`A medium ${beverage} costs ${cost}`);