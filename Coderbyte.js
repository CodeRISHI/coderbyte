//Coderbyte.js

//**************************CALLBACKS**************************

//commas every 3 numbers
      function commaSeparateNumber(val){
         while (/(\d+)(\d{3})/.test(val.toString())){
           val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
         }
         return val;
      };

      //check if letter
      var isLetter = function (el) {
        var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        for (var i = 0; i < letters.length; i++) {
            if (el === letters[i]) {
              return true;
            }
          }
      }; //end function

      //isUpperCase
      var isUpperCase = function (el) {
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        for (var i = 0; i < letters.length; i++) {
            if (el === letters[i]) {
              return true;
            }
          }
      }; //end function

      //isLowerCase
      var isLowerCase = function (el) {
        var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        for (var i = 0; i < letters.length; i++) {
            if (el === letters[i]) {
              return true;
            }
          }
      }; //end function

      //ChangeCase
      var ChangeCase = function (el) {
        if (isUpperCase(el)) {
          el = el.toLowerCase();
        } else if (isLowerCase(el)) {
          el = el.toUpperCase();
        }
        //console.log(el);
        return el;
      }; //end function

      var isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      };

      var isNumber = function (n) {
        return isFinite(n) && +n === n;
      };

//**************************END CALLBACKS**************************

      //First Reverse
      var FirstReverse = function (str) {
        var newStr = str.split('');

        //in-place
        for (var i = 0; i < newStr.length; i++) {
          newStr.splice(i,0,newStr.pop());
        }
        console.log(newStr);        
        return newStr;

        //new array
        // var newArr = [];
        // for (var i = newStr.length - 1; i >= 0; i--) {
        //   newArr.push(newStr[i]);
        // }
        // console.log(newArr);        
        // return newArr;
      }; //end function

      FirstReverse('coderbyte');

      //First Factorial
      var FirstFactorial = function (num) {
        var factorial = 1;
        for (var i = num; i > 0; i--) {
          factorial *= i;
        }
        console.log(commaSeparateNumber(factorial));        
        return factorial;
      }; //end function

      FirstFactorial(5);

      //Longest Word
      var LongestWord = function (sen) {
        var strArr = sen.split(' ');
        console.log(strArr);

        //if letter
        var letterArr = [];
        var newArr = [];
        for (var i = 0; i < strArr.length; i++) {
          letterArr = [];
          console.log("strArr[i]: " + strArr[i]);
          for (var j = 0; j < strArr[i].length; j++) {
            if (isLetter(strArr[i][j])) {
              letterArr.push(strArr[i][j]);
            }
          }
          console.log(letterArr);
          newArr.push(letterArr.join(''));
          console.log(i,newArr);
        }

        //sort by length
        newArr.sort(function(a,b) {
          return b.length - a.length;
        });

        //return longest word
        console.log(newArr, newArr[0]);        
        return newArr[0];
      }; //end function

      LongestWord('fun&!! time');
      LongestWord('I love dogs');
      LongestWord('fair love dogs');

      //Letter Changes
      var LetterChanges = function (str) {
        var nStr = str.split('');
        console.log(nStr);

        var nArr = [];
        var result = '';

        //alphabet array
        var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        //check if letter
        for (var i = 0; i < nStr.length; i++) {
          for (var j = 0; j < alphabet.length; j++) {
            if (nStr[i] === alphabet[j]) {
              //console.log(nStr[i], alphabet[j]);
              nArr.push(alphabet[j+1]);
              //console.log(alphabet[j+1]);
              //console.log(nArr);
            } else if (!(isLetter(nStr[i]))) {
              nArr[i] = nStr[i];
            }
          }
        }
        console.log("nArr: " + nArr);

        //vowel capitalization
        for (var k = 0; k < nArr.length; k++) {
          if (nArr[k] === 'a' || nArr[k] === 'e' || nArr[k] === 'i' || nArr[k] === 'o' || nArr[k] === 'u') {
            nArr[k] = nArr[k].toUpperCase();
          }
        }
        result = nArr.join('');
        console.log(nArr, result);        
        return result;
      }; //end function

      LetterChanges('hello*3');
      LetterChanges('fun times!');

      //Simple Adding
      var SimpleAdding = function (num) {
        var sum = 0;
        var result = 0;
        var i = 1;

        while (i <= num) {
          sum += i;
          i++;
        }
        result = commaSeparateNumber(sum);
        console.log(result);        
        return sum;
      }; //end function

      SimpleAdding(50);

      //Letter Capitalize
      var LetterCapitalize = function (str) {
        var nArr = str.split(' ');
        console.log(nArr);

        var wordArr = [];
        var result = '';

        for (var i = 0; i < nArr.length; i++) {
          //wordArr = [];
          wordArr.push(nArr[i][0].toUpperCase());
          for (var j = 1; j < nArr[i].length; j++) {
            wordArr.push(nArr[i][j].toLowerCase());
          }
          console.log(wordArr);
        }
        result = wordArr.join('').toString();

        //space between words
        result = result.replace(/([a-zA-Z])([A-Z])([a-z])/g, '$1 $2$3');

        console.log(result);        
        return result;
      }; //end function

      LetterCapitalize('hello world');
      LetterCapitalize('i ran there');

      //Simple Symbols
      var SimpleSymbols = function (str) {
        var strArr = str.split('');
        console.log(strArr);

        var bool = 'false';

        //if less than 3 characters
        if (strArr.length < 3) {          
          return bool;
        }

        //first and last characters
        if (isLetter(strArr[0]) || isLetter(strArr[strArr.length - 1])) {          
          return bool;
        } else if (isLetter(strArr[1]) && strArr[0] !== '+') {            
            return bool;
          } else if (isLetter(strArr[strArr.length - 2]) && strArr[strArr.length - 1] !== '+') {              
              return bool;
            }

        for (var i = 1; i < strArr.length - 1; i++) {
          if (isLetter(strArr[i])) {
            if (strArr[i-1] === '+' && strArr[i+1] === '+') {
              bool = 'true';
            } else {              
              return bool;
            }
          }
          //console.log(strArr[i]);
        }        
        return bool;
      }; //end function

      SimpleSymbols('+d+=3=+s+');
      SimpleSymbols('f++d+');

      //Check Nums
      var CheckNums = function (num1, num2) {
        var result = '';

        if (num1 === num2) {
          result = '-1';
        } else if (num2 > num1) {
            result = 'true';
          } else {
              result = 'false';
            }
        console.log(result);        
        return result;
      }; //end function

      //Old Solution
      // function CheckNums(num1,num2) {
      //   if (num1 == num2) {
      //     return "-1";
      //   }
      //   else if (num2 > num1) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      //   return num1 + num2;
      // };

      CheckNums(3,122);
      CheckNums(67,67);
      CheckNums(34,18);

      //Prime Checker
      var isPrime = function (num) {
        for(var i = 2; i < num; i++) {
          if(num % i === 0) {
            return false;
          }
        }
        return true;
      }; //end function

      function perms(data) {
        if (!(data instanceof Array)) {
            throw new TypeError("input data must be an Array");
        }

        data = data.slice();  // make a copy
        var permutations = [],
            stack = [];

        function doPerm() {
            if (data.length == 0) {
                permutations.push(stack.slice());
            }
            for (var i = 0; i < data.length; i++) {
                var x = data.splice(i, 1);
                stack.push(x);
                doPerm();
                stack.pop();
                data.splice(i, 0, x);
            }
        }

        doPerm();
        return permutations;
      }; //end perms

        // var input = "abcd".split('');
        // var result = perms(input);
        // for (var i = 0; i < result.length; i++) {
        //     result[i] = result[i].join('');
        // }
        // console.log(result);

      var PrimeChecker = function (num) {
        var myNum = num.toString();
        var nArr = myNum.split('');
        console.log(myNum, nArr);

        var result = '';
        var mNum = 0;

        //single-digit
        if (isPrime(myNum) && myNum.length === 1) {          
          result = '1';
          return result;
        }

        //2-digit
        if (isPrime(nArr.reverse().join('')) && nArr.length === 2) {          
          result = '1';
          return result;
        }

        var input = nArr;
        var resultArr = perms(input);
        for (var i = 0; i < resultArr.length; i++) {
            resultArr[i] = resultArr[i].join('');
        }
        console.log("resultArr: " + resultArr);

        for (var j = 0; j < resultArr.length; j++) {
          if (isPrime(resultArr[j])) {
            console.log("IF PRIME - ", j, resultArr[j]);
            result = '1';            
            return result;
          } else {
            console.log("NOT PRIME - ", j);
            result = '0';
          }
        }        
        return mNum;
      }; //end function

      PrimeChecker(123);
      PrimeChecker(910);
      PrimeChecker(4289);

      //Number Search
      var NumberSearch = function (str) {
        var nArr = str.split('');
        console.log(nArr);

        var result = 0;

        //letters
        var letterArr = [];
        var numArr = [];
        for (var i = 0; i < nArr.length; i++) {
          if (isLetter(nArr[i])) {
            letterArr.push(nArr[i]);
            console.log("letterArr: " + letterArr);
          } else if (isNaN(nArr[i]) === false) {
              numArr.push(nArr[i]);
              console.log("numArr: " + numArr);
              numArr = numArr.filter(function(str) {
                return /\S/.test(str);
              });
            }
        }

        console.log(letterArr, numArr);

        var letterCount = letterArr.length;
        var sum = 0;
        for (var j = 0; j < numArr.length; j++) {
          sum += parseInt(numArr[j]);
        }

        result = Math.round(parseFloat(sum / letterCount));
        console.log(sum, letterCount, parseFloat(sum / letterCount), result);        
        return result;
      }; //end function

      NumberSearch("H3ello9-9");
      NumberSearch("One Number*1*");

      //Triple Double
      var TripleDouble = function (num1, num2) {
        var arr1 = num1.toString().split('');
        var arr2 = num2.toString().split('');
        console.log(arr1, arr2);

        var temp1 = 0;
        var temp2 = 0;
        var result = 0;

        //num1
        for (var i = 1; i < arr1.length - 1; i++) {
          if (arr1[i-1] === arr1[i] && arr1[i+1] === arr1[i]) {
            temp1 = arr1[i];
            console.log("arr1[i]: " + arr1[i] + "\ntemp1: " + temp1);
            //num2
            for (var j = 0; j < arr2.length - 1; j++) {
              if (arr2[j] === arr2[j+1]) {
                if (temp1 === arr2[j]) {
                  result = 1;
                  console.log("arr2[j]: " + arr2[j]);                  
                  return result;
                }
              }
            }
          }
        }        
        return result;
      }; //end function

      TripleDouble(465555, 5579);
      TripleDouble(67844, 66237);

      //Dash Insert II

      //isEven
      var isEven = function (n) {
        if (n % 2 === 0) {
          return true;
        } else {
            return false;
          }
      }; //end callback function

      var DashInsertII = function (num) {
        var numArr = num.toString().split('');
        console.log(numArr);

        var newArr = [];
        var result = '';

        for (var i = 0; i < numArr.length - 1; i++) {
          //if n = 0
          if (parseInt(numArr[i]) === 0 || parseInt(numArr[i+1]) === 0) {
            newArr.push(numArr[i]);
          } else {
            newArr.push(numArr[i]);
            console.log("newArr: " + newArr);
            if (isEven(numArr[i]) && isEven(numArr[i+1])) {
              //add asterisk
              newArr.push('*');
              console.log("numArr[i]: " + numArr[i] + "\nnumArr[i+1]: " + numArr[i+1] + "\nisEven(numArr[i]): " + isEven(numArr[i]) + "\nisEven(numArr[i+1]): " + isEven(numArr[i+1]));
            } else if (!(isEven(numArr[i])) && !(isEven(numArr[i+1]))) {
                //add dash
                newArr.push('-');
                console.log("numArr[i]: " + numArr[i] + "\nnumArr[i+1]: " + numArr[i+1] + "\nisEven(numArr[i]): " + isEven(numArr[i]) + "\nisEven(numArr[i+1]): " + isEven(numArr[i+1]));
            }
            console.log("newArr: " + newArr + "\nnumArr: " + numArr);
            }
          }

        newArr.push(numArr[numArr.length - 1]);
        console.log("newArr: " + newArr);
        result = newArr.join('').toString();        
        return result;
      }; //end function

      DashInsertII(99946);
      DashInsertII(56647304);

      //Swap II
      var SwapII = function (str) {
        var strArr = str.split('');
        console.log("strArr: " + strArr);

        var newArr = [];
        var valArr = [];
        var indArr = [];
        var result = '';

        //Uppercase
        for (var i = 0; i < strArr.length - 1; i++) {
          if (isLetter(strArr[i])) {
            newArr.push(ChangeCase(strArr[i]));
            console.log("strArr (CAPITAL/LOWERCASE): " + strArr + "\nnewArr: " + newArr);
          } else if (isNumeric(strArr[i])) {
              newArr.push(strArr[i]);
              if (isLetter(strArr[i+1])) {
                valArr.push(strArr[i]); //store value at i
                indArr.push(i); //store index
                console.log("indArr: " + indArr + "\ni: " + i + "\nvalArr: " + valArr);
              }
          } else {
              newArr.push(strArr[i]);
            }
        }
        console.log("newArr: " + newArr + "\nindArr: " + indArr + "\ni: " + i + "\nvalArr: " + valArr)
        //swap
        for (var j = 0; j < valArr.length; j++) {
          newArr[indArr[j+1]] = valArr[j+2];
          newArr[indArr[j]] = valArr[j+1];
        }

        console.log("newArr: " + newArr);
        result = newArr.join('').toString();        
        return result;
      }; //end function

      //SwapII("Hello -5LOL6");
      //SwapII("2S 6 du5d4e");

      //Time Convert
      var TimeConvert = function (num) {
        var hours = 0;
        var min = 0;
        var result = '';

        if (num > 60) {
          hours = parseInt(num / 60);
          min = parseInt(num % 60);
        } else {
          hours = 0;
          min = parseInt(num);
        }
        console.log(hours + ":" + min);
        result = hours + ":" + min;        
        return result;
      }; //end function

      TimeConvert(126);
      TimeConvert(45);

      //Alphabet Soup
      var AlphabetSoup = function (str) {
        var strArr = str.split('');
        console.log(strArr);

        var newArr = [];
        var result = '';

        //sort
        newArr = strArr.sort();

        result = newArr.join('').toString();
        console.log(result);        
        return result;
      }; //end function

      AlphabetSoup('coderbyte');
      AlphabetSoup('hooplah');

      //AB Check
      var ABCheck = function (str) {
        var strArr = str.split('');
        console.log(strArr);

        var count = 0;
        var bool = 'false';

        for (var i = 0; i < strArr.length; i++) {
          if (strArr[i] === 'a' && strArr[i+4] === 'b') {
            count++;
            bool = 'true';
          }
        }
        console.log("Count: " + count + "\nBool: " + bool);        
        return bool;
      }; //end function

      ABCheck('after badly');
      ABCheck('Laura sobs');

      //ABCheck - Version 2 (12/14/15)
      var abCheck = function (str) {
        var tempArr = str.split('');
        console.log(tempArr);

        var aInd = 0;
        var bInd = 0;
        var diff = 0;

        for (var i = 0; i < tempArr.length; i++) {
          if (tempArr[i] === 'a') {
            aInd = i;
          } else if (tempArr[i] === 'b') {
            bInd = i;
          }
        }
        diff = parseInt(bInd - aInd);
          console.log(aInd, bInd, diff);

        if (diff === 4) {
          return true;
        } else {
          return false;
        }
      };

      console.log(abCheck('after badly'));
      console.log(abCheck('Laura sobs'));



      //Vowel Count

      //isVowel
      var isVowel = function (el) {
        var vowels = 'aeiou'.split('');
        for (var i = 0; i < vowels.length; i++) {
          if (el === vowels[i]) {
            return true;
          }
        }
      }; //end function

      var VowelCount = function (str) {
        var strArr = str.split('');
        console.log(strArr);

        var count = 0;

        for (var i = 0; i < strArr.length; i++) {
          if (isVowel(strArr[i])) {
            count++;
          }
        }
        console.log("Count: " + count);        
        return count;
      }; //end function

      VowelCount('hello');
      VowelCount('coderbyte');

      //Word Count
      var WordCount = function (str) {
        var strArr = str.split(' ');
        console.log(strArr);

        var result = strArr.length;
        console.log("Result: " + result);        
        return result;
      }; //end function

      WordCount('Hello World');
      WordCount('one 22 three');

      //Ex Oh
      var ExOh = function (str) {
        var strArr = str.split('');
        console.log(strArr);

        var countX = 0;
        var countOH = 0;
        var bool = 'false';

        //edge cases
        if (strArr.length < 2) {
              if (strArr[0] === 'x') {
                countX++;
              } else if (strArr[0] === 'o') {
                countOH++;
              }          
          return bool;
        }

        for (var i = 0; i < strArr.length; i++) {
          if (strArr[i] === 'x') {
            countX++;
          } else if (strArr[i] === 'o') {
            countOH++;
          }
        }

        if (countX === countOH) {
          bool = 'true';
        } else {
            return bool;
          }

        console.log("Bool: " + bool);        
        return bool;
      }; //end function

      ExOh('xooxxo');
      ExOh('x');

      //Palindrome
      var Palindrome = function (str) {
        var strArr = str.split('');
        var revArr = strArr.reverse();

        //trim whitespace
        for (var i = 0; i < strArr.length; i++) {
          strArr[i] = strArr[i].trim();
          revArr[i] = revArr[i].trim();
        }
        console.log('strArr: ' + strArr + '\nrevArr: ' + revArr);

        var nStr = strArr.join('');
        var revStr = revArr.join('');
        console.log('nStr: ' + nStr + '\nrevStr: ' + revStr);

        var bool = 'false';

        if (nStr !== revStr) {          
          return bool;
        } else {
            bool = 'true';            
        }
        console.log("Bool: " + bool);
        return bool;
      }; //end function

      Palindrome('never odd or even');
      Palindrome('eye');

      //Bracket Matcher
      var BracketMatcher = function (str) {
        var nArr = str.split('');
        console.log("nArr: " + nArr);

        var countLeft = 0;
        var countRight = 0;

        for (var i = 0; i < nArr.length; i++) {
          if (nArr[i] === '(') {
            countLeft++; //count left BracketMatcher
          } else if (nArr[i] === ')') {
            countRight++; //count right BracketMatcher
          }
        }

        console.log("countLeft: " + countLeft + "\ncountRight: " + countRight);

        //check
        if (countLeft === 0 && countRight === 0) {
          console.log("result: " + '1');          
          return 1;
        } else if (countLeft === countRight) {
          console.log("result: " + '1');          
            return 1;
          } else {
            console.log("result: " + '0');            
              return 0;
            }
      }; //end function

      BracketMatcher('(coder)(byte))');
      BracketMatcher('(c(oder)) b(yte)');

      //String Reduction

        //match function -- String w/ 2 elements
        var circMatch = function (elem1, elem2) {
          var temp = '';
          if (elem1 === 'a' && elem2 === 'b') {
            temp = ('c');
          } else if (elem1 === 'a' && elem2 === 'c') {
              temp = ('b');
            } else if (elem1 === 'b' && elem2 === 'a') {
                temp = ('c');
              } else if (elem1 === 'b' && elem2 === 'c') {
                  temp = ('a');
                } else if (elem1 === 'c' && elem2 === 'a') {
                    temp = ('b');
                  } else if (elem1 === 'c' && elem2 === 'b') {
                      temp = ('a');
                    } else {
                        temp = elem1;
                    }

          console.log("temp: " + temp);
          return temp;
        }; //end callback function

        var identical = function (arr) {
          for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] !== arr[i+1]) {
              return false;
            }
          }
          return true;
        }; //end function

      var StringReduction = function (str) {
        var newArr = [];
        var result = 0;
        var nStr = '';

        var myArr = str.split('');
        console.log("myArr: " + myArr);

        //if all elements are the same
        for (var j = 0; j < myArr.length; j++) {
          if (identical(myArr)) {
            result = myArr.length;
            console.log("result: " + result);            
            return result;
          }
        }

        //if two elements are the seame (continguous)
        for (var k = 0; k < myArr.length; k+=2) {
          if (myArr[k] === myArr[k+1]) {
            newArr.push(myArr[k], myArr[k+1]);
            console.log("newArr: " + newArr);
          } else {
              newArr.push(circMatch(myArr[k],myArr[k+1]));
              console.log("newArr: " + newArr);
          }
        }

        // var nArr = str.match(/.{1,2}/g);
        // console.log(nArr);
        //
        // for (var i = 0; i < nArr.length; i++) {
        //   var mArr = nArr[i].split('');
        //   console.log("mArr: " + mArr);
        //   if (mArr[0] !== mArr[1]) {
        //     newArr.push(circMatch(nArr[i]));
        //     console.log("newArr: " + newArr);
        //   } else {
        //     newArr.push(mArr);
        //   }
        // }

        //join values of newArr
        nStr = newArr.join('').toString();
        console.log("nStr: " + nStr);

        //check if all values are same
        var temp = newArr[0];
        for (var j = 1; j < newArr.length; j++) {
          if (newArr[j] !== temp) {
            return StringReduction(nStr);
          }
        }
        result = nStr.length;
        console.log("result: " + result);        
        return result;
      }; //end function

      StringReduction("abcabc");
      StringReduction("cccc");

      //Arith Geo
      var ArithGeo = function (arr) {
        var result = '';
        var diff = parseFloat(arr[1] - arr[0]).toFixed(2);
        var ratio = parseFloat(arr[1] / arr[0]).toFixed(2);
        var temp = '';
        var bool = false;

        console.log("diff: " + diff + "\nratio: " + ratio);

        for (var i = 0; i < arr.length - 1; i++) {
          if (parseFloat(arr[i+1] - arr[i]).toFixed(2) === diff) {
            var tempDiff = parseFloat(arr[i+1] - arr[i]).toFixed(2);
            bool = true;
            temp = 'arith';
            console.log("tempDiff: " + tempDiff + "\nArithmetic: " + bool);
          } else if (parseFloat(arr[i+1] / arr[i]).toFixed(2) === ratio) {
              var tempRatio = parseFloat(arr[i+1] / arr[i]).toFixed(2);
              bool = true;
              temp = 'geo';
              console.log("tempRatio: " + tempRatio + "\nGeometric: " + bool);
            } else {
                temp = 'none';
            }
        }

        if (temp === 'arith') {
          result = 'Arithmetic';
        } else if (temp === 'geo') {
            result = 'Geometric';
          } else if (temp === 'none') {
            result = '-1';
            }

        console.log(result);        
        return result;
      }; //end function

      ArithGeo([5,10,15]);
      ArithGeo([2,4,16,24]);
      ArithGeo([3,9,27,81]);

      //Letter Count
      var LetterCount = function (str) {
        var wordArr = str.split(' ');
        console.log("wordArr: " + wordArr);

        var letterArr = [];
        var countArr = [];
        var wordArr2 = [];
        var count = 0;
        var result = '';

        var letArr = [];

        //split words into letters
        for (var k = 0; k < wordArr.length; k++) {
          letterArr.push(wordArr[k].split(''));
          console.log("letterArr: " + letterArr);

          for (var l = 0; l < letterArr.length - 1; l++) {
            console.log("L FOR LOOP");
            if (letterArr[l] === letterArr[l+1]) {
              console.log("L IF");
              count++;
              letArr.push(letterArr[l]);
              countArr.push(count);
              console.log("letterArr[l]: " + letterArr[l] + "\ncount: " + count + "\nletArr: " + letArr + "\ncountArr: " + countArr);
            } else {
                result = '-1';
              }
          }
        }

        // for (var i = 0; i < wordArr.length; i++) {
        //   for (var j = 0; j < wordArr[i].length; j++) {
        //     if (wordArr[i][j] === wordArr[i][j+1]) {
        //       count++; //increment count if letter is same
        //       letterArr.push(wordArr[i][j]); //push same letter into new array
        //       countArr.push(count);
        //       wordArr2.push(wordArr[i]);
        //       console.log("wordArr[i]: " + wordArr[i] + "\ncount: " + count + "\nletterArr: " + letterArr + "\ncountArr: " + countArr + "\nwordArr2: " + wordArr2);
        //     } else {
        //         result = '-1';
        //       }
        //   }
        //   console.log("count: " + count + "\nletterArr: " + letterArr + "\ncountArr: " + countArr);
        //   result = wordArr[i];
        // }        
        return result;
      }; //end function

      LetterCount('Hello apple pie');

      //Changing Sequence
      var ChangingSequence = function (arr) {
        var countUp = 0;
        var countDown = 0;
        var result = '';

        for (var i = 0; i < arr.length - 1; i++) {
          if (arr[i] < arr[i+1]) {
            countUp++; //increment count as sequence increases
            console.log("countUp: " + countUp);
          } else if (arr[i] > arr[i+1]) {
              countDown++; //increment count as sequence decreases
              console.log("countDown: " + countDown);
            }
        }
        if (countUp === 0 || countDown === 0) {
          result = '-1';
        } else if (arr[0] < arr[1]) {
            result = countUp.toString();
          } else if (arr[0] > arr[1]) {
              result = countDown.toString();
            }
            console.log("result: " + result);            
            return result;
      }; //end function

      ChangingSequence([-4, -2, 9, 10]);
      ChangingSequence([5, 4, 3, 2, 10, 11]);
      ChangingSequence([5, 4, 3, 2, 10, 11, 15, 19, 16, 13, 9]);

      //runLength
      var RunLength = function (str) {
        var arr = str.split('');
        var count = 0;
        var result = '';
        var tempArr = [];

        for (var i = 0; i < arr.length - 1; i += count) {
          count = 1; //reinitialize count for each 'i'
          for (var j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
              console.log("i: " + i + "\nj: " + j + "\narr[i]: " + arr[i] + "\narr[j]: " + arr[j]);
              count++; //increment count for same letter
            } else {
              tempArr.push(count+arr[i]);
              break;
            }
          }
        }
        //edge Cases
        if (arr[arr.length - 2] !== arr[arr.length - 1]) {
          tempArr.push(1+arr[arr.length-1]);
        } else {
          tempArr.push(count+arr[arr.length - 1]);
        }
        console.log(tempArr);
        result = tempArr.join('').toString();        
        return result;
      }; //end function

      RunLength("aabbcde");
      RunLength("wwwbbbw");

      //Three-Five Multiples - sum of all multiples of 3 and 5 below num
      var ThreeFiveMultiples = function (num) {
        var sumThree = 0;
        var sumFive = 0;
        var sum = 0;

        for (var i = 0; i < num; i++) {
          if (i % 3 === 0) {
            sumThree += i;
          } else if (i % 5 === 0) {
            sumFive += i;
          }
        }
        sum = parseInt(sumThree + sumFive);
        console.log("sum: " + sum);        
        return sum;
      }; //end function

      ThreeFiveMultiples(10);

      //CoinDeterminer
      var CoinDeterminer = function (num) {

      }; //end function

      //Fibonacci Checker
      var isFibonacci = function (n) {
        if (n <= 2) {
          return 1;
        } else {
          return this.isFibonacci(n-1) + this.isFibonacci(n-2);
        }
      }; //end callback

      var fibonacciChecker = function (num) {
        var i = 2;
        var newArr = [];
        while (i <= num) {
          newArr.push(isFibonacci(i));
          i++;
          if (_.contains(newArr,num)) {
            break;
          } else if (fibonacci(i) > num) {
            break;
          }
        }
        return _.contains(newArr,num) ? 'yes' : 'no';
      }; //end function

      fibonacciChecker(34);
      fibonacciChecker(54);

      //Division Stringified
      var divisionStringified = function (num1, num2) {
        var result = 0;
        var digArr = [];
          result = parseInt(num1 / num2);
        if (result < 1000) {
            return Math.round(result);
        } else {
          digArr = result.toString().split('');
          console.log(digArr);
          for (var i = digArr.length - 3; i >= 0; i-=3) {
            digArr.splice(i,0,',');
            console.log("i: " + i);
          }
        }
        console.log(digArr);
        return digArr.join('');
      };

      divisionStringified(123456789,326);

      //Overlapping Ranges
      var overlappingRanges = function (arr) {
        var bool = false;
        var rangeOne = [];
        var rangeTwo = [];
        var count = 0;

        rangeOne[0] = arr[0];

        for (var i = 1; i <= (arr[1] - arr[0]); i++) {        
          rangeOne.push(arr[0] + i);
        }
        console.log('rangeOne ' , rangeOne);

        rangeTwo[0] = arr[2];
        
        for (var j = 1; j <= (arr[arr.length - 2] - arr[arr.length - 3]); j++) {
          rangeTwo.push(arr[2] + j);          
        }
        console.log('rangeTwo ' , rangeTwo);

        //compare length of arrays
        if (rangeOne.length > rangeTwo.length) {        
          for (var k = 0; k < rangeTwo.length; k++) {
            for (var l = 0; l < rangeOne.length; l++) {
              if (rangeTwo[k] === rangeOne[l]) {                
                count++; //increment count if same number is found
              }
            }
          }
        } else {
          for (var l = 0; l < rangeOne.length; l++) {
            for (var k = 0; k < rangeTwo.length; k++) {
              if (rangeOne[l] === rangeTwo[k]) {
                count++; //increment count if same number is found
              }
            }
          }
        }
        if (count >= arr[arr.length - 1]) {
          bool = true;          
        }
        return bool;        
      };