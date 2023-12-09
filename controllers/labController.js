import LabModel from "../models/LabModel.js";


export const labformController = async (req, res) => {
    try {
        const { name, number, pincode, Package, test } = req.body

        const lab = await new LabModel({
            buyer: req.user._id,
            name,
            number,
            pincode,
            Package,
            test,
        }).save();

        res.status(201).send({
            success: true,
            message: "Labreport Register Successfully",
            lab,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registeration',
            error
        })
    }

}


export const labstatusController = async (req, res) => {
    try {
        // Assuming req.user._id is a valid ObjectId
        const orders = await LabModel
            .find({ buyer: req.user._id })
            .populate("buyer", "name");


        res.status(200).json({ orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const getlabReportController = async (req, res) => {
    try {
        const lab = await LabModel
            .find({})
            .populate("buyer", "name")
            .sort({ createdAt: "-1" });
        res.status(200).json({ lab });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error WHile Geting Orders",
            error,
        });
    }
}

