import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { sequelize } from "../dbconfig";
interface GraphAttributes {
  id: number;
  values: number;
  gender: string;
}

export interface GraphInput extends Optional<GraphAttributes, "id"> {}
export interface GraphOuput extends Required<GraphAttributes> {}
class Graph
  extends Model<GraphAttributes, GraphOuput>
  implements GraphAttributes
{
  values: number;
  gender: string;
  id!: number;
}

Graph.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    values: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
  }
);
export default Graph;
