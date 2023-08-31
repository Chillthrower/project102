const express=require('express');

const router = express.Router();


router.get('/',getPosts)
router.get('/:id',getPost)
router.post('/',addPost)
router.delete('/:id',deletePost)
router.put('/:id',updatePost)



// router.get('/test', postRoutes)



module.exports=router