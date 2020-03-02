import React from 'react';
import '../css/infoHeader.css';
import SimpleSelect from './droopdown';
export default class DarkHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <SimpleSelect />
            </div>
        )
    }
}