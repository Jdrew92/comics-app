import {  Route, Switch } from 'react-router-dom';
import Cards from './components/cards';
import Character from './components/character';

const Routes = ()=>{
    return(
        <section>
          <Switch>
            <Route exact path="/Search" component={Cards}/>
            <Route path="/info" component={Character}/>
          </Switch>
        </section>
    );
};

export default Routes;