const arg = process.argv[2];

if (/^-?\d+$/.test(arg)) {
    console.log("My number: " +  parseInt(arg));
} else console.log("Not a number");