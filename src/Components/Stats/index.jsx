import React, { useState, useEffect, useMemo } from "react";
import "./Stats.css";

function Stats(props) {
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    decimal: 0,
  });

  // Define the birthdate correctly
  const birthDate = useMemo(() => new Date("1998-03-03T00:00:00Z"), []); // Replace with your birthdate and time in UTC

  useEffect(() => {
    const calculateAge = () => {
      const now = new Date();

      const milliseconds = now.getTime() - birthDate.getTime();

      const decimalAge = milliseconds / (1000 * 60 * 60 * 24 * 365.2425);

      let years = now.getUTCFullYear() - birthDate.getUTCFullYear();
      let months = now.getUTCMonth() - birthDate.getUTCMonth();
      let days = now.getUTCDate() - birthDate.getUTCDate();

      if (days < 0) {
        months--;

        const previousMonth = new Date(
          Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 0),
        );

        days += previousMonth.getUTCDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setAge({
        years,
        months,
        days,
        decimal: decimalAge,
      });
    };

    calculateAge();

    const interval = setInterval(calculateAge, 100);

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
          <div className="stats-about-me">A FEW NUMBERS ABOUT ME</div>
          <div className="stats-age-container">
            <div className="stats-age">Age</div>
            <div className="stats-age-info">
              <div className="stats-age-value">
                {age.decimal.toFixed(11)} years
              </div>
              <div className="stats-age-detail">
                {age.years} years · {age.months} months · {age.days} days
              </div>
            </div>
          </div>
          <div className="stats-city-container">
            <div className="stats-city">Current city</div>
            <div className="stats-city-value">Pune, Maharashtra, India</div>
          </div>

          <hr className="stats-border-custom" />
          <div className="stats-about-this-site">
            A FEW NUMBERS ABOUT THIS SITE
          </div>
          <div className="stats-updated-container">
            <div className="stats-updated-row">
              <div className="stats-updated">Originally Created</div>
              <div className="stats-updated-value">Sep 20th, 2024</div>
            </div>
            <div className="stats-updated-row">
              <div className="stats-updated">Last updated at</div>
              <div className="stats-updated-value">Aug 21st, 2026</div>
            </div>
            <div className="stats-updated-row">
              <div className="stats-updated">Built With</div>
              <div className="stats-updated-value">ReactJS</div>
            </div>
            <div className="stats-updated-row">
              <div className="stats-updated">UI</div>
              <div className="stats-updated-value">MUI</div>
            </div>
            <div className="stats-updated-row">
              <div className="stats-updated">Hosted On</div>
              <div className="stats-updated-value">Github Pages</div>
            </div>
          </div>
          <hr className="stats-border-custom" />
        </div>
      </div>
    </>
  );
}

export default Stats;
