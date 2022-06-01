// implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
export const parseEnv = () => {

  console.log(Object.keys(process.env))
  const environments = process.env;
  const result = Object.keys(environments)
    .filter(key => key.indexOf('RSS_') !== -1)
    .reduce((res, key, i, array) => {
      return res += (`${key}=${environments[key]}${i < array.length - 1 ? "; " : ""}`)
    }, "");

  console.log(result);
};

parseEnv();
