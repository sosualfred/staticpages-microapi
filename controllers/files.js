const File = require("../models/file.model");

/**
 * Controllers for :
 *
 * getFiles
 * getFile,
 * createFile,
 * updateFile,
 * deleteFile
 */
class FileContoller {
  //route hancler to get all files
  getFiles(req, res) {
    let files = Files.find();
    files.then((result) => {
      res.status(200).json({
        status: true,
        message: "Files Found",
        data: result,
      });
    });
  }

  deleteFile(req, res) {
    File.deleteOne({ _id: req.params.id }).then(() => {
      res.status(200).json({
        status: true,
        message: "File Deleted",
      });
    });
  }
}

module.exports = new FileContoller();
