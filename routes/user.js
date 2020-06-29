const express = require("express");
const router = express.Router();
const {getData,postImgUrl,getAllImgs} = require("../controllers/getData")

router.get("/user/data",getData);
router.post("/user/uploadimg",postImgUrl);
router.get("/user/allimgs",getAllImgs);

module.exports = router;