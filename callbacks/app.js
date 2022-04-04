// setTimeout(()=>{
//   document.body.style.backgroundColor = 'red'
//   setTimeout(()=>{
//     document.body.style.backgroundColor = 'orange'
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'orange'
//       },1000)
//   },1000)
// },1000)

//  const delayedColorChange = (newColor, delay) => {
//     setTimeout(()=>{
//     document.body.style.backgroundColor = newColor
//      })
//  }

// delayedColorChange('olive',3000)
// delayedColorChange('teal', 6000)

// delayedColorChange('red',1000,() => {
//     delayedColorChange('blue',1000,() => {
//         delayedColorChange('green',1000,() => {
//             delayedColorChange('orange',1000,() => {
//                 delayedColorChange('brown',1000,() => {
    
//                 })
//             })
//         })
//     })
// })


fakeRequestPromise('yelp.com/api/coffe/page1').then(() =>{
    console.log("it worded!! (page 1")
    console.log(data)
    return fakeRequestPromise('yelp.com/api/coffe/page2')
})
.then(()=>{
    console.log("it worded!! (page 3")
    return fakeRequestPromise('Oh,no a requesst failed')
}
)

const login = aysnc (username, password)