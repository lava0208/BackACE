import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbconfig";
interface UserAttributes {
  id: number;
  username: string;
  password: string;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserOuput extends Required<UserAttributes> {}
class User extends Model<UserAttributes, UserOuput> implements UserAttributes {
  username: string;
  password: string;
  id!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
  }
);
export default User;
