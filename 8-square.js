const printSquare = (size) => {
    const numSize = parseInt(size);
  
    if (isNaN(numSize)) {
      console.log("Missing size");
      return;
    }
  
    let i = 0;
    while (i < numSize) {
      console.log("x".repeat(numSize));
      i++;
    }
  };
  
  const args = process.argv.slice(2);
  const size = args[0];
  
  printSquare(size);