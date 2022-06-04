// implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
export const parseEnv = () => {

  const environments = process.env;
  const result = Object.entries(environments)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ")
  console.log(result);
};

parseEnv();
