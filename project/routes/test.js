const router = require("express").Router();
const User = require("../models/User");

async function updateMbti(user) {
    await user.updateOne({ $set: { mbti: user.ei + user.sn + user.tf + user.pj } });
}

//ei필드 
router.put("/:id/ei/:value", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $set: { ei: req.params.value } }, { new: true });  
        await updateMbti(user);
        return res.status(200).json(`EI 컬럼에 '${req.params.value}'를 저장했습니다.`);
    } catch(err) {
        return res.status(500).json(err);
    }
});

//sn필드
router.put("/:id/sn/:value", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $set: { sn: req.params.value } }, { new: true });  
        await updateMbti(user);
        return res.status(200).json(`SN 컬럼에 '${req.params.value}'를 저장했습니다.`);
    } catch(err) {
        return res.status(500).json(err);
    }
});

//tf컬럼
router.put("/:id/tf/:value", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $set: { tf: req.params.value } }, { new: true });  
        await updateMbti(user);
        return res.status(200).json(`TF 컬럼에 '${req.params.value}'를 저장했습니다.`);
    } catch(err) {
        return res.status(500).json(err);
    }
});

//pj컬럼
router.put("/:id/pj/:value", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $set: { pj: req.params.value } }, { new: true });  
        await updateMbti(user);
        return res.status(200).json(`PJ 컬럼에 '${req.params.value}'를 저장했습니다.`);
    } catch(err) {
        return res.status(500).json(err);
    }
});



module.exports = router;

