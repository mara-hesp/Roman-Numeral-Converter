// Convert the given number into a roman numeral.

function convertToRoman(num) {
  let digits = num.toString().split('').reverse().join('')
  let newArr = []

     switch (digits[3]) {
    case '1': newArr.push('M')
    break;
    case '2': newArr.push('MM')
    break;
    case '3': newArr.push('MMM')
    break;
  }
    switch (digits[2]) {
      case '1': newArr.push('C')
      break;
      case '2': newArr.push('CC')
      break;
      case '3': newArr.push('CCC')
      break;
      case '4': newArr.push('CD')
      break;
      case '5': newArr.push('D')
      break;
      case '6': newArr.push('DC')
      break;
      case '7': newArr.push('DCC')
      break;
      case '8': newArr.push('DCCC')
      break;
      case '9': newArr.push('CM')
      break;
    }
    switch (digits[1]) {
      case '1': newArr.push('X')
      break;
      case '2': newArr.push('XX')
      break;
      case '3': newArr.push('XXX')
      break;
      case '4': newArr.push('XL')
      break;
      case '5': newArr.push('L')
      break;
      case '6': newArr.push('LX')
      break;
      case '7': newArr.push('LXX')
      break;
      case '8': newArr.push('LXXX')
      break;
      case '9': newArr.push('XC')
      break;
    }
    switch (digits[0]) {
      case '1': newArr.push('I')
      break;
      case '2': newArr.push('II')
      break;
      case '3': newArr.push('III')
      break;
      case '4': newArr.push('IV')
      break;
      case '5': newArr.push('V')
      break;
      case '6': newArr.push('VI')
      break;
      case '7': newArr.push('VII')
      break;
      case '8': newArr.push('VIII')
      break;
      case '9': newArr.push('IX')
      break;
    }

  return newArr.join('')
  
}

convertToRoman(36);
console.log(convertToRoman(36))// XXXVI
console.log(convertToRoman(1))// I
console.log(convertToRoman(3999))// MMMCMXCIX
