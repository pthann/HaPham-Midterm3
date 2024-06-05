import React,  { useContext } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Search from "../users/Search";
import User from "../users/User";
import { ThemeContext } from './../../ThemeContext';
const Home = () => {
    const { theme } = useContext(ThemeContext);
return (
<div className={`container ${theme}-theme`}>
<Switch>
<Route exact path="/" component={Search} />
<Route exact path="/about" component={About} />
<Route exact path="/user/:id" component={User} />
<Route path="/*" component={NotFound}></Route>
</Switch>
</div>
);
};
export default Home;
