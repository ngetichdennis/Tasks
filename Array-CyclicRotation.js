function solution(A, K) {
    // If the array is empty or K is 0, return the array as is
  if (!A.length || K === 0) {
      return A;
  }
  
    // ensuring that the  value of K is a positive integer and less than the array list
  K = K % A.length;
  
    // rotated array(new array) using new Array()keyword
  let rotatedA = new Array(A.length);
  
    // Iterate over the elements of A
  for (let i = 0; i < A.length; i++) {
      // Calculate the index of the rotated element.After the rotation the indexof the elements that is at k position ahead will be of the current position i. 
      let rotatedIndex = (i + K) % A.length;
  
      // Assign the element at the original index to the rotated index in the new array
      rotatedA[rotatedIndex] = A[i];
  }
  
    // Return the rotated array
  return rotatedA;
  }
  

  