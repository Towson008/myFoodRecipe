import styled from "styled-components"
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <Wrapper>
        <h5>Towseen &copy; | Developer | Creator.</h5>
        <FLink  to={{pathname: "https://www.youtube.com"}} target="_blank">
            <h4>Youtube</h4>
        </FLink>
        <FLink to={{pathname: "https://www.facebook.com"}} target="_blank">
            <h4>Facebook</h4>
        </FLink>
        <FLink to={{pathname: "https://www.linkedin.com"}} target="_blank">
            <h4>Linkedin</h4>
        </FLink>
        <FLink to={{pathname: "https://www.instagram.com"}} target="_blank">
            <h4>Instagram</h4>
        </FLink>  
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    width: 90%;
    margin: auto;
    align-items: center;
    min-height: 10vh;
    flex-wrap: wrap;
`

const FLink = styled(NavLink)`
     margin-right: 2rem;
     text-decoration: none;
     cursor: pointer;
`

export default Footer