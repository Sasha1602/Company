import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
export const MapComponent = () => {
    return (
            <YMaps>
                    <Map defaultState={{ center: [56.847631, 40.536926], zoom: 16 }} width='-1' height='41em'>
                        <Placemark geometry={[56.847631, 40.536926]} />
                    </Map>
            </YMaps>
    );
};