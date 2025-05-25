function argConverter(arg) {
    if (isNaN(parseInt(arg))) {
        console.log("Not a number");
    } else {
        console.log(parseInt(arg));
    }
}

argConverter(process.argv[2]);