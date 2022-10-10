import React, { Component } from "react";
import styled from "./Notification.module.css"
import PropTypes from 'prop-types';

export const Notification = () => {
        return (
            <p className={styled.notification}>{this.props.message}</p>
        )
}

Notification.propTypes = {
    message: PropTypes.string
}