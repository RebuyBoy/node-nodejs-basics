export const parseArgs = () => {
  const args = process.argv.slice(2);
  let result = "";
  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].slice(2);
    const value = args[i + 1];
    const delimiter = i < args.length - 2 ? ", " : "";
    result += `${propName} is ${value}${delimiter}`
  }
  console.log(result);
};
parseArgs();