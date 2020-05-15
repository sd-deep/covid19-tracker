import React from 'react';

import styles from './App.module.css';
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { Home, HowToStaySafe } from './components';

class App extends React.Component {

    render() {

        return (
            <Router>
                <div className={styles.container}>
                    <ul className={styles.navigationLinks}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/staysafe">Stay Safe</Link>
                        </li>
                    </ul>
                    <Route path="/" exact component={Home} />
                    <Route path="/staysafe" component={HowToStaySafe} />
                </div>
            </Router>
        )
    }
}

export default App;