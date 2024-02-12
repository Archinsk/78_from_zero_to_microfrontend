import React from 'react';
import configurationSteps from './store/configurationSteps';
import projectTestingSteps from './store/projectTestingSteps';
import './App.scss';
/* import CustomImage from './assets/images/default.jpg';
 */ import List from './components/List';
import ListItem from './components/ListItem';
/* import Face from '@material-symbols/svg-400/outlined/face.svg'; */
import SvgLogout from '@material-symbols/svg-400/outlined/logout.svg';
import pkg from '../package.json';

const App = function () {
  const items = configurationSteps.map((step, index) => <ListItem itemText={step} key={index} />);
  const testingItems = projectTestingSteps.map((step, index) => (
    <ListItem itemText={step} key={index} />
  ));

  console.log(pkg);
  return (
    <>
      <div className="container">
        <h1>78_from_zero_to_microfrontend</h1>
        <div class="alert alert-success">React root-component rendered in div#root</div>
        <h3>Configuration steps</h3>
        <List>{items}</List>
        <h3>React testing steps</h3>
        <List>{testingItems}</List>
        <div className="image-container"></div>
        <div className="alert alert-danger">Project started with Bootstrap</div>
        {/* <img src="./assets/images/default.jpg" /> */}
        {/*         <img src={CustomImage} />
         */}{' '}
        {/* <Face /> */}
        <span className="material-symbols-outlined">face</span>
        <span class="material">settings</span>
        <img src={SvgLogout} />
        {/* <div>{pkg}</div> */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
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
