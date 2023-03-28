import { graphql } from "@octokit/graphql";

// 무엇을 받아올지 정의하는 쿼리문
const query =`
query {
  viewer {
    login
  }
}
`

const getIsLogin = async () => {
  try {
    const data = await graphql(query, {
      headers: {
        authorization : `token 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`
      }
    });
    return console.log(data);
  } catch (err) {
    console.log(err)
  }
}

const IsLogin = () => {
  return (
    <>
      <button onClick={getIsLogin}>get IsLogin</button>
    </>
  )
}

export default IsLogin