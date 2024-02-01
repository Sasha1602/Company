import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
export const MapComponent = () => {
    return (
            <YMaps>
                    <Map defaultState={{ center: [56.999637, 40.986120], zoom: 17 }} width='-1' height='41em'>
                        <Placemark geometry={[56.999637, 40.986120]} />
                    </Map>
            </YMaps>
    );
};