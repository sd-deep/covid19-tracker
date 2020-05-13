import React from 'react';

import styles from './App.module.css';

import { Cards, Charts, CountryPicker, Footer } from './components';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchdata } from './api';

import CovidPic from './images/covid19.png';


class App extends React.Component{
    state = {
        data : {},
        country : '',
    }

    async componentDidMount(){
        const fetchedData = await fetchdata()

        this.setState({data : fetchedData})
    }

    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedData = await fetchdata(country);
         //set the state
        this.setState({data: fetchedData, country : country});
    }
    render(){
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                
                <img className={styles.image} src={CovidPic} alt="Covid19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                {data ? <Charts data={data} country={country}/> : <CircularProgress />}
                <Footer/>
            </div>
        )
    }
}

export default App;