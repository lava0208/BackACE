import Salary from "../models/salaryData";
export const createSalary = async (res: any): Promise<any> => {
  try {
    return res.status(200).json({
      message: "Salary Created Successfully",
    });
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

export const GetSalaries = async (req: any, res: any) => {
  try {
    let SalaryData;
    if (Object.keys(req.body).length == 0) {
      SalaryData = await Salary.findAll({ limit: 40 });
    } else {
      if (req.body.filter && req.body.order) {
        SalaryData = await Salary.findAll({
          where: {
            gender: req.body.filter,
          },
          order: [["first_name", req.body.order]],
          limit: 40,
        });
      } else {
        SalaryData = await Salary.findAll({
          order: [["first_name", req.body.order]],
          limit: 40,
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
