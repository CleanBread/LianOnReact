import React, { Component } from 'react';
import './person-box.sass';

import Person from './person/Person'

import Photo_1 from '../../../../img/person_1.jpg';
import Photo_2 from '../../../../img/person_2.jpg';
import Photo_3 from '../../../../img/person_3.jpg';

class PersonBox extends Component {
    render() {
        return (
            <div className="person-box">
                <Person photo={`url(${Photo_1})`} name="Lian Joy" position="CEO/Founder" description="Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci"/>
                <Person photo={`url(${Photo_2})`} name="Albert Thanh" position="Programmer" description="Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci"/>
                <Person photo={`url(${Photo_3})`} name="Jenn Pereira" position="Merchant" description="Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci"/>
            </div>
        );
    }
}

export default PersonBox;