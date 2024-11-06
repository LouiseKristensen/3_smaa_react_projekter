// Funktionel komponent, der modtager to props: maxChars og currentLength
function CharCount({ maxChars, currentLength }) {
  
  // Returnerer et <p>-element, der viser, hvor mange tegn der er tilbage
  // Udregningen maxChars - currentLength giver antallet af resterende tegn
  return (
    <p>{maxChars - currentLength} characters remaining</p>
  );
}

// Eksporterer CharCount-komponenten, så den kan bruges i andre filer
export default CharCount;

