import React, { Component } from 'react'
import { graphql } from 'gatsby'

import contactData from './../data/contact'

const styles = {
  rootContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: 'gray',
    paddingTop: 15,
  },
}

export class Footer extends Component {
  render() {
    return (
      <div style={styles.rootContainer}>
        <p>
          {Object.keys(contactData).map(key => {
            if (contactData[key]) {
              return (
                <a href={contactData[key]} target="_new">
                  {key}
                </a>
              )
            }
          })}
        </p>
      </div>
    )
  }
}

export default Footer
