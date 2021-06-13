import { getDbClient } from "../../utils/db";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const dbClient = await getDbClient("meetup_app");
  const collection = dbClient.db("meetup_app").collection("meetups");

  const result = await collection.insertOne(data);

  dbClient.close();

  res.status(200).json({ id: result.insertedId });
};

export default handler;
