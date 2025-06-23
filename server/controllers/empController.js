import Employee from "../model/employee.js";


// Create API
export const create = async (req, res) => {
  try {
    const empData = new Employee(req.body);
    const savedData = await empData.save();

    if (!savedData) {
      return res.status(400).json({ msg: "Failed to save employee data." });
    }

    return res.status(201).json(savedData , { msg: "Employee Added." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error", error });
  }
};

// GetALL API

export const getAll = async (req, res) => {
  try {
    const getData = await Employee.find();

    if (!getData) {
      return res.status(404).json({ msg: "Employee Data Not Found" });
    }

    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error });
  }
};

// getOneAPI
export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const EmpExist = await Employee.findById(id);
    if (!EmpExist) {
      return res.status(404).json({ msg: "Employee Data Not Found" });
    }

    res.status(200).json(EmpExist);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error });
  }
};


// update API
export const Update = async (req, res)=>{
    try {
            const id = req.params.id;
            const EmpExist = await Employee.findById(id);
            if(!EmpExist){
                return res.status(404).json({msg:"Employee Data Not Found."})
            }

            const updatedData = await Employee.findByIdAndUpdate(id , req.body , {new :true});
            res.status(200).json({msg:"Data Updated." , updatedData});
        
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error", error });
    }
}

// Delete API
export const Delete = async (req, res) => {
  try {
    const id = req.params.id;
    const checkExist = await Employee.findById(id);

    if (!checkExist) {
      return res.status(404).json({ msg: "Employee Data Not Found." });
    }

    const deletedEmp = await Employee.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data Deleted Successfully", checkExist });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error });
  }
};
