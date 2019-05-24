var sum = 0
for (i = 2; i < process.argv.length; sum += +process.argv[i++]);
console.log(sum)
