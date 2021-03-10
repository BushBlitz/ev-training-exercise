// import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ListEmployee from "./components/employee/ListEmployee";
import EmployeeViewer from "./components/employee/EmployeeViewer";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form></Form>
      
      <EmployeeViewer></EmployeeViewer>
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

export default App;
