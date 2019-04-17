import React, { Component } from 'react'

import contactData from './../data/contact'

const styles = {
  rootContainer: {
    letterSpacing: 2,
    color: 'gray',
  },
  footerUnorderedList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerListItem: {
    listStyleType: 'none',
    marginRight: '10',
    marginLeft: '10',
  },
}

export class Footer extends Component {
  render() {
    return (
      <div style={styles.rootContainer}>
        <ul style={styles.footerUnorderedList}>
          {Object.keys(contactData).map(key => {
            if (contactData[key]) {
              return (
                <li style={styles.footerListItem}>
                  <a href={contactData[key]} target="_new">
                    {key}
                  </a>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

export default Footer
