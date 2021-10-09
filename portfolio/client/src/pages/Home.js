import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/NavBar';
// import { getAllProjects } from '../utils/api';

const Home = () => {
  // const [matchupList, setMatchupList] = useState([]);

  // useEffect(() => {
  //   const getMatchupList = async () => {
  //     try {
  //       const res = await getAllMatchups();
  //       if (!res.ok) {
  //         throw new Error('No list of matchups');
  //       }
  //       const matchupList = await res.json();
  //       setMatchupList(matchupList);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getMatchupList();
  // }, []);

  return <Nav />;
};

export default Home;
