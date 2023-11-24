function filterMovieInfo(array) {
  let movies = [];

  array.forEach((currenrRow) => {
    if (currenrRow.includes("addMovie")) {
      let currentMovie = currenrRow.split("addMovie ")[1];

      movies.push({ name: currentMovie });
    } else if (currenrRow.includes("directedBy")) {
      let [movie, director] = currenrRow.split(" directedBy ");
      let searchingObj = movies.find((el) => el.name === movie);
      if (searchingObj) {
        searchingObj["director"] = director;
      }
    } else if (currenrRow.includes("onDate")) {
      let [movie, date] = currenrRow.split(" onDate ");
      let searchingObj = movies.find((el) => el.name === movie);
      if (searchingObj) {
        searchingObj["date"] = date;
      }
    }
  });
  movies.forEach((element) => {
    if (element.name && element.director && element.date) {
      console.log(JSON.stringify(element));
    }
  });
}
filterMovieInfo([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
