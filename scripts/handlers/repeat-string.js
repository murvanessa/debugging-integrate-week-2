'use strict';
// fix the bugs

console.log('--- loading: repeat string');

function repeatStringHandler() {
  debugger;
  console.log('\n--- action: repeat string ---');
  console.log('range:', typeof range, '\n', range);
  //console.log('stringToRepeat:', typeof stringToRepeat, '\n', stringToRepeat);

  // read inputs from user
  const stringToRepeat = prompt('enter a string to repeat');
  const newString = String(stringToRepeat);
  console.log('newString:', typeof newString, '\n', newString);
  if (stringToRepeat === null) {
    return;
  }

  // perform core logic
  let repeatedString='';
  for (let i = 1; i <= range; i++) {
    repeatedString += newString+ '\n';
  }
  console.log('repeatedString:', typeof repeatedString, '\n', repeatedString);

  // alert result for the user
  alert(repeatedString);
}
