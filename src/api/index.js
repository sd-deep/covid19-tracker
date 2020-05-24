import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const url = 'https://covid19.mathdro.id/api'

export const fetchdata = async (country) => {
    let changeableUrl = url;
    console.log(country)
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const { data : { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl,{
            cancelToken: source.token
          });
          console.log('fetching data global data axios ')
        return { confirmed, recovered, deaths, lastUpdate };
        
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
       const { data } =  await axios.get(`${url}/daily`);
       console.log('fetching daily data using axios ')
       const modifiedData = data.map((dailyData)=> ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate,
       }));

       return modifiedData;
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        const { data :{ countries } } = await axios.get(`${url}/countries`);
        console.log('fetching countries using axios')
        return countries.map(country => country.name)
    } catch (error) {
        console.log(error)
    }
}