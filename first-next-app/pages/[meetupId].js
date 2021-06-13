import { ObjectId } from "bson";
import Head from "next/head";
import { useRouter } from "next/router";
import MeetupDetail from "../components/meetups/MeetupDetail";
import { getDbClient } from "../utils/db";

const MeetupDetailPage = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  const { meetupData } = props;

  return (
    <>
      <Head>
        <title>Meetup detail</title>
        <meta type="description" content="Meetup detail description" />
      </Head>
      <MeetupDetail {...meetupData} />
    </>
  );
};

export async function getStaticPaths() {
  const dbClient = await getDbClient("meetup_app");
  const collection = dbClient.db("meetup_app").collection("meetups");

  const meetups = await collection.find().toArray();
  dbClient.close();

  const paths = meetups.map((item) => {
    return { params: { meetupId: item._id.toString() } };
  });

  return {
    fallback: true,
    paths: paths,
  };
}

export async function getStaticProps(context) {
  const dbClient = await getDbClient("meetup_app");
  const collection = dbClient.db("meetup_app").collection("meetups");

  const meetup = await collection.findOne({
    _id: new ObjectId(context.params.meetupId),
  });
  dbClient.close();

  const { _id, ...res } = meetup;

  return {
    props: {
      meetupData: { ...res },
    },
  };
}

export default MeetupDetailPage;
