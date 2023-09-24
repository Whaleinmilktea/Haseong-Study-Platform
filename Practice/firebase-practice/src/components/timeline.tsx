import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";

const Wrapper = styled.div``;

export interface ITweet {
  // firebase에서 확인
  id: string;
  photo?: string;
  tweet: string;
  userId: string;
  username: string;
  createdAt: number;
}

export default function Timeline() {
  const [tweets, setTweets] = useState<ITweet[]>([]);

  const fetchTweets = async () => {
    const tweetsQuery = query(
      collection(db, "tweets"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(tweetsQuery);
    const tweets = snapshot.docs.map((doc) => {
      const { userId, username, photo, tweet, createdAt } = doc.data();
      return {
        id: doc.id,
        userId,
        username,
        photo,
        tweet,
        createdAt,
      };
    });
    setTweets(tweets)
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return <Wrapper>{JSON.stringify(tweets)}</Wrapper>;
}
