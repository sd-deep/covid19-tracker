import React, { Component } from 'react'
import { Cards, Charts, CountryPicker, Footer } from '../index';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchdata } from '../../api';
import styles from './Home.module.css';

import CovidPic from '../../images/covid19.png';

class Home extends Component {
    state = {
        data: {},
        country: '',
    }

    
    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedData = await fetchdata(country);
        //set the state
        this.setState({ data: fetchedData, country: country });
    }
    

    async componentDidMount() {
        const fetchedData = await fetchdata()

        this.setState({ data: fetchedData })
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                  <img className={styles.image} src={CovidPic} alt="Covid19" />
                   <CountryPicker handleCountryChange={this.handleCountryChange} />
                   <Cards data={data} />
                   {data ? <Charts data={data} country={country} /> : <CircularProgress />}
                   <Footer />
            </div>
        )
    }
}

export default Home
