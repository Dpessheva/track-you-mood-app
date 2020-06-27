import React from 'react';
import { Meteor } from 'meteor/meteor';
import {render} from 'react-dom';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import  Info  from '../imports/ui/Info';
import  Home from '../imports/ui/Home';
import ErrorPage from '../imports/ui/ErrorPage';

Meteor.startup(() => {
  render(<BrowserRouter>
     <Switch>
     <Route exact path="/" component={Home}/>
     <Route  path="/history" component={Info}/>
     <Route component={ErrorPage}/>
   </Switch>
</BrowserRouter>, document.getElementById("react-target"));
});
