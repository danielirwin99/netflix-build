import React from "react";
import Banner from "../Components/Banner";
import Nav from "../Components/Nav";
import Row from "../Components/Row";
import "../Styles/HomeScreen.css";
import requests from "../Utils/Requests";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}

      <Row title="Trending Now" fetchUrl={requests.fetchPopular} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}  />
      <Row title="Action" fetchUrl={requests.fetchActionMovies}  />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}  />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}  />
      <Row title="Mystery" fetchUrl={requests.fetchMystery}  />
      {/* <Row title="Sci-Fi" fetchUrl={requests.fetchSciFi} isLargeRow />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} isLargeRow />
      <Row title="TV" fetchUrl={requests.fetchTV} isLargeRow />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow /> */}
      
    </div>
  );
};

export default HomeScreen;
