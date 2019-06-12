import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class AnimatedProfileWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveringReviews: false,
      hoveringFollowers: false,
      hoveringComments: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    if (e.target.id === 'reviewsButton') {
      this.setState({ hoveringReviews: true })
    };
    if (e.target.id === 'followersButton') {
      this.setState({ hoveringFollowers: true })
    };
    if (e.target.id === 'commentsButton') {
      this.setState({ hoveringComments: true })
    };
  }

  handleMouseLeave(e) {
    if (e.target.id === 'reviewsButton') {
      this.setState({ hoveringReviews: false })
    };
    if (e.target.id === 'followersButton') {
      this.setState({ hoveringFollowers: false })
    };
    if (e.target.id === 'commentsButton') {
      this.setState({ hoveringComments: false })
    };
  }

  render() {
    const styles = StyleSheet.create({
      root: {
        display: 'block',
      },
      container: {
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,
        marginBottom: 40,
      },
      imageContainer: {
        position: 'relative',
        width: 150,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,
        marginBottom: 40,
      },
      profileAvatar: {
        width: 100,
        height: 100,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
        borderTop: 'solid 2px transparent',
        borderBottom: this.state.hoveringFollowers ? 'solid 2px #BDBDBD':'solid 2px transparent',
        borderLeft: this.state.hoveringReviews ? 'solid 2px #BDBDBD':'solid 2px transparent',
        borderRight: this.state.hoveringComments ? 'solid 2px #BDBDBD':'solid 2px transparent',
        borderRadius: '50%',
      },
      profileButton: {
        display: 'inline-block',
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        cursor: 'pointer',
        backgroundColor: '#EEEEEE',
        ':hover': {
          backgroundColor: '#BDBDBD',
          color: 'white',
        },
        borderRadius: '25px',
        width: 75,
      },
      menuIconsR: {
        position: 'absolute',
        top: '45%',
        left: '0',
        color: this.state.hoveringReviews ? '#BDBDBD':'transparent',
      },
      menuIconsF: {
        position: 'absolute',
        top: '118',
        left: '48.5%',
        color: this.state.hoveringFollowers ? '#BDBDBD':'transparent',
      },
      menuIconsC: {
        position: 'absolute',
        top: '45%',
        right: '0',
        color: this.state.hoveringComments ? '#BDBDBD':'transparent',
      },
    });

    return (
      <div className={css(styles.root)}>
        <div className={css(styles.imageContainer)}>
          <img className={css(styles.profileAvatar)} alt='' src='https://jmc.edu.ph/wp-content/uploads/2018/02/female1-512.png'></img>
          <span className={css(styles.menuIconsR)}>R</span>
          <span className={css(styles.menuIconsF)}>F</span>
          <span className={css(styles.menuIconsC)}>C</span>
        </div>
        <div className={css(styles.container)}>

          <div
            id='reviewsButton' 
            className={css(styles.profileButton)} 
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
              Reviews
          </div>

          <div 
            id='followersButton' 
            className={css(styles.profileButton)} 
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
              Followers
          </div>

          <div 
            id='commentsButton' 
            className={css(styles.profileButton)} 
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
              Comments
          </div>
        </div>
      </div>
    );
  }
}

export default AnimatedProfileWidget;
