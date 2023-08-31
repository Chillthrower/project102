const express = require('express');
const app = express();
const cookieparser=require('cookie-parser')
const postRoutes = require('./controllers/post.js');
const authRoutes = require('./controllers/auth.js');
const userRoutes = require('./controllers/user.js');
const multer =require('multer');




app.use(express.json());
app.use(cookieparser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });



app.post('/api/upload', upload.single('file'),function(req,res){
res.status(200).json("Image has been uploaded")
})
app.use('/api/posts', postRoutes);
app.use('/api/posts', authRoutes);
app.use('/api/posts', userRoutes);








// pool.query(`select * from hello`,(err,results)=>{
//     if(err){
//         throw err;

//     }
//     console.log(results.rows);
// })
PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Backend is running on : ${PORT}`))