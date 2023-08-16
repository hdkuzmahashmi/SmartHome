import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  console.log(colorApiUrl);
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  // --^-- your code here --^--
  try {
    const response = await fetch(colorApiUrl);
    if (!response.ok) console.error("Bad Request");
    else console.log("looks fine");
    const data = await response.json();
    console.log(data);
    console.log(data.hex.value);
    console.log(data.name.value);
    setColorToGuess(data.name.closest_named_hex, data.name.value);
  } catch (error) {
    console.error(error);
  }
}
