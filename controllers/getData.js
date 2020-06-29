const DbConnect = require("../Config/mysqlConnect")

const getData = (req,res) => {
    const query = "SELECT * FROM users";
    DbConnect.query(query,(err, result)=>{
        if(err){
            return res.status(400).json({
                error: 'Something is wrong. Please try again.'
            })
        }
        else{
            res.json({
                data: result
            })
        }
    })
}

const postImgUrl = (req,res) => {
    const {imgPath} = req.body;
    console.log(imgPath)
    console.log('wdk')

    const query = `INSERT INTO imgspath (path) values('${imgPath}')`;
    DbConnect.query(query,(err,result)=>{
        if(err){
            return res.status(400).json({
                error: "Something is wrong. Cant upload image"
            })
        }
        else{
            res.json({
                msg: "Uploaded Successfully"
            })
        }
    })
}

const getAllImgs = (req,res) => {
    const query = "SELECT * FROM imgspath";
    DbConnect.query(query, (err,result)=>{
        if(err){
            return res.status(400).json({
                error: 'Unable to get images'
            })
        }
        else{
            return res.json({
                data: result
            })
        }
    })
}

module.exports = {getData,postImgUrl,getAllImgs}