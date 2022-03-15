import React, {useRef} from 'react'
import GoogleMapReact from 'google-map-react';
import '../index.css'
import { GOOGLE_API_KEY } from '../const/key';

const GoogleMap = ({children, ...props}) => {
  return (
    <div className="google-map">
        <GoogleMapReact
            bootstrapURLKeys={{
                key: GOOGLE_API_KEY,
            }}
            {...props}
            >
            {children}
        </GoogleMapReact>
    </div>
  )
}

export default GoogleMap