import React, { useEffect, Fragment } from "react";
import { AppState } from "../../redux/reducers";
import { searchMovieDetailsById } from "../../redux/actions/movie";
import { searchMovieDeclarationTypes } from "../../redux/action-types/declarations";
import { useParams } from "react-router";
import CustomContainer from "../../components/container/CustomContainer";
import Spinner from "../../components/loader/Spinner";
import "./detailsStyle.css";
import { connect } from "react-redux";
// import PropTypes  from "prop-types";

type detailsPropTypes = {
  searchMovieDetailsById?: (imdbID: string) => void;
  state: {
    movie?: searchMovieDeclarationTypes;
    loading?: boolean;
    error?: {};
  };
};

const DetailsPage = ({
  searchMovieDetailsById,
  state: { movie, loading, error }
}: detailsPropTypes) => {
  let { imdbID } = useParams();
  useEffect(() => {
    searchMovieDetailsById(imdbID);
  }, [imdbID]);

  let errWithQuotes = String(error);
  let errors = errWithQuotes.replace(/['"]+/g, "");

  return (
    <CustomContainer className="custom-container" data-test="custom-container">
      <div className="col-md-12 col-sm-12 col-xs-12">
        {errors != "" ? (
          <h1 className="warning">{errors}</h1>
        ) : (
          <Fragment>
            {loading || movie["title"] == "" ? (
              <Spinner />
            ) : (
              <Fragment>
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    {movie["poster"] != "N/A" ? (
                      <img
                        src={movie["poster"]}
                        alt="Movie Poster"
                        className="poster"
                      />
                    ) : (
                      <div className="noImageFound" data-test="no-image-found">
                        <div className="vh_center">No Image</div>
                      </div>
                    )}
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12">
                    <h2>
                      <b>Title:</b> {movie["title"]}
                    </h2>
                    <p>
                      <b>Director:</b> {movie["director"]}{" "}
                    </p>
                    <p>
                      <b>Plot:</b> {movie["plot"]}
                    </p>
                  </div>
                </div>
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    </CustomContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  state: state.movie
});

export default connect(
  mapStateToProps,
  { searchMovieDetailsById }
)(DetailsPage);
