import Head from "next/head";
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { getDbClient } from "../utils/db";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The first meetup",
    image: "https://recruit4languages.com/app/uploads/2020/05/Paris.jpg",
    description: "First meetup in Paris",
    address: "Paris, French",
  },
  {
    id: "m2",
    title: "The second meetup",
    image: "https://tintuc60giay.com/wp-content/uploads/2021/04/New-York.jpeg",
    description: "Second meetup in New York",
    address: "New York, USA",
  },
  {
    id: "m3",
    title: "The third meetup",
    image:
      "https://www.tripsavvy.com/thmb/qwy_otpnP2gb6Rl6_Y1DlTG_Q5g=/3768x2085/filters:fill(auto,1)/saigon-ho-chi-minh-city-vietnam-5c489f50c9e77c000112d22b.jpg",
    description: "Third meetup in Ho Chi Minh City",
    address: "Ho Chi Minh City, Viet Nam",
  },
];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Meetups App</title>
        <meta
          type="description"
          content="A great Meetups App tracking all your incoming meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// Server side generation, run on every request
// export async function getServerSideProps(context) {
//   const { req, res } = context;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// Static generation
export async function getStaticProps() {
  const dbClient = await getDbClient("meetup_app");
  const collection = dbClient.db("meetup_app").collection("meetups");

  const result = await collection.find().toArray();
  dbClient.close();

  const meetups = result.map((item) => {
    const { _id, ...res } = item;

    return {
      ...res,
      id: _id.toString(),
    };
  });

  return {
    props: {
      meetups: meetups,
    },
    revalidate: 200,
  };
}

export default HomePage;
