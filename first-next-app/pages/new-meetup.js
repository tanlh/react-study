import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = (meetupData) => {
    axios
      .post("/api/new-meetup", { ...meetupData })
      .then((response) => {
        if (response.status === 200) {
          router.push("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Head>
        <title>Create new meetup</title>
        <meta
          type="description"
          content="Add new meetup to make more friends"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
