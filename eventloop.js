console.log('start')
setTimeout(()=>{
    console.log('called back after 2 second by eventloop from call back queue')
})
//callback will be registered in callback q by DOM API after 2 seconds
//eventloop will push the code in execution context from callback q
console.log('End')