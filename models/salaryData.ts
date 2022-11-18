import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbconfig";
interface SalaryAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  salary: any;
}

export interface SalaryInput extends Optional<SalaryAttributes, "id"> {}
export interface SalaryOuput extends Required<SalaryAttributes> {}
class Salary
  extends Model<SalaryAttributes, SalaryOuput>
  implements SalaryAttributes
{
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  salary: any;
  id!: number;
}

Salary.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
  }
);
export default Salary;
