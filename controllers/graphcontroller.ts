import Graph from "../models/graphdata";
export const createGraph = async (req: any, res: any): Promise<any> => {
  try {
    const SalaryDetail = await Graph.bulkCreate(req.body);
    return res.status(200).json({
      message: "Salary Created Successfully",
    });
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

export const GetGraph = async (req: any, res: any) => {
  try {
    let SalaryData;
    console.log(Object.keys(req.body).length);
    if (Object.keys(req.body).length == 0) {
      SalaryData = await Graph.findAll({ limit: 60 });
    } else {
      if (req.body.filter && req.body.order) {
        SalaryData = await Graph.findAll({
          where: {
            gender: req.body.filter,
          },
          order: [["values", req.body.order]],
          limit: 60,
        });
      } else {
        SalaryData = await Graph.findAll({
          order: [["values", req.body.order]],
          limit: 60,
        });
      }
    }
    return res
      .status(200)
      .json({ message: "Salary Fetched", data: SalaryData });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: "Something Went Wrong" });
  }
};
