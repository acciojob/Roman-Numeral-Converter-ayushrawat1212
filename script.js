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
	
	// Loop explicitly from 0 to 6 since objects don't have a .length property
	for (let i = 0; i <= 6; i++) {
		const [symbol, value] = obj[i];

		// 1. Standard subtraction reduction for base values (e.g., 1000, 500, 100)
		while (num >= value) {
			result += symbol;   
			num -= value;        
		}

		// 2. Look-ahead check for '9' patterns (Even indices: 0 for M, 2 for C, 4 for X)
		if (i % 2 === 0 && i <= 4) {
			const [nextSym, nextVal] = obj[i + 2]; // Get the unit to subtract (e.g., C for M, X for C)
			if (num >= value - nextVal) {
				result += nextSym + symbol;   // Append subtraction pair (e.g., CM, XC, IX)
				num -= (value - nextVal);
			}
		} 
		// 3. Look-ahead check for '4' patterns (Odd indices: 1 for D, 3 for L, 5 for V)
		else if (i % 2 !== 0 && i <= 5) {
			const [nextSym, nextVal] = obj[i + 1]; // Get the unit to subtract (e.g., C for D, X for L)
			if (num >= value - nextVal) {
				result += nextSym + symbol;   // Append subtraction pair (e.g., CD, XL, IV)
				num -= (value - nextVal);
			}
		}
	}
	
	return result;	
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
