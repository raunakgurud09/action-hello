import { queryMe } from "./query";

export const publishToHashnode = async (options) => {
  console.log("op: ", options);

  const response = await queryMe(options.hashnode_key);
  if(!response) {
    return []
  }
  console.log(response);
  return [response];
};
