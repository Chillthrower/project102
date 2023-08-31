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

const upload = multer({storage})

app.post('/api/upload',upload.single('file'),function(req,res){
  const file= req.file;

res.status(200).json(file.filename)
})
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);








// pool.query(`select * from hello`,(err,results)=>{
//     if(err){
//         throw err;

//     }
//     console.log(results.rows);
// })
PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Backend is running on : ${PORT}`))