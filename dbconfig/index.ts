import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://sujtehte:oOTPPGPbi-hytk_O1LK2H2A01yjsnCS3@babar.db.elephantsql.com/sujtehte"
);

export const ConnectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
