import React, { useState } from "react";

import FileCompressionSwitch from "./Switches/FileCompressionSwitch";
import FileEncrptionSwitch from "./Switches/FileEncrptionSwitch";
import FileValidationSwitch from "./Switches/FileValidationSwitch";
import PurgeFilesSwitch from "./Switches/PurgeFilesSwitch";
import VersionSwitch from "./Switches/VersionSwitch";
import { useDispatch, useSelector } from "react-redux";

import "./Migration.css";
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core";

import DuplicateSwitch from "./Switches/DuplicateSwitch";
const style = {
  Maincontainer: {
    display: "flex",
    flexDirection: "column",
    fontSize: "12PX",
  },
  filterHeader: {
    padding: "10px 10px",
    color: "#064E98",
    fontSize: "medium",
    fontWeight: "600",
    height: "40px",
    border: "1px solid gray",
    backgroundColor: "#EAEEF1",
    width: "100%",
  },
  filterData: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
    color: "#A2ADB8",
  },
  TextFiledStyle: {
    width: "250px",
    height: "10px",
  },

  selectStyle: {
    width: "250px",
  },

  SwitchStyle: {
    width: 42,
    height: 26,
    padding: 0,
  },

  RadioStyle: {
    width: 25,
    height: 25,
    marginRight: 30,
  },
  RadioButtonDiv: {
    display: "flex",
    alignItems: "center",
  },
  labelStyle: {
    marginRight: 20,
  },
  textField: {
    marginLeft: 8,
    marginRight: 8,
    width: 200,
  },
  filterFooter: {
    border: "1px solid gray",
    height: 50,
    width: "100%",
    marginTop: 2,
    display: "flex",
    justifyContent: "flex-end",
  },
  saveButton: {
    marginRight: 20,
    width: 200,
    height: 40,
    marginTop: 2,
    borderRadius: 5,
    backgroundColor: "#0559AD",
    color: "white",
    outlineWidth: 0,
  },
};

const Migration = (props) => {
  const dispatch = useDispatch();
  const { classes } = props;
  const [name, setName] = useState("");
  const [threads, setThreads] = useState();
  const [duplicate, setDuplicate] = useState();
  const [fileCompression, setFileCompression] = useState({
    type: "",
    toggle: true,
  });
  const [fileEncryption, setFileEncryption] = useState("N");
  const [version, setVersion] = useState(null);
  const [fileValidation, setFileValidation] = useState({
    alg: null,
    toggle: true,
  });

  const [purgeFiles, setPurgeFiles] = useState({
    toggle: "N",
    startDate: null,
    EndDate: null,
  });

  const handleChange = (e) => {
    dispatch({
      type: "Save/Continue",
      payload: {
        applyEncryption: fileEncryption,
        fileArchiveName: name,
        purgeFile: purgeFiles.toggle,
        purgeFileEndDate: purgeFiles.EndDate,
        purgeFileStartDate: purgeFiles.startDate,
        fileCompression: fileCompression.type,
        noOfThreads: threads,
        runChkDuplicate: duplicate,
        validationAlg: fileValidation.alg,
        versionEnable: version,
      },
    });
  };

  const handleFileEncryption = (value) => {
    setFileEncryption(value);
  };
  const handleFileCompression = (value) => {
    setFileCompression({ ...fileCompression, toggle: value });
  };
  const handleDuplicate = (value) => {
    setDuplicate(value);
  };

  const handleVersionEnable = (value) => {
    setVersion(value);
  };
  const handleFileValidation = (value) => {
    setFileValidation({ ...fileValidation, toggle: value });
  };

  const handlePurgeFiles = (value) => {
    setPurgeFiles({ ...purgeFiles, toggle: value });
  };

  return (
    <div>
      <Grid container className={classes.Maincontainer} lg={12}>
        <Grid item className={classes.filterHeader}>
          <p>Migration Details</p>
        </Grid>
        <Grid item className={classes.filterData}>
          <label>Name</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className={classes.TextFiledStyle}
            size="small"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item className={classes.filterData}>
          <label>Number of Threads</label>
          <FormControl
            variant="outlined"
            className={classes.selectStyle}
            size="small"
          >
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Age"
              value={threads}
              onChange={(e) => setThreads(e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item className={classes.filterData} lg={1} md={1}>
          <p>Run Meta Data Check Duplicate*</p>
          <DuplicateSwitch checkduplicate={handleDuplicate} labelname="" />
        </Grid>
        <Grid item className={classes.filterData}>
          <p>File Compression</p>

          <Grid className={classes.RadioButtonDiv}>
            <FileCompressionSwitch
              checktoggle={handleFileCompression}
              labelname=""
            />
            <input
              type="radio"
              name="filecompression"
              value="GSAP"
              className={classes.RadioStyle}
              disabled={fileCompression.toggle === true}
              onChange={(e) =>
                setFileCompression({ ...fileCompression, type: e.target.value })
              }
            />
            <label className={classes.labelStyle}>GSAP</label>
            <input
              type="radio"
              id="female"
              name="filecompression"
              value="SNAPPY"
              className={classes.RadioStyle}
              onChange={(e) =>
                setFileCompression({ ...fileCompression, type: e.target.value })
              }
              disabled={fileCompression.toggle === true}
            />
            <label className={classes.labelStyle}>SNAPPY</label>
          </Grid>
        </Grid>
        <Grid item className={classes.filterData}>
          <p>File Encryption</p>
          <FileEncrptionSwitch
            checkFileEncryption={handleFileEncryption}
            labelname=""
          />
        </Grid>
        <Grid item className={classes.filterData}>
          <p>Version Enable</p>
          <VersionSwitch checkversion={handleVersionEnable} labelname="" />
        </Grid>
        <Grid item className={classes.filterData}>
          <p>File Validation*</p>

          <Grid className={classes.RadioButtonDiv}>
            <FileValidationSwitch
              checkfileValidation={handleFileValidation}
              labelname=""
            />
            <input
              type="radio"
              name="filevalidation"
              value="sha1"
              className={classes.RadioStyle}
              onChange={(e) =>
                setFileValidation({
                  ...fileValidation,
                  alg: e.target.value,
                })
              }
              disabled={fileValidation.toggle === true}
            />
            <label className={classes.labelStyle}>SHA1</label>
            <input
              type="radio"
              name="filevalidation"
              value="md5"
              className={classes.RadioStyle}
              onChange={(e) =>
                setFileValidation({
                  ...fileValidation,
                  alg: e.target.value,
                })
              }
              disabled={fileValidation.toggle === true}
            />
            <label className={classes.labelStyle}>MD5</label>
          </Grid>
        </Grid>
        <Grid item className={classes.filterData}>
          <p>Purge Files</p>
          <PurgeFilesSwitch checkPurgeFiles={handlePurgeFiles} labelname="" />
        </Grid>
        <Grid item>
          <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            disabled={purgeFiles.toggle === "N"}
            onChange={(e) =>
              setPurgeFiles({ ...purgeFiles, startDate: e.target.value })
            }
          />
          <TextField
            id="date"
            label="End Date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            disabled={purgeFiles.toggle === "N"}
            onChange={(e) =>
              setPurgeFiles({ ...purgeFiles, EndDate: e.target.value })
            }
          />
        </Grid>
        <Grid item className={classes.filterFooter}>
          <button className={classes.saveButton} onClick={handleChange}>
            Save & Continue
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(style)(Migration);
