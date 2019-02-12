import React, { Component } from 'react';
import { Dimmer, Grid, Icon, Image, Loader, Header, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getPhones } from '../actions/phoneActions';
import { PropTypes } from 'prop-types';

/**
 * Component that shows the list of phones.
 */
export class PhoneListContainer extends Component {
  /**
   * Retrieves the phone list when the component loads.
   */
  componentDidMount() {
    this.props.getPhones();
  }

  /**
   * Renders the view.
   */
  render() {
    return (
      <div className="phone-list-container">
        {this.props.isFetching ?
          <Dimmer active><Loader>Loading</Loader></Dimmer> :
          <Grid>
            {this.props.phones.map((phone) =>
              <Grid.Column key={phone.id} widescreen={4} largeScreen={5} mobile={16}>
                <Link to={`/detail/${phone.id}`}>
                  <Segment className="phone-card">
                    <Image className="card-image" src={phone.image} />
                    <div className="card-text">
                      <Header as='h3'>{phone.name}</Header>
                      <p>{phone.price} €</p>
                      <Header as='h4' className="card-details">View details<Icon name="angle right"></Icon></Header>
                    </div>
                  </Segment>
                </Link>
              </Grid.Column>
            )}
          </Grid>
        }
      </div>
    );
  }
}

PhoneListContainer.propTypes = {
  getPhones: PropTypes.func.isRequired,
  phones: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  phones: state.data.phones,
  isFetching: state.data.isFetching
});

export default connect(mapStateToProps, { getPhones })(PhoneListContainer)