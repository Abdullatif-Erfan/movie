const fs = require("fs");

const {
  baseURL,
  readJsonFile,
  sendFailedMessage,
  fetchAndStoreDataFromAPI,
  searchAndReturnTheResult
} = require("./reusableMethods");

/**
 * @route   GET
 * @desc    Get Movies
 * @access  Public
 */
exports.getMovies = async (request, response) => {
  try {
    const web_address = baseURL();
    let mainFile = "./movieList.json";

    /* 1: check if file exists */
    if (fs.existsSync(mainFile)) {
      /* 2. if file exists, then check weather it is empty or not */
      fs.readFile(mainFile, (err, file) => {
        if (file.length == 0) {
          console.log("File is empty, wait a minute to get the data ....");
          /**  3. file is empty, and get data from api
           *   4. store into movieList.json file
           *   5. return the data
           */
          fetchAndStoreDataFromAPI(web_address, mainFile, response);
        } else {
          /* file is not empty, and read the file */
          readJsonFile(mainFile, response);
        }
      });
    } else {
      /* file does not exist */
      sendFailedMessage(response, 203, "File does not exist");
    }
  } catch (err) {
    sendFailedMessage(response, 204, err);
  }
};

/**
 * @route   POST
 * @desc    Search a Movies by title
 * @access  Public
 */
exports.searchMovie = async (request, response) => {
  const imdbID = request.params.imdbID;
  // https://www.omdbapi.com/?apikey=70c395f9&i=tt3554046
  const mainURL = require("../config/keys").mainURL;
  const apikey = require("../config/keys").apikey;
  const searchURL = mainURL + "/?apikey=" + apikey + "&i=" + imdbID;
  searchAndReturnTheResult(searchURL, response);
};
