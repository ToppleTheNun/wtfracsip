import letters from "../constants/letters";
import threesRoles from "../constants/roles-3s";
import fivesRoles from "../constants/roles-5s";

/**
 * Generates an array of objects containing role and letter information for threes.
 * @param numberOfRoles pinned between [0, 3]
 * @returns {[]}
 */
const generateRolesForThrees = numberOfRoles => {
  const clonedLetters = [...letters];
  const clonedThreesRoles = [...threesRoles];
  const lettersAndRoles = [];
  const rolesToGenerate = Math.min(Math.max(numberOfRoles, 0), 3);
  for (let i = 0; i < rolesToGenerate; i++) {
    const randomLettersIndex = Math.floor(Math.random() * clonedLetters.length);
    const randomThreesIndex = Math.floor(
      Math.random() * clonedThreesRoles.length
    );
    const letter = clonedLetters[randomLettersIndex];
    const role = clonedThreesRoles[randomThreesIndex];
    clonedLetters.splice(randomLettersIndex, 1);
    clonedThreesRoles.splice(randomThreesIndex, 1);
    lettersAndRoles.push({ letter, role });
  }
  return lettersAndRoles;
};

/**
 * Generates an array of objects containing role and letter information for fives.
 * @param numberOfRoles pinned between [0, 5]
 * @returns {[]}
 */
const generateRolesForFives = numberOfRoles => {
  const clonedLetters = [...letters];
  const clonedFivesRoles = [...fivesRoles];
  const lettersAndRoles = [];
  const rolesToGenerate = Math.min(Math.max(numberOfRoles, 0), 5);
  for (let i = 0; i < rolesToGenerate; i++) {
    const randomLettersIndex = Math.floor(Math.random() * clonedLetters.length);
    const randomFivesIndex = Math.floor(
      Math.random() * clonedFivesRoles.length
    );
    const letter = clonedLetters[randomLettersIndex];
    const role = clonedFivesRoles[randomFivesIndex];
    clonedLetters.splice(randomLettersIndex, 1);
    clonedFivesRoles.splice(randomFivesIndex, 1);
    lettersAndRoles.push({ letter, role });
  }
  return lettersAndRoles;
};

export { generateRolesForThrees, generateRolesForFives };
