// delayedColorChange('red', 1000)
// .then(()=> delayedColorChange('orange', 1000))
// .then(() => delayedColorChange('yellow', 1000))


async function rainbow(){
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    return "ALL DONE"
}

rainbow().then(() => console.log("END OF THE RAINBOW!"))

async function printRainbow() {
    await rainbow()
    console.log("END OF RAINBOW!")
}

const fakeRequest = (url) => {
    return delay Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout (() =>{
            if (delay > 4000) {
                reject('Connection Time out :(')
            }else{
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests(){
    try{
    let data1 = await fakeRequest('/page1');
    console.log(data1)
    let data2 = await fakeRequest('/page2')
    console.log(data2)
    
} catch(e){
    console.log('Caught an error!')
    console.log('error is:', e)
}
}