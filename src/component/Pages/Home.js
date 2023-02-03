import { Route } from "react-router-dom";
import Header from "../Layout/Header";
import classes from "./home.module.css";

const Tours = [
  {
    Date: "JUL 16",
    location: "DETROIT MI",
    title: "DTE ENERGY MUSIC THEATRE",
  },
  {
    Date: "JUL 19",
    location: "TORONTO ON",
    title: "BUDWEISER STAGE",
  },
  {
    Date: "JUL 22",
    location: "BRISTOW VA",
    title: "JIGGY LUBE LIVE",
  },
  {
    Date: "JUL 29",
    location: "PHOENIX AZ",
    title: "AK-CHIN PAVILION",
  },
  {
    Date: "JUL 29",
    location: "PHOENIX AZ",
    title: "AK-CHIN PAVILION",
  },
];

const Home = () => {
  const items = Tours.map((item) => {
    return (
      <ul>
        <li  className={classes.li} key={Math.random().toString()}>
          <div className={classes.items}>
            <span className={classes.date}>{item.Date}</span>
            <span >{item.location}</span>
            <span>{item.title}</span>
            <button className={classes.button}>Buy Ticket</button>
          </div>
        </li>
      </ul>
    );
  });
  return (
    <section>
      <Header />
      <Route path="/">
      </Route>
      <h2 className={classes.h2}>Tours</h2>
      <div>{items}</div>
    </section>
  );
};
export default Home;
