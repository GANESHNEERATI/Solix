const initialstate = {
  applyEncryption: "N",

  fileArchiveName: "LFSArchive",

  fileCompression: null,

  noOfThreads: 5,
  runChkDuplicate: "",

  validationAlg: null,
  versionEnable: null,
  purgeFile: "N",
  purgeFileEndDate: null,
  purgeFileStartDate: null,
};

function saveMigration(state = initialstate, action) {
  switch (action.type) {
    case "Save/Continue":
      debugger;
      const {
        applyEncryption,
        fileArchiveName,
        purgeFile,
        purgeFileEndDate,
        purgeFileStartDate,
        fileCompression,
        noOfThreads,
        runChkDuplicate,
        validationAlg,
        versionEnable,
      } = action.payload;

      return {
        ...state,
        applyEncryption,
        fileArchiveName,

        purgeFile,
        purgeFileEndDate,
        purgeFileStartDate,

        fileCompression,
        noOfThreads,
        runChkDuplicate,
        versionEnable,
        validationAlg,
      };

    default:
      return state;
  }
}

export default saveMigration;
