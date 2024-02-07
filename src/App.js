import React from "react";
import configurationSteps from "./store/configurationSteps";
import reactTestingSteps from "./store/reactTestingSteps";
import List from "./components/List";
import ListItem from "./components/ListItem";

 const App = function() {
const items = configurationSteps.map((step, index) => <ListItem itemText={step} key={index}/>)
const testingItems = reactTestingSteps.map((step, index) => <ListItem itemText={step} key={index}/>)

    return (
        <>
        <h1>78_from_zero_to_microfrontend</h1>
                <div class="alert alert-success">
            React root-component rendered in div#root
            </div>
            <h3>Configuration steps</h3>
            <List>
                {items}
            </List>
        <h3>React testing steps</h3>
        <List>
{testingItems}
        </List>
      <div class="alert alert-danger">Project started with Bootstrap</div>
        </>
    )
}

export default App;