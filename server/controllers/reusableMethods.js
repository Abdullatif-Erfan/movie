const axios = require("axios");
const fs = require("fs");

// ===== Fetch the data from API and store into movieList.json file =========
function fetchAndStoreDataFromAPI(web_address, mainFile, response) {
  (async () => {
    axios
      .get(web_address)
      .then(result => {
        // check movie records
        if (result.data["Search"].length > 1) {
          writeInToFile(mainFile, result, response);
        } else {
          sendFailedMessage(response, 201, "No data found");
        }
      })
      .catch(error => {
        sendFailedMessage(response, 202, "Error fetching the data");
      });
  })();
}
exports.fetchAndStoreDataFromAPI = fetchAndStoreDataFromAPI;

// ======== search, then return favorite records ========
function searchAndReturnTheResult(searchURL, response) {
  (async () => {
    axios
      .get(searchURL)
      .then(result => {
        // check movie records
        if (result.data["Response"] == "True") {
          // send needeed records
          const required_data = {
            title: result.data["Title"],
            imdbID: result.data["imdbID"],
            director: result.data["Director"],
            plot: result.data["Plot"],
            poster: result.data["Poster"]
          };
          response.status(200).json({
            status: "Success",
            records: required_data
          });
        } else {
          sendFailedMessage(response, 201, "No data found");
        }
      })
      .catch(error => {
        sendFailedMessage(response, 202, "Error fetching the data");
      });
  })();
}
exports.searchAndReturnTheResult = searchAndReturnTheResult;

function baseURL() {
  // https://www.omdbapi.com/?apikey=70c395f9&type=movie&s=space&y=2001&r=json
  /**
   * I prefer the following methods
   */
  const mainURL = require("../config/keys").mainURL;
  const apikey = require("../config/keys").apikey;
  const type = require("../config/keys").type;
  const containTitleWord = require("../config/keys").containTitleWord;
  const year = require("../config/keys").year;
  const format = require("../config/keys").formt;
  const fullAddress =
    mainURL +
    "/?apikey=" +
    apikey +
    "&type=" +
    type +
    "&s=" +
    containTitleWord +
    "&y=" +
    year +
    "&r=" +
    format;
  return fullAddress;
}
exports.baseURL = baseURL;

// ============= Write into movieList.json file ==============
function writeInToFile(mainFile, result, response) {
  fs.writeFile(
    mainFile,
    JSON.stringify(result.data["Search"], null, 4),
    err => {
      if (err) {
        sendFailedMessage(response, 205, "File written failed");
      } else {
        response.status(200).json({
          status: "Success",
          records: result.data["Search"]
        });
      }
    }
  );
}
exports.writeInToFile = writeInToFile;

// ================== Read from movieList.json file ===========
function readJsonFile(mainFile, response) {
  fs.readFile(mainFile, "utf8", function(err, data) {
    if (err) {
      response.json({ message: "Error in reading file", data: err });
    }
    response.status(200).json({
      status: "Success",
      records: JSON.parse(data)
    });
  });
}
exports.readJsonFile = readJsonFile;

// ====== Reusable method for sending failed message =====
function sendFailedMessage(response, status, customMessage) {
  response.status(status).json({
    status: "failed",
    message: customMessage
  });
}
exports.sendFailedMessage = sendFailedMessage;
