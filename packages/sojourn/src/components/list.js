import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const List = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const classes = useStyles()

    return (
        <Items className={classes.root}>
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                return (
                    <Link key={post.id} link={post.link}>
                        {post.title.rendered}
                        <br/>
                    </Link>
                )
            })}
            <PrevNextNav>
                {data.previous && (
                    <Button variant="contained"
                        onClick={() => {
                            actions.router.set(data.previous)
                        }}
                        >
                        &#171; Prev
                    </Button>
                )}
                {
                    data.next && (
                        <Button variant="contained"
                            onClick={() => {
                                actions.router.set(data.next)
                            }}
                            >
                            Next &#187;
                        </Button>
                    )
                }
            </PrevNextNav>
        </Items>
    )
}

export default connect(List)

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`
const PrevNextNav = styled.div`
  padding-top: 1.5em;
`