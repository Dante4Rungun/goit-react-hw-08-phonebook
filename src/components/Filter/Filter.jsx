import React from "react";
import styled from "./Filter.module.css"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setValueFilter } from "redux/actions";

export const Filter = () => {
    const dispatch = useDispatch()

    const handleOnChange = (event) => dispatch(setValueFilter(event.target.value))

    return (
        <div className={styled.filter}>
            <h2 className={styled.filter__title}>Contacts</h2>
            <input type="text" id="contact-search" className={styled.filter__search} onChange={handleOnChange} placeholder="find contacts by name..."/>
        </div>
    )
}

Filter.propTypes = {
    setFilter: PropTypes.func
}