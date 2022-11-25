import multer from "multer"

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "static/")
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/")
        let extension = extArray[extArray.length - 1]
        cb(null, Date.now() + '-' + req.query.login + "." + extension)
    },
})

const upload = multer({ storage: storage })

export { upload }