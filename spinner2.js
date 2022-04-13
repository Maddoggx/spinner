const spin = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    '];

let rounds = 0;
const interval = setInterval(() => {
  rounds++;
  process.stdout.write(spin[rounds]);
  if (rounds === spin.length - 1) {
    process.stdout.write("\n");
    return clearInterval()
  }
}, 300);

