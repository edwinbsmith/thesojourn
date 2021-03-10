import {css, styled} from "frontity";
import Container from "@material-ui/core/Container";
import AppCss from "../../assets/css/app.css";
import RennerBold from "../../assets/fonts/Renner700Bold.woff";

export const GlobalStyles = css(AppCss)

export const Fonts = css`
    @font-face {
        font-family: "Renner Bold";
        src: url(${RennerBold}) format("woff");
    }
`

export const Header = styled.header`
    background-color: #e5edee;
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: ${(props) => (props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : "maroon")};

    h1 {
        color: #4a4a4a;
    }
`

export const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
export const Main = styled(Container)`
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`

export const UrlButton = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`