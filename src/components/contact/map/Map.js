import React, { Component } from 'react';
import './map.sass';
import { Map} from 'yandex-map-react';

const mapState = {
    controls: ['default']
};

class CustomMap extends Component {

    render() {
        return (
            <div className="map">
                <Map onAPIAvailable={function () { console.log('API loaded'); }} width={'100%'} height={'350px'} state={mapState} center={[55.754734, 37.583314]} zoom={10}>
                </Map>
            </div>
        );
    }
}

export default CustomMap;