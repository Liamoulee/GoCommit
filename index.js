import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const markCommit = (x, y) => {
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: date,
  };

  jsonfile.writeFile(path, data, () => {
    simpleGit().add([path]).commit(date, { "--date": date }).push();
  });
};

const makeCommits = (n) => {
  if (n === 0) return simpleGit().push();

  const startDate = moment("1999-01-01");
  const endDate = moment();

  const totalDays = endDate.diff(startDate, "days");
  const randomDays = random.int(0, totalDays);

  const date = startDate
    .clone()
    .add(randomDays, "days")
    .format();

  const data = {
    date: date,
  };

  console.log(date);

  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .add([path])
      .commit(date, { "--date": date }, makeCommits.bind(this, --n));
  });
};

makeCommits(100);