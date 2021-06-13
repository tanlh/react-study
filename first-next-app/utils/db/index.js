import { MongoClient } from "mongodb";

export const getDbClient = (dbName) =>
  MongoClient.connect(
    `mongodb+srv://reactstudy:reactstudy@cluster0.9giih.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  );
