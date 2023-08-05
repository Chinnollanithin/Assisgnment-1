// DataList.jsx
import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import Dropdown from "../dropdown/Dropdown";
import timeStampsJson from "../assets/timeStamps.json"; // Import timeStamps.json

// DataList.jsx
const DataList = () => {
    // ...
  
    useEffect(() => {
      // Fetch data from data.json
      const fetchData = async () => {
        try {
          const dataResponse = await fetch("data.json");
          const dataJson = await dataResponse.json();
  
          // Merge data and timestamps based on id
          const mergedData = dataJson.results.map((result) => {
            const timestamps = timeStampsJson.results.find((item) => item.id === result["&id"]);
            return { ...result, timestamps: timestamps ? timestamps.timestamps : {} };
          });
  
          setData(mergedData);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
  
      fetchData();
    }, []);
  
    // ...
  };
  