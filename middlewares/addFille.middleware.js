const multer = require("multer");
const moment = require("moment");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "images/user/");
  },
  filename(req, file, cb) {
    const date = moment().format("DDMMYYY-HHmmss_SSS");
    cb(null, `${date}-${file.originalname}`);
  },
});

const types = ["image/png", "image/jpeg", "image/jpg"];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limits = {
  filesize: 1024 * 1024 * 5,
};

module.exports = multer({ storage, limits, fileFilter });
