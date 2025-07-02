export { mainFun, fpDay, pDay, tof };

// Determine the first day the planet appears in the sky
const fpDay = function(uPlanet, pMonth) {
  let fmDay = 1;

  if (uPlanet === "Mercury") {
    switch (pMonth) {
      case "January": fmDay = 5; break;
      case "March": fmDay = 10; break;
      case "May": fmDay = 2; break;
      case "July": fmDay = 8; break;
      case "August": fmDay = 30; break;
      case "September": fmDay = 1; break;
      case "November": fmDay = 2; break;
      case "December": fmDay = 18; break;
      default: throw new Error(`Invalid month ${pMonth} for planet Mercury`);
    }
  }

  else if (uPlanet === "Venus") {
    switch (pMonth) {
      case "January":
      case "February":
      case "March":
        fmDay = 1;
        break;
      case "April":
        fmDay = 8;
        break;
      case "July":
        fmDay = 30;
        break;
      case "August":
      case "September":
      case "October":
      case "November":
      case "December":
        fmDay = 1;
        break;
      default:
        throw new Error(`Invalid month ${pMonth} for planet Venus`);
    }
  }

  else if (uPlanet === "Mars") {
    switch (pMonth) {
      case "January": fmDay = 1; break;
      case "February": fmDay = 22; break;
      case "April": fmDay = 10; break;
      case "July": fmDay = 1; break;
      case "August": fmDay = 4; break;
      case "December": fmDay = 6; break;
      default: throw new Error(`Invalid month ${pMonth} for planet Mars`);
    }
  }

  else if (uPlanet === "Jupiter") {
    switch (pMonth) {
      case "January": fmDay = 1; break;
      case "February": fmDay = 22; break;
      case "April": fmDay = 28; break;
      case "June": fmDay = 8; break;
      case "August": fmDay = 4; break;
      case "November": fmDay = 1; break;
      case "December": fmDay = 6; break;
      default: throw new Error(`Invalid month ${pMonth} for planet Jupiter`);
    }
  }

  else if (uPlanet === "Saturn") {
    switch (pMonth) {
      case "January": fmDay = 1; break;
      case "February": fmDay = 11; break;
      case "March": fmDay = 17; break;
      case "April": fmDay = 28; break;
      case "June": fmDay = 8; break;
      case "August": fmDay = 4; break;
      case "September": fmDay = 8; break;
      case "October": fmDay = 1; break;
      case "November": fmDay = 1; break;
      case "December": fmDay = 31; break;
      default: throw new Error(`Invalid month ${pMonth} for planet Saturn`);
    }
  }

  else if (uPlanet === "Uranus") {
    switch (pMonth) {
      case "January": fmDay = 1; break;
      case "February": fmDay = 1; break;
      case "March": fmDay = 1; break;
      case "April": fmDay = 28; break;
      case "June": fmDay = 8; break;
      case "August": fmDay = 4; break;
      case "September": fmDay = 8; break;
      case "October": fmDay = 1; break;
      case "November": fmDay = 1; break;
      case "December": fmDay = 31; break;
      default: throw new Error(`Invalid month ${pMonth} for planet Uranus`);
    }
  }

  return fmDay;
};

// Determine the last day the planet appears in the month
const pDay = function(uMonth, uPlanet) {
  let lmDay = 0;

  if (uPlanet === "Mercury") {
    switch (uMonth) {
      case "January": lmDay = 26; break;
      case "March":
      case "October":
      case "December": lmDay = 31; break;
      case "May": lmDay = 23; break;
      case "July": lmDay = 29; break;
      case "August": lmDay = 30; break;
      case "September": lmDay = 19; break;
      case "November": lmDay = 23; break;
      default:
        console.log("Invalid Month input.");
        break;
    }
  }

  return lmDay;
};

// Determine time of day: Morning or Evening
const tof = function(uMonth, uPlanet) {
  let tod = false;

  if (uPlanet === "Mercury") {
    switch (uMonth) {
      case "March":
      case "July":
      case "November":
        tod = true;
        break;
      case "May":
      case "January":
      case "August":
      case "September":
      case "December":
        tod = false;
        break;
      default:
        tod = true;
        break;
    }
  }

  else if (uPlanet === "Venus") {
    switch (uMonth) {
      case "January":
      case "February":
      case "March":
      case "April":
        tod = true;
        break;
      default:
        tod = false;
        break;
    }
  }

  return tod ? "Morning" : "Evening";
};

// Main function to get all appearance details
const mainFun = (userP, userM) => {
  const setTime = tof(userM, userP);
  const ufDay = fpDay(userP, userM);
  const ulDay = pDay(userM, userP);

  return {
    planet: userP,
    month: userM,
    appearsOn: ufDay,
    disappearsOn: ulDay,
    timeOfDay: setTime
  };
};
