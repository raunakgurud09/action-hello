import axios from "axios";
import fs from "fs";

const endPoint = "https://gql.hashnode.com/";

const graphqlQuery = {
  operationName: "Me",
  query: `query Me {
    me {
      id
      username
      name
    }
  }
  `,
  variables: {},
};
// "bcd8acf8-7450-4415-91db-6047d2e99da9"
export const queryMe = async (hashnodeKey) => {
  const token = hashnodeKey;

  if (!token) {
    console.log("token not found");
    return;
  }
  const headers = {
    "Content-Type": "application/json",
    Authorization: `${token}`,
  };

  try {
    const {
      data: { data },
    } = await axios({
      url: endPoint,
      method: "post",
      data: graphqlQuery,
      headers: headers,
    });

    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

queryMe();

// PublishPostInfo()
//   .then((res) => {
//     const {
//       data: { data },
//     } = res;

//     console.log(data);

//     fs.writeFileSync(
//       "./data/hashnode.json",
//       JSON.stringify({ posts: data.publishPost.post })
//     );
//   }) // will return data object
//   .catch((err) => console.log("err", err)); // err while fetching details
