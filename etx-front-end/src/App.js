// import logo from "./logo.svg";
import "./App.css";
import { ViewEmployee } from "./components/employee/ViewEmployee";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEmployee from "./components/employee/AddEmployee";

function App() {
  return (
    <div className="App">
      {/* <Form></Form> */}
      <Router>
        <Nav />
          <Route path="/" exact component={Home}></Route>
          <Route path="/view" component={ViewEmployee} />
          <Route path="/add" component={AddEmployee} />
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
