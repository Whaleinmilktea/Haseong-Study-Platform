import {
  collection,
  // getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";

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

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null
    const fetchTweets = async () => {
      const tweetsQuery = query(
        collection(db, "tweets"),
        orderBy("createdAt", "desc"),
        limit(25)
      );
      // const snapshot = await getDocs(tweetsQuery);
      // const tweets = snapshot.docs.map((doc) => {
      //   const { userId, username, photo, tweet, createdAt } = doc.data();
      //   return {
      //     id: doc.id,
      //     userId,
      //     username,
      //     photo,
      //     tweet,
      //     createdAt,
      //   };
      // });
      unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
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
        setTweets(tweets);
      });
    };
    fetchTweets()
    return () => {
      unsubscribe && unsubscribe(); // 컴포넌트 언마운트 시, listener off
    }
  }, []);

  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}
