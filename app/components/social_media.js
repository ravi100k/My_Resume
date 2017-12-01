'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const ResumePropTypes = require('../prop_types/resume');

function mapIcon(socialMedia) {
    const media = socialMedia.replace(/ /g, '-');
    switch (socialMedia) {
        case 'email':
            return (
                <i className='fa fa-envelope' title="E-mail"/>
            );
        case 'quora':
            return (
                <i className='fa fa-fw' title="Quora">
                    <strong className='fa-quora'>Q</strong>
                </i>
            );
        case 'coursera':
            return (
                <i className='fa fa-certificate' title="coursera">
                </i>
            );
        default:
            return (
                <i className={`fa fa-${media}`} title=""/>
            );
    }
}

const SocialMedia = React.createClass({
    propTypes: {
        ulClass: PropTypes.string.isRequired,
        profiles: ResumePropTypes.profiles
    },

    render: function () {
        return (
            <ul className={this.props.ulClass}>
                {this.props.profiles.map(function (profile, index) {
                    const icon = mapIcon(profile.network.toLowerCase());
                    return (
                        <li key={index}>
                            <a href={profile.url}>
                                {icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
});

module.exports = SocialMedia;
