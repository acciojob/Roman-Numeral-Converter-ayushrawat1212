function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = "";
	
	//loop through the mapped obj entries
	for(let key in obj) {
		const[symbol, value] = obj[key];

		//while the curr num is greater or equal to the roman symbol value
		while(num >= value) {
			result += symbol;   //add the roman symbol to the output
			num -= value;        //reduce the target number by that value
		}
	}
	
return result;	
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
