import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as actions from "./actions";

import Landing from "./components/landing/Landing";
import Header from "./components/header/Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class  App extends Component  {
  componentDidMount(){
    this.props.fetchUser();
  }
  
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/surveys" element={<Dashboard />} />
              <Route path="/surveys/new" element={<SurveyNew />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }

};

export default connect(null, actions)(App);
