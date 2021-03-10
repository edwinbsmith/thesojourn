import React from "react"
import { connect, Global, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./Post"
import Page from "./page"
import Loading from "./loading"
import Error from "./error"
import CssBaseline from "@material-ui/core/CssBaseline"
import { GlobalStyles, Fonts, Header, HeaderContent, Main, Menu, UrlButton } from "./styles";
import Grid from "@material-ui/core/Grid"

const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <Head>
                <title>My First Theme</title>
                <meta
                    name="description"
                    content="based on some stuff"
                />
            </Head>
            <Global styles={Fonts} />
            <CssBaseline />
            <Global styles={GlobalStyles} />
            <Header isPostType={data.isPostType} isPage={data.isPage}>
                <HeaderContent>
                    <h1>THEME WORKSHOP</h1>
                    { state.theme.isUrlVisible ? (
                        <>
                            Current URL: {state.router.link}{" "}
                            <UrlButton onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</UrlButton>
                        </>
                    ) : (
                        <UrlButton onClick={actions.theme.toggleUrl}>Show URL &#x3e;</UrlButton>
                    )
                    }
                    <Menu>
                        <Link link="/">Home</Link>
                        <Link link="/destinations">Destinations</Link>
                        <Link link="/about-us">About Us</Link>
                    </Menu>
                </HeaderContent>
            </Header>
            <Main maxWidth="sm">
                <Grid item xs={12}>
                    <Switch>
                        <Loading when={data.isFetching} />
                        <List when={data.isArchive} />
                        <Post when={data.isPost} />
                        <Page when={data.isPage} />
                        <Page when={data.isDestinations} />
                        <Error when={data.isError} />
                    </Switch>
                </Grid>

            </Main>
        </>
    )
}

export default connect(Root)