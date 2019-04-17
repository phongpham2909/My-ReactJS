import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionMessage from '../../views/Pages/ProductsDetailPage/Section/SectionMessage';

class MessageContainer extends Component {
    render() {
        var { msg } = this.props;
        return (
            <SectionMessage msg={msg}/>
        );
    }
}


const mapStateToProps = state => {
    return {
        msg: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);