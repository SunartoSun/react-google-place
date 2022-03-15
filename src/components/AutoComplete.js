import React, {useState} from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import {  fetchResult } from '../store/actions/searchAction';
import { addResult } from '../store/epics/searchEpics';

const AutoComplete = () => {
    const [value, setValue] = useState(null);
    const dispatch = useDispatch();
        
    const handleSelected = (value) => {
        // dispatch(fetchResult(value.label))
        dispatch(addResult(value.label))
        
        setValue(value)
    }
    
    return (
        <GooglePlacesAutocomplete
            selectProps={{
                value,
                onChange: handleSelected,
            }}
        />
  )
}

export default AutoComplete