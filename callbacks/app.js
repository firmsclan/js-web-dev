const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }

]

 const titles = movies.map(function(movie){
    return movie.title.toUpperCase()
})

const square = x =>{
return x * x
}


const rollDie = ()=>( Math.floor(Math.random() * 6) + 1
)

const add = (a,b) => a+b

// const doubles = numbers.map(function(num){
//     return num * 2
// })

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})


// numbers.forEach(function(el){
//     console.log(el)
// })
// for (let el of numbers){
//     if( el % 2 === 0){
//         console.log(el)
//     }
// }



const newMocies = movies.map(movie => `${movie.title} - ${movie.score /10}`)




console.log('hello')
setTimeout(() =>{
    console.log('are you still there')
},3000)
console.log('bye')

numbers.filter(n =>{
    return n === 4
})



movies.some(movie => movie.year > 2015)


//  const total = [1,1,1,1,1].reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue
// })
// console.log(total)

const prices = [9.99,1.5,19.99,49.99,3.5]

const ad = prices.reduce((total, price) =>{
    return total + price
})

console.log(ad)


 const bestMovie = movies.reduce ((bestMovie, currMovie) =>{
    if(currMovie.score > bestMovie.score){
        return bestMovie
    }
    return currMovie
})
