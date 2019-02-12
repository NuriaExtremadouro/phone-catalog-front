import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";

/**
 * Top menu that is always placed at the top of the screen.
 */
export default () => (
    <Grid columns='equal' verticalAlign="middle" className="top-header">
        <Grid.Column textAlign="center">
            <Link to='/'>
            Phone Catalog
            <div className="underline"></div>
            </Link>
        </Grid.Column>
    </Grid>
)
