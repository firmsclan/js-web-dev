const fakeRequestCallback = (url, success,failure) =>{
    const delay = Math.floor(Math.random() * 4500 + 500)
    setTimeout(() =>{
        if(delay > 4000){
            failure('Conection Timeout:(')
        }else {
            success(`Here is your fake data from ${url}`)
        }
    },delay)
}

const fakeRequestPromise =  url =>{
    return new Promise((resolve, reject) =>{
        const delay = Math.floor(Math.random() * 4500 + 500)
        setTimeout(() =>{
            if(delay > 4000){
                reject ('Conection Timeout:(')
            }else {
                resolve (`Here is your fake data from ${url}`)
            }
        },delay)
    })
}


// fakeRequestCallback('books.com/page1', 
//    function(response){
//     console.log('IT WORKED!!!!')
//     console.log(response)
//     fakeRequestCallback('books.com/page2',
//     function(response){
//         console.log('IT WORKED AGAIN!!!!')
//         console.log(response)
//         fakeRequestCallback('books.com/page3', function(response){
//             console.log('IT WORKED AGAIN!!!!')
//         console.log(response)
//         }, function(err){
//             console.log('ERROR 3!!!', err)
//         })
//     }, function(err){
//         console.log('ERROR 2!!!', err)
//     })
// }, function (err){
//     console.log('ERROR!!!', err)
// })

// fakeRequestPromise('books.com/page1')
// .then(() =>{
//     console.log('IT WORKED!!!!')
//     fakeRequestPromise('books.com/page2')
//     .then(()=>{
//         console.log('IT WORKED 2!!!!')
//     })
//     .catch(()=>{
//         console.log('OH NO, ERROR 2!!!')
//     })
// })
// .catch(() =>{
//     console.log('OH NO, ERROR!!!')
// })

fakeRequestPromise('books.com/page1')
.then(() =>{
    console.log('IT WORKED!!!!')
    return fakeRequestPromise('books.com/page2')
})
.then(() =>{
    console.log('IT WORKED (page 2)!!!!')
    return fakeRequestPromise('books.com/page3')
})
.then(() =>{
    console.log('IT WORKED (page 3)!!!!')
})
.catch(()=>{
    console.log('OH NO, PROMISE FAILED')
})

const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((data)=>{
return data.json()
})
.then((res)=>{
 console.log(res)
})
.catch((err)=>{
console.log(err)
})