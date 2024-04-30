function mirror(z) {
    if (Array.isArray(z)) {
      return z.map(mirror).reverse();
    } else {
      return z;
    }
  }
  
  const test1 = mirror([1, 2, [3, [4, 5], 6]]);
  const test2 = mirror([9, 8, [7, [6, 5], 4, [3,2], 1]]);
  const test3 = mirror([0,0,0,1,0])

  console.log(test1); // Output: [[6,[5,4],3],2,1]
  console.log(test2);
  console.log(test3); 
