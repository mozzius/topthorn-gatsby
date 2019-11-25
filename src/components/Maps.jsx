import React from 'react'

export const Maps = ({ height }) => {
    return (
        <div style={{ width: '100%', height: height || 300 }}>
            <iframe
                title="Topthorn Location"
                width="100%"
                height="100%"
                frameBorder={0}
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/search?q=Topthorn%2C%20Stowmarket%2C%20UK&zoom=14&key=AIzaSyDEFlPKB5tKJ5MfMCQ_9PHAyDXE8nsVJsY`}
                allowFullScreen
            />
        </div>
    )
}

