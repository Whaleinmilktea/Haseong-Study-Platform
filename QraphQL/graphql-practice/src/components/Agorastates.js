import { graphql } from "@octokit/graphql";

// 무엇을 받아올지 정의하는 쿼리문
const query =`
query {
  repository(owner : "codestates-seb", name : "agora-states-fe") {
    discussions(first : 2) {
      nodes {
        title
      }
    }
  }
}
`

const getAgoraStates = async () => {
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

const Agorastates = () => {
  return (
    <>
      <button onClick={getAgoraStates}>get Data</button>
    </>
  )
}

export default Agorastates