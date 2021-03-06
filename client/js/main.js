import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './home.js';
import Add_money from './add_money.js';
import Create_account from './create_account.js';
import Add_money_submit from './add_money_submit.js';
import Withdraw_money from './with_draw.js';
import With_money_submit from './with_draw_submit.js';
import Balance_enquery from './balance_enquiery.js';
// class  to Main component
class Main extends React.Component{
  render(){
    return(
      <Switch>
        <Route path='/balance' component={Balance_enquery}/>
        <Route path="/add_money_submit" component={Add_money_submit}/>
        <Route path='/withdraw_money_submit' component={With_money_submit}/>
        <Route path='/add_money' component={Add_money}/>
        <Route path="/create_account" component={Create_account}/>
        <Route path="/withdraw_money" component={Withdraw_money}/>
        <Route path='/' component={Home}/>
      </Switch>

    );
  }
};
export default Main;
