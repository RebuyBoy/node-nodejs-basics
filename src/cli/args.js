export const parseArgs = () => {
  return process.argv.slice(2)
    .map((elem, i, arr) => {
      if (elem.startsWith("--")) {
        return `${elem.slice(2)} is ${arr[i + 1]}`;
      }
    })
    .filter(elem => elem).join(", ")

};
console.log(parseArgs());