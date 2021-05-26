import {
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  RadioStyle: {
    width: 20,
    height: 20,
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
    marginTop: 3,
    borderRadius: 5,
    backgroundColor: "#0559AD",
    color: "white",
    outlineWidth: 0,
    cursor: "pointer",
  },
};

function MigratinDetails(props) {
  const dispatch = useDispatch();
  const { classes } = props;
  const [name, setName] = useState("");
  const [threads, setThreads] = useState();
  const [runMetaData, setRunMetaData] = useState({
    toggle: false,
    value: "",
  });
  const [fileCompression, setFileCompression] = useState({
    toggle: false,
    value: null,
  });

  const [fileEncryption, setFileEncryption] = useState({
    toggle: false,
    value: "N",
  });

  const [version, setVersion] = useState({
    toggle: false,
    value: null,
  });
  const [fileValidation, setFileValidation] = useState({
    toggle: false,
    alg: null,
  });
  const [purgeFiles, setPurgeFiles] = useState({
    toggle: false,
    value: "N",
    StartDate: null,
    EndDate: null,
  });

  const handlerunMetaData = () => {
    if (runMetaData.toggle === true) {
      setRunMetaData((prevState) => ({
        ...prevState,
        toggle: false,
        value: "",
      }));
      console.log(runMetaData);
    } else {
      setRunMetaData((prevState) => ({
        ...prevState,
        toggle: true,
        value: "Y",
      }));
      console.log(runMetaData);
    }
  };
  const handleFileCompression = () => {
    if (fileCompression.toggle === true) {
      setFileCompression((prevState) => ({ ...prevState, toggle: false }));
      console.log(fileCompression);
    } else {
      setFileCompression((prevState) => ({ ...prevState, toggle: true }));
      console.log(fileCompression);
    }
  };
  const handleFileEncryption = () => {
    if (fileEncryption.toggle === true) {
      setFileEncryption((prevState) => ({
        ...prevState,
        toggle: false,
        value: "N",
      }));

      console.log(fileEncryption);
    } else {
      setFileEncryption((prevState) => ({
        ...prevState,
        toggle: true,
        value: "Y",
      }));
      console.log(fileEncryption);
    }
  };
  const handleVesrion = () => {
    if (version.toggle === true) {
      setVersion((prevState) => ({
        ...prevState,
        toggle: false,
        value: null,
      }));

      console.log(version);
    } else {
      setVersion((prevState) => ({
        ...prevState,
        toggle: true,
        value: "Y",
      }));
      console.log(version);
    }
  };

  const handleFileValidation = () => {
    if (fileValidation.toggle === true) {
      setFileValidation((prevState) => ({
        ...prevState,
        toggle: false,
      }));
      console.log(fileValidation);
    } else {
      setFileValidation((prevState) => ({
        ...prevState,
        toggle: true,
      }));
      console.log(fileValidation);
    }
  };

  const handlePurgeFiles = () => {
    if (purgeFiles.toggle === true) {
      setPurgeFiles((prevState) => ({
        ...prevState,
        toggle: false,
        value: "N",
      }));
      console.log(purgeFiles);
    } else {
      setPurgeFiles((prevState) => ({
        ...prevState,
        toggle: true,
        value: "Y",
      }));
      console.log(purgeFiles);
    }
  };

  const SaveStore = () => {
    dispatch({
      type: "SAVE_CONINUE",
      payload: {
        applyEncryption: fileEncryption.value,
        fileArchiveName: name,
        purgeFile: purgeFiles.value,
        purgeFileEndDate: purgeFiles.EndDate,
        purgeFileStartDate: purgeFiles.StartDate,
        fileCompression: fileCompression.value,
        noOfThreads: threads,
        runChkDuplicate: runMetaData.value,
        validationAlg: fileValidation.alg,
        versionEnable: version.value,
      },
    });
  };
  return (
    <Grid container className={classes.Maincontainer}>
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
      <Grid item className={classes.filterData}>
        <p>Run Meta Data Check Duplicate*</p>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={runMetaData.toggle}
              onChange={handlerunMetaData}
            />
          }
        />
      </Grid>
      <Grid item className={classes.filterData}>
        <p>File Compression</p>
        <Grid className={classes.RadioButtonDiv}>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={fileCompression.toggle}
                onChange={handleFileCompression}
              />
            }
          />
          <input
            type="radio"
            name="filecompression"
            value="GSAP"
            className={classes.RadioStyle}
            disabled={fileCompression.toggle === false}
            onChange={(e) =>
              setFileCompression({ ...fileCompression, value: e.target.value })
            }
          />
          <label className={classes.labelStyle}>GSAP</label>
          <input
            type="radio"
            id="female"
            name="filecompression"
            value="SNAPPY"
            className={classes.RadioStyle}
            disabled={fileCompression.toggle === false}
            onChange={(e) =>
              setFileCompression({ ...fileCompression, value: e.target.value })
            }
          />
          <label className={classes.labelStyle}>SNAPPY</label>
        </Grid>
      </Grid>
      <Grid item className={classes.filterData} lg={1} md={1}>
        <p>File Encription</p>
        <FormControlLabel
          control={
            <Switch
              checked={fileEncryption.toggle}
              onChange={handleFileEncryption}
              color="primary"
            />
          }
        />
      </Grid>
      <Grid item className={classes.filterData} lg={1} md={1}>
        <p>Version Enable</p>
        <FormControlLabel
          control={
            <Switch
              checked={version.toggle}
              onChange={handleVesrion}
              color="primary"
            />
          }
        />
      </Grid>
      <Grid item className={classes.filterData}>
        <p>File Validation*</p>

        <Grid className={classes.RadioButtonDiv}>
          <FormControlLabel
            control={
              <Switch
                checked={fileValidation.toggle}
                onChange={handleFileValidation}
                color="primary"
              />
            }
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
            disabled={fileValidation.toggle === false}
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
            disabled={fileValidation.toggle === false}
          />
          <label className={classes.labelStyle}>MD5</label>
        </Grid>
      </Grid>
      <Grid item className={classes.filterData}>
        <p>Purge Files</p>
        <FormControlLabel
          control={
            <Switch
              checked={purgeFiles.toggle}
              onChange={handlePurgeFiles}
              color="primary"
            />
          }
        />
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
          disabled={purgeFiles.toggle === false}
          onChange={(e) =>
            setPurgeFiles({ ...purgeFiles, StartDate: e.target.value })
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
          disabled={purgeFiles.toggle === false}
          onChange={(e) =>
            setPurgeFiles({ ...purgeFiles, EndDate: e.target.value })
          }
        />
      </Grid>
      <Grid item className={classes.filterFooter}>
        <button className={classes.saveButton} onClick={SaveStore}>
          Save & Continue
        </button>
      </Grid>
    </Grid>
  );
}

export default withStyles(style)(MigratinDetails);
