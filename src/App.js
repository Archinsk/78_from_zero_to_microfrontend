import React from "react";
import configurationSteps from "./store/configurationSteps";
import projectTestingSteps from "./store/projectTestingSteps";
import List from "./components/List";
import ListItem from "./components/ListItem";

const App = function () {
  const items = configurationSteps.map((step, index) => (
    <ListItem itemText={step} key={index} />
  ));
  const testingItems = projectTestingSteps.map((step, index) => (
    <ListItem itemText={step} key={index} />
  ));

  return (
    <>
      <div className="container">
        <h1>78_from_zero_to_microfrontend</h1>
        <div class="alert alert-success">
          React root-component rendered in div#root
        </div>
        <h3>Configuration steps</h3>
        <List>{items}</List>
        <h3>React testing steps</h3>
        <List>{testingItems}</List>
        <div class="alert alert-danger">Project started with Bootstrap</div>

        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
