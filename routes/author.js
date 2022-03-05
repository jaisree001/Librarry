const express=require('express')
const router =express.Router()

router.get('/',(req,res)=>{
    res.render('authors/index')
})

router.get('/',(req,res)=>{
    res.render('authors/index')
})

module.exports = router