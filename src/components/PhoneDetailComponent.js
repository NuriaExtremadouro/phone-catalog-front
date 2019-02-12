import React, { Component } from 'react';
import { Grid, Dimmer, Loader, Image, Segment, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { getPhone } from '../actions/phoneActions';

/**
 * Component that shows the details of a specific phone.
 */
export class PhoneDetailComponent extends Component {
    /**
     * Retrieve the phone data when the component loads.
     */
    componentDidMount() {
        this.props.getPhone(parseInt(this.props.match.params.id));
    }

    /**
     * Renders the view.
     */
    render() {
        // If there was a problem when retrieving the phone, it redirects to the NotFound page.
        if (!this.props.phone) {
            return <Redirect to='/notfound' />
        }

        return (
            <div className="phone-list-container">
                {this.props.isFetching ? 
                    <Dimmer active><Loader>Loading</Loader></Dimmer> :
                    <Grid>
                        <Segment className="details-data">
                            <Grid columns="equal">
                                <Grid.Column mobile={16} computer={8}>
                                    <Image className="details-image" src={this.props.phone.image}/>
                                </Grid.Column>
                                <Grid.Column mobile={16} computer={8}>
                                    <Header as='h1' dividing>{this.props.phone.name}</Header>
                                    <Grid columns="equal">
                                        <Grid.Column mobile={16} computer={8}>
                                            <label>Screen: </label>
                                            <p>{this.props.phone.screen}</p>
                                            <label>RAM: </label>
                                            <p>{this.props.phone.ram}</p>
                                            <label>Internal Memory: </label>
                                            <p>{this.props.phone.internalMemory}</p>
                                            <label>Camera: </label>
                                            <p>{this.props.phone.camera}</p>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} computer={8}>
                                            <label>Micro SD: </label>
                                            <p>{this.props.phone.microSD ? "Yes" : "No"}</p>
                                            <label>Battery: </label>
                                            <p>{this.props.phone.battery}</p>
                                            <label>Color: </label>
                                            <p>{this.props.phone.color}</p>
                                            <label>Price: </label>
                                            <p>{this.props.phone.price} €</p>
                                        </Grid.Column>
                                    </Grid>
                                    <Divider horizontal>Description</Divider>
                                    <p>{this.props.phone.description}</p>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Grid>
                }
            </div>
        );
    }
}

PhoneDetailComponent.propTypes = {
    getPhone: PropTypes.func.isRequired,
    phone: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  phone: state.data.phone,
  isFetching: state.data.isFetching
});

export default connect(mapStateToProps, { getPhone })(PhoneDetailComponent);