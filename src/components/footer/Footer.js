import React, { Component } from 'react';
import './footer.sass';

import Logo from '../logo/Logo'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="logo-container">
                    <div className="footer__logo">
                        <Logo/>
                    </div>
                </div>
                <div className="footer__inf">
                    <div className="autors">© 2016 Mulitix Theme by ThemeForces. All Rights Reserved.</div>
                    <div>Code by <a href="https://github.com/CleanBread" className="coder" target="_blank" rel="noopener noreferrer">CleanBread</a></div>
                </div>
            </div>
        );
    }
}

export default Footer;