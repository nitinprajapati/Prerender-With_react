import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetail';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ ImageList } />    
                <Route path='/userdetail/:url' component={ ImageDetail } />  
            </Switch>
        </div>
    );
};

export default App;

