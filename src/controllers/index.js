import data from "../model";

export const getAllItems= (req,res)=>{
    res.status(200).send(data);
};

export const getItemById=(req,res)=>{
    const id = req.params.id ;
    const result = data.find(item => item.id == id);
    res.send(result);
};

export const createItem = (req,res)=>{
    const{body} = req;
    data.push(body);

    return res.status(201).json({
        status:201,
        message: 'Created!',
        data:body
    });
}