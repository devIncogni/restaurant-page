function createHome() {
  const homeHeadingDiv = document.createElement("div");
  const homeInfoDiv = document.createElement("div");

  homeHeadingDiv.setAttribute("class", "home-heading");
  homeInfoDiv.setAttribute("class", "home-info");

  homeHeadingDiv.appendChild(
    createElementAndSetTextContent("h1", "Welcome to devCoffees")
  );
  homeHeadingDiv.appendChild(
    createElementAndSetTextContent(
      "p",
      "The only exclusive developers coffee club"
    )
  );

  homeInfoDiv.appendChild(createTable());
}

function createTable() {
  const table = document.createElement("table");
  table.setAttribute("class", "home-table");

  let tableRow = new Array(8);

  for (let i = 0; i < tableRow.length; i++) {
    tableRow[i] = document.createElement("tr");

    if (i == 0) {
      tableRow[i].appendChild(createElementAndSetTextContent("th", "Day"));
      tableRow[i].appendChild(createElementAndSetTextContent("th", "Timing"));
    } else {
      tableRow[i].appendChild(
        createElementAndSetTextContent("th", getWeekDayNumber(i))
      );
      tableRow[i].appendChild(
        createElementAndSetTextContent("td", "Morning 10 AM to Evening 10 PM")
      );
    }
    table.appendChild(tableRow[i]);
  }

  return table;
}

function createElementAndSetTextContent(elementName, textContent) {
  let tempElement = document.createElement(elementName);
  tempElement.textContent = textContent;

  return tempElement;
}

function getWeekDayNumber(i) {
  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return weekDays[i - 1];
}

export default createHome;
