import { queryMe } from "./query.js";

export const publishToHashnode = async (options) => {
  console.log("op: ", options);

  const response = await queryMe(options.hashnode_key);
  if(!response) {
    return []
  }
  console.log(response);
  return [response];
};
