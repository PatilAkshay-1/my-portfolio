import React, { useState, useEffect, useMemo } from "react";
import "./Stats.css";

function Stats(props) {
  const [age, setAge] = useState(0);

  // Define the birthdate correctly
  const birthDate = useMemo(() => new Date("1998-03-03T00:00:00Z"), []); // Replace with your birthdate and time in UTC

  useEffect(() => {
    function calculateAge(birthDate) {
      if (!(birthDate instanceof Date) || isNaN(birthDate)) {
        console.error("Invalid birth date");
        return 0;
      }

      const now = new Date();
      const totalMilliseconds = now.getTime() - birthDate.getTime(); // Total milliseconds
      const totalSeconds = totalMilliseconds / 1000; // Total seconds
      const totalMinutes = totalSeconds / 60; // Total minutes
      const totalHours = totalMinutes / 60; // Total hours
      const totalDays = totalHours / 24; // Total days

      // Calculate age in years with fractional part
      const ageInYears = totalDays / 365.25; // Account for leap years
      return ageInYears;
    }

    // Update age on mount
    setAge(calculateAge(birthDate));

    // Set up an interval to update age every second
    const interval = setInterval(() => {
      setAge(calculateAge(birthDate));
    }, 100); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <>
      <div className="stats-container">
        <div className="stats-header">
          <div className="child page-title">STATS</div>
        </div>
        <hr className="stats-border" />
        <div className="stats-body">
          <div className="stats-about-me">SOME STATS ABOUT ME</div>
          <div className="stats-age-container">
            <div className="stats-age">Current age</div>
            <div className="stats-age-value">{age.toFixed(11)}</div>
          </div>
          <hr className="stats-border-custom" />
          <div className="stats-city-container">
            <div className="stats-city">Current city</div>
            <div className="stats-city-value">Pune, Maharashtra, India</div>
          </div>

          <hr className="stats-border-custom" />
          <div className="stats-about-this-site">
            SOME STATS ABOUT THIS SITE
          </div>
          <div className="stats-updated-container">
            <div className="stats-updated">Last updated at</div>
            <div className="stats-updated-value">Sep 20th, 2024</div>
          </div>
          <hr className="stats-border-custom" />
        </div>
      </div>
    </>
  );
}

export default Stats;
