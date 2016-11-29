'use strict'

import React from 'react'
import styles from './layout.scss'

export default class Layout extends React.Component {
	render() {
		return (
			<div className={styles.layout}>
				<h1>React Dev Boilerplate!</h1>
				<h2>Start building something cool!</h2>
			</div>
		)
	}
}