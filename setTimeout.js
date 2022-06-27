const a=30;
let b=20;

function tobecalledAfter6seconds(){console.log('called after 6 seconds')}
function tobecalledAfter7seconds(){console.log('called after 7 seconds')}


setTimeout(tobecalledAfter6seconds,6000)
setTimeout(tobecalledAfter7seconds,7000)

console.log (b)