/* // TODO : Create a function where you can call it by writing the code:

 fibonacciGenerator (n)
 Where n is the number of items in the sequence.
 So I should be able to call:
 fibonacciGenerator(3) and get
 [0,1,1] 
*/

function fibonacciGenerator(n) {
  let arr = [];

  if (n === 1) {
    arr = [0];
    console.log(arr);
  } else {
    for (let i = 0; i <= n; i++) {
      if (i === 0) {
        arr.push(i);
      } else if (i === 1) {
        arr.push(i);
      } else {
        if (arr.length === n) {
          console.log(arr);
        } else {
          let res = arr.at(-2) + arr.at(-1);
          arr.push(res);
        }
      }
    }
  }
}

fibonacciGenerator(15);
