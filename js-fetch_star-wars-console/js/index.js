console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) console.error("Bad response");
    else console.log("works fine");

    const data = await response.json();
    console.log(data);
    console.log(data.results);
    const arr = data.results;
    for (const a of arr) {
      if (a.name === "R2-D2") console.log("Eye color is: " + a.eye_color);
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
