import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout';
import ThoughtsPage from './pages/ThoughtsPage';
import ThoughtDetailPage from './pages/ThoughtDetailPage';

// could be a HOC
function RouteWithLayout({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(ownProps) => (
                <Layout>
                    <Component {...ownProps} />
                </Layout>
            )}
        />
    );
}

function App() {
    return (
        <Router>
            <RouteWithLayout exact path={[ '/', '/thoughts' ]} Component={ThoughtsPage} />
            <Route path={`/thoughts/:thoughtId`} component={ThoughtDetailPage}/>
               

        </Router>
    );
}

export default App;