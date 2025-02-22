/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 15 === 0) {
    return 'FizzBuzz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i += 1) {
    res *= i;
  }
  return res;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let res = 0;
  for (let i = n1; i <= n2; i += 1) {
    res += i;
  }
  return res;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a + b > c && a + c > b && c + b > a) {
    return true;
  }
  return false;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const leftX = Math.max(rect1.left, rect2.left);
  const rightX = Math.min(rect1.left + rect1.width, rect2.left + rect2.width);
  const botY = Math.max(rect1.top, rect2.top);
  const topY = Math.min(rect1.top + rect1.height, rect2.top + rect2.height);

  if (rightX > leftX && topY > botY) {
    return true;
  }
  return false;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  // throw new Error('Not implemented');
  return (
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2 < circle.radius ** 2
  );
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const curSymbol = str[i];
    if (str.indexOf(curSymbol) === i && str.indexOf(curSymbol, i + 1) === -1) {
      return curSymbol;
    }
  }
  return null;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  return `${isStartIncluded ? '[' : '('}${Math.min(a, b)}, ${Math.max(a, b)}${isEndIncluded ? ']' : ')'
  }`;
  // throw new Error('Not implemented');
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return Number(String(num).split('').reverse().join(''));
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */

// ************  #1
// function isCreditCardNumber(ccn) {
//   const value = ccn.replace(/\D/g, '');

//   let nCheck = 0;
//   let bEven = false;

//   for (let n = value.length - 1; n >= 0; n -= 1) {
//     let nDigit = parseInt(value.charAt(n), 10);

//     // eslint-disable-next-line no-cond-assign
//     if (bEven && (nDigit *= 2) > 9) {
//       nDigit -= 9;
//     }

//     nCheck += nDigit;
//     bEven = !bEven;
//   }

//   return nCheck % 10 === 0;
// }

// ************  #2

function isCreditCardNumber(ccn) {
  const cardNumber = String(ccn);
  let res = 0;
  for (let i = cardNumber.length - 1; i >= 0; i -= 1) {
    let curNum = cardNumber[i] - '0';
    if ((cardNumber.length - i) % 2 === 0) {
      curNum *= 2;
      if (curNum > 9) { curNum -= 9; }
    }
    res += curNum;
  }
  return res % 10 === 0;
}

//   return 0 === ch % 10;
// }

// function isCreditCardNumber(/* ccn */) {
//   throw new Error('Not implemented');
// }
/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function findSum(str) {
  let res = 0;
  for (let i = 0; i < str.length; i += 1) {
    res += Number(str[i]);
  }
  return res;
}

function getDigitalRoot(num) {
  let res = findSum(String(num));
  while (res > 9) {
    res = findSum(String(res));
  }
  return res;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const openBrack = ['[', '(', '{', '<'];
  const pairBrack = {
    ']': '[', ')': '(', '}': '{', '>': '<',
  };
  const stackBrack = [];
  for (let i = 0; i < str.length; i += 1) {
    const curSymb = str[i];
    // ищем парную (открывающую) скобку к нашему текущему элементу
    const pairSymb = pairBrack[curSymb];
    // находим верхний элемент в стеке
    const topElStack = stackBrack[stackBrack.length - 1];
    // если это открывающая скобка
    if (openBrack.includes(curSymb)) {
      // открывающая и закрывающая - одинаковые
      if (curSymb === pairSymb && curSymb === topElStack) {
        stackBrack.pop();
      } else {
        // - кладем ее в стек
        stackBrack.push(curSymb);
      }
    } else { // если закрывающая
      // стек пуст - скобка непарная - ошибка
      if (stackBrack.length === 0) {
        return false;
      }
      // и если это и есть верхний элемент стека, обе скобки удаляем
      if (pairSymb === topElStack) {
        stackBrack.pop();
      } else {
        return false;
      }
    }
  }
  return stackBrack.length === 0;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */

function getCommonDirectoryPath(pathes) {
  let res = '';
  for (let i = 0; i < pathes[0].length; i += 1) {
    const curSymb = pathes[0][i];
    for (let j = 1; j < pathes.length; j += 1) {
      if (curSymb !== pathes[j][i]) {
        const pos = res.lastIndexOf('/');
        if (pos !== -1) {
          res = res.slice(0, pos + 1);
        }
        return res;
      }
    }
    res += curSymb;
  }
  const pos = res.lastIndexOf('/');
  if (pos !== -1) {
    res = res.slice(0, pos + 1);
  }
  return res;
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const rowsA = m1.length;
  const colsA = m1[0].length;
  const rowsB = m2.length;
  const colsB = m2[0].length;
  const C = [];
  if (colsA !== rowsB) return false;
  for (let i = 0; i < rowsA; i += 1) C[i] = [];
  for (let k = 0; k < colsB; k += 1) {
    for (let i = 0; i < rowsA; i += 1) {
      let t = 0;
      for (let j = 0; j < rowsB; j += 1) t += m1[i][j] * m2[j][k];
      C[i][k] = t;
    }
  }
  return C;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function compareValues(a, b, c) {
  if (a === b && b === c && c === a) {
    return a;
  }
  return undefined;
}

function evaluateTicTacToePosition(tc) {
  let chek = compareValues(tc[0][0], tc[0][1], tc[0][2]);
  if (chek) {
    return chek;
  }
  chek = compareValues(tc[1][0], tc[1][1], tc[1][2]);
  if (chek) {
    return chek;
  }
  chek = compareValues(tc[2][0], tc[2][1], tc[2][2]);
  if (chek) {
    return chek;
  }
  chek = compareValues(tc[0][0], tc[1][0], tc[2][0]);
  if (chek) {
    return chek;
  }
  chek = compareValues(tc[0][1], tc[1][1], tc[2][1]);
  if (chek) {
    return chek;
  }
  chek = compareValues(tc[0][2], tc[1][2], tc[2][2]);
  if (chek) {
    return chek;
  }
  chek = compareValues(tc[0][0], tc[1][1], tc[2][2]);
  if (chek) {
    return chek;
  }
  chek = compareValues(tc[2][0], tc[1][1], tc[0][2]);
  if (chek) {
    return chek;
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
