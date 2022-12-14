import React, { useState } from "react";
import styles from "./index.module.css";
import UpcomingMovies from "./UpcomingMovies";
import MyCarousel from "./MyCarousel";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import PopularTV from "./PopularTV";

export function HomePage() {
  return (
    <div className={styles.container}>
      <MyCarousel></MyCarousel>
      <PopularMovies></PopularMovies>
      <PopularTV></PopularTV>
      <UpcomingMovies></UpcomingMovies>
      <TopRatedMovies></TopRatedMovies>
    </div>
  );
}
