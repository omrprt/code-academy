// Write your code here:

function reverseArray(sentence){
    let newArray = [];
    for(let i = sentence.length - 1; i >= 0; i--){
    newArray.push(sentence[i]);
    console.log(sentence[i])
    }
    return newArray
  }
  
  // When you're ready to test your code, uncomment the below and run:
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];


  
  