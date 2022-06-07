import styled from "styled-components"
import { useState } from "react"
import {FaSearch} from "react-icons/fa"

function Search() {
  return (
    <FormStyle action="">
        <input type="text" />
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
    width: 100%;
`

export default Search