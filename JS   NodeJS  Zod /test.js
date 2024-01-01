// image.onerror = () => {
    //     console.log('imag not found')
    // }
    
    // const fn = () => {
        //     console.log('this is gn fired')
        // }
        
        // function loadScript(src, callback) {
            //     console.log(callback())
            //     let script = document.createElement('script');
            //     script.src = src;
            
            //     script.onload = () => callback(script);
            
            //     document.head.append(script);
            // }
            
            // // loadScript('bapu',fn)
            
            // let flag = false
            
            // const promise = new Promise((resolve,reject)=>{
                //     if(flag) {
                    //         resolve()
                    //     }
                    //     reject()
                    // })
                    
                    // promise
                    // .finally(() => console.log('finally'))
                    // .catch(() => {
                        //     console.log('I was not resolved')
                        // })
                        
                        // function delay(ms) {
                            //     return new Promise(resolve => setTimeout(resolve(),ms))
                            // }
                            
                            // // console.log(typeof(delay(3000).then(() => alert('runs after 3 seconds'))))
                            
                            
                            // new Promise(function(resolve, reject) {
                                
                                //     setTimeout(() => resolve(1), 5000);
                                
                                //   }).then(function(result) {
                                    
                                    //     console.log(result); // 1
                                    
                                    //     return new Promise((resolve, reject) => { // (*)
                                    //       setTimeout(() => resolve(result * 2), 2000);
                                    //     });
                                    
                                    //   }).then(function(result) { // (**)
                                    
                                    //     console.log(result); // 2
                                    
                                    //     return new Promise((resolve, reject) => {
                                        //       setTimeout(() => resolve(result * 2), 2000);
                                        //     });
                                        //   }).then(function(result) {
                                            
                                            //     console.log(result); // 4
                                            
                                            //   });
                                            
                                            
                                            
                                            
                                            
// const data = fetch('https://api.github.com/users/rajxsv')
// .then((user)=>{
//     return new Promise((resolve)=>{
//         resolve(user.json())
//     })
// })
// .then((data)=>{
//     // image.src = data.avatar_url
    
//     console.log('then me')
// })

// console.log('i got first')

(async function fn() {
    try {     
        const image = document.createElement('img')
    
        const responae = await fetch('https://api.github.com/users/rajxsv')
        const user = await responae.json()
        
        image.src = user.avatar_url    
        document.body.append(image)
        console.log('then me')

    } catch (error) {
        console.log('in error block')
        throw new Error
    }
})()

console.log('first me')
