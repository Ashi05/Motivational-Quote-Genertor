const quotes = [
  `First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not.
 Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice. ―Octavia Butler`,
  `The best way out is always through. ―Robert Frost`,
  `If there is no struggle, there is no progress. —Frederick Douglass`,
  `Courage is like a muscle. We strengthen it by use. —Ruth Gordo`,
  `If the highest aim of a captain were to preserve his ship, he would keep it in port forever.  —Thomas Aquinas`,
];
// random number genertor
const randomNumberGenrtor = () => {
  let num = Math.floor(Math.random() * quotes.length);
  return num;
};

const quoteGenertor = (arr) => {
  document.getElementById("quotes").innerHTML = `<p>${
    arr[randomNumberGenrtor()]
  }</p>`;
};

document.getElementById("btn").addEventListener("click", function () {
  quoteGenertor(quotes);
});
