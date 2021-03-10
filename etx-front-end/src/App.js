// import logo from "./logo.svg";
import "./App.css";
import EmployeeViewer from "./components/employee/EmployeeViewer";
import Form from "./components/Form";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Form></Form> */}
      <Router>
        <Nav />
          <Route path="/" exact component={Home}></Route>
          <Route path="/view" component={EmployeeViewer} />
      </Router>

      {/* <EmployeeViewer></EmployeeViewer> */}
      {/* <ListEmployee></ListEmployee>
      <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <Greet name="Horton" heroName="Hearing Who"></Greet>
      <Greet name="Abu" heroName="Monkeyphant"></Greet>
      <Greet name="Elli" heroName="Pink Giant"></Greet>
      <Welcome groupName="Elephants" teamName="Team GIANT"></Welcome>
      <Hello></Hello> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
