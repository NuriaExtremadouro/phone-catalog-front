import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";

/**
 * Page to show in case the user attepts to navigate to a non-existent page.
 */
export default () => (
    <div className="phone-list-container">
        <Grid columns="equal" textAlign="center">
            <Grid.Column>
                <Header as="h1">Page not found</Header>
                <Link to="/">Go back</Link>
            </Grid.Column>
        </Grid>
    </div>
)
