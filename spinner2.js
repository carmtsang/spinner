//every 200ms

let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinner[i]);
  }, 200 * i);
}
