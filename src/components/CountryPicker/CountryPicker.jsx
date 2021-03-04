import React,{useState,useEffect} from 'react'
import {NativeSelect ,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'

const CountryPicker = () => {
    const [fetchedCountries,setFetchedCountries] = useState([] )

    useEffect(() => {
        const fetchAPI = async () =>
        {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries]);
        console.log(fetchedCountries)
    return (
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
        <div>
        
        </div>
=======
>>>>>>> Stashed changes
        <FormControl className = {styles.fromControl}>
           <NativeSelect deafultValue="">
           <option value = 'global'>Global</option>
           {fetchedCountries.map((country ,i) => <option key = {i} value = {country}>{country}</option>)}
           </NativeSelect>
        </FormControl>
<<<<<<< Updated upstream
=======
>>>>>>> c0cbb9487f36715fd3f8173cf159836645596184
>>>>>>> Stashed changes
    )
}

export default CountryPicker
