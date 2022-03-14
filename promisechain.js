function getPhoneNumberUsingNameAPI(name) {
  // consider that API takes about 2 second to respond
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //phoneNum is hardcoded response for illustration purpose
      const phoneNum = 1234567890;
      const phoneDetails = `Your Name is ${name} and Your Number is ${phoneNum}`;
      console.log(phoneDetails)
      console.log('First Promise Resolved in 2 seconds')
      if (name === "unknown") {
        reject("No Phone Number");
      } else {
        resolve(phoneNum);
      }
    }, 2000);
  });
}

function getCallHistoryUsingPhoneAPI(phoneNum) {
  // consider that API takes about 2 second to respond
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //history is hardcoded response for illustration purpose
      const history = ["Monday,Tuesday"];
      const historyDetails = `History for Phone Number ${phoneNum}  is ${history} ,it took another 2 seconds second promise to resolve`;
      if (phoneNum === undefined) {
        reject("No History");
      } else {
        resolve(historyDetails);
      }
    }, 2000);
  });
}

getPhoneNumberUsingNameAPI("Mufeez").then((phone) => {
  getCallHistoryUsingPhoneAPI(phone).then((history) => {
    console.log(history);
  });
});
