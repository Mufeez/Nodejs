
//illustration of callback using an API for telephone Directory

function getPhoneNumberUsingAPI(name,callback){
    // consider that API takes about 2 second to respond
    setTimeout(()=>{
        //phoneNum is hardcoded response for illustration purpose  
        const phoneNum='1234567890'
        const phoneDetails= `Your Name is ${name} and Your Number is ${phoneNum}`
         callback(phoneDetails)
    },2000)
}

const printPhoneDetails = (phoneDetails)=>{console.log(phoneDetails)}

getPhoneNumberUsingAPI('Mufeez',printPhoneDetails)
