
//illustration of callback using an API for telephone Directory

function getPhoneNumberUsingAPIwithError(name){
    // consider that API takes about 2 second to respond
    return new Promise ((resolve,reject)=>{

        setTimeout(()=>{
            //phoneNum is hardcoded response for illustration purpose  
            const phoneNum=1234567890
            const phoneDetails= `Your Name is ${name} and Your Number is ${phoneNum}`
            

             if (phoneNum===1234567890)
             {
                   reject('No Phone Number')
             }

             else
             {
                   
                resolve(phoneDetails)

             }
        },2000)

    })
  
}
function getPhoneNumberUsingAPIWithSuccess(name){
    // consider that API takes about 2 second to respond
    return new Promise ((resolve,reject)=>{

        setTimeout(()=>{
            //phoneNum is hardcoded response for illustration purpose  
            const phoneNum=1234567890
            const phoneDetails= `Your Name is ${name} and Your Number is ${phoneNum}`
            

             if (phoneNum!==1234567890)
             {
                   reject('No Phone Number')
             }

             else
             {
                   
                resolve(phoneDetails)

             }
        },2000)

    })
  
}


getPhoneNumberUsingAPIWithSuccess('Mufeez').then((result)=>{console.log(result)}).catch((err)=>{{console.log(err)}})
getPhoneNumberUsingAPIwithError('Mufeez').then((result)=>{console.log(result)}).catch((err)=>{{console.log(err)}})

