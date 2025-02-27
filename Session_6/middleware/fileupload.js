const  multer = require('multer');

const storage = multer.diskStorage({
    // destination: () =>{};
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
// const upload = multer;

// const upload = multer({dest: 'uploads/'});
const upload = multer({storage:storage});

module.exports = upload;