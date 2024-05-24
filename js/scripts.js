/*!
 * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

const getRootPath = () => {
  let urlString = window.location.href;
  let pathRoot = urlString.slice(
    0,
    urlString.indexOf("TE4_23-24_Site") + "TE4_23-24_Site".length
  );
  return pathRoot;
};

/*
För att använda funktionen nedan 

exempel: användare trycker ned på poki API projektet
         på projekt sidan. Vi vill skicka personen 
         till den dynamiska inviduella projekt templatesidan 
         med URL parametern "Pokidex"
        
Använding:
columnClick("page/projekt", "Projektet", "Pokidex");
*/

const columnClick = (newRelativeLocation, key, value) => {
  let pathRoot = getRootPath();
  let newUrl = pathRoot + newRelativeLocation; // Create a URL object
  let url = new URL(newUrl); // Add a parameter to the URL
  url.searchParams.set(key, value); // Set the 'user' parameter to '12345'
  window.location.href = url.toString(); // Redirect the user to the new URL
};

/*
För att använda funktionen nedan 

exempel: Användaren är nu på den inviduella projekt sidan, 
         efter att tryckt på pokidex. Vi vill hämta json data
         som ska displayas på sidan.
        
Använding:
getData("inviduelltProjekt", "Projektet");

*/
const getData = async (targetData, urlParam) => {
  let jsonFile = getRootPath() + "/data.json";
  let urlString = window.location.href;
  let paramString = urlString.split("?")[1];
  let queryString = new URLSearchParams(paramString);
  let elev = queryString.get(urlParam);
  const response = await fetch(jsonFile);
  const jsonData = await response.json();
  console.log(jsonData);
  let data = jsonData[targetData][elev];
  return data;
};
