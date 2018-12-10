import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//Styles
import "./Header.css";

export class Header extends Component {


  render() {
    return (
      <div className="header">
        Header
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
