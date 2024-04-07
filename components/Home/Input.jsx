"use client"
import React, { useContext, useEffect, useState } from 'react'
import Source from './Source'
import Destination from './Destination'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { SourceContext } from '@/context/SourceContext'
import { DestinationContext } from '@/context/DestinationContext'

function Input({ type }) {
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceholder] = useState(null);
  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext);

  useEffect(() => {
    type === 'source' ? setPlaceholder('Pickup') : setPlaceholder('Destination')
  }, [])

  const getLatAndLong = (place, type) => {
    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({placeId}, (place, status) => {
      // if (status === google.maps.places.PlacesServiceStatus.OK) {
      //   const lat = place.geometry.location.lat();
      //   const lng = place.geometry.location.lng();
      //   const location = {lat, lng};
      //   type === 'source' ? localStorage.setItem('source', JSON.stringify(location)) : localStorage.setItem('destination', JSON.stringify(location))
      // }
      if(status === 'OK' && place.geometry && place.geometry.location) {
        console.log(place.geometry.location.lat(), place.geometry.location.lng())
        if (type === 'source') {
          setSource({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          })
        } else {
          setDestination({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          })
        }
      }
    })
  }

  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      {type === 'source' ? <Source /> : <Destination />}
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: (place) => {getLatAndLong(place, type); setValue(place)},
          placeholder: placeholder,
          isClearable: true,
          className: 'w-full',
          components: {
            DropdownIndicator: false
          },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
            }),
          }
        }}
      />
    </div>
  )
}

export default Input