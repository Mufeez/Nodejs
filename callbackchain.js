//illustration of callback using an API for telephone Directory

function getCallHistoryUsingNameAPI(name,callback){
    // consider that API takes about 2 second to respond
    setTimeout(()=>{
         //phoneNum is hardcoded response for illustration purpose  
        const phoneNum='1234567890'
        console.log(`phone number ready after 2 seconds for ${name} and it is ${phoneNum}`)
        callback(phoneNum)
    },2000)
}

function getCallHistoryUsingPhoneAPI(phoneNum,callback){
    // consider that API takes about 2 second to respond
    setTimeout(()=>{
        //history is hardcoded response for illustration purpose  
        const history=['Monday,Tuesday']
        const historyDetails= `History for Phone Number ${phoneNum}  is ${history} ,it took another 2 seconds for API Response`
         callback(historyDetails)
    },2000)
}

const printHistoryDetails = (historyDetails)=>{console.log(historyDetails)}
const getCallHistory= (phoneDetails)  => { getCallHistoryUsingPhoneAPI(phoneDetails,printHistoryDetails)}

getCallHistoryUsingNameAPI('Mufeez',getCallHistory);

//getCallHistoryUsingNameAPI ->phonenumber after 2 second-> getCallHistory(phonenumber)->getCallHistoryUsingPhoneAPI->history after 2 seconds->printHistoryDetails(history)