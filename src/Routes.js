import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FlowWithProvider from './pages/MindMap/ReactFlowProvider';


export const Routes = () => {
    return (
        <Router>
            <Switch>
 
                <Route path="/" exact>
                  <FlowWithProvider/>
                </Route>
                
            </Switch>
        </Router>
    );
}