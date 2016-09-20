/* 
if we are to start our Tribonacci sequence with [1,1,1] as a starting input (AKA signature), we have this sequence:

[1,1,1,3,5,9,17,31,...]
But what if we started with [0,0,1] as a signature? As starting with [0,1] instead of [1,1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0,0,1,1,2,4,7,13,24,...]

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n==0, then return an empty array and be ready for anything else which is not clearly specified ;)
 */

function tribonacci(signature,n){
  var sequence;

  if(n <= 3){
  sequence = [];
    for (var i = 0; i < n; i++) {
      sequence.push(signature[i]);
    }
  }else{
    sequence = signature
    for (var i = 3; i < n; i++) {
      var next = sequence[i-3] + sequence[i-2] + sequence[i-1];
      sequence.push(next);
    }
  }
  return sequence;
};

