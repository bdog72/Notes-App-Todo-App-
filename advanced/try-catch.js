const getTip = amount => {
  // return amount * 0.25;
  if (typeof amount === 'number') {
    return amount * 0.25;
  } else {
    throw 'Argument must be a number';
  }
};

try {
  const result = getTip('test');
  console.log(result);
} catch (error) {
  console.log('catch block is running');
}

// console.log(getTip(25));
