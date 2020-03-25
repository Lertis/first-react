import React from 'react';
import Icon from '@material-ui/core/Icon';

export default function List({ comments }) {
	return (
		comments.map((comment, index) => {
			return (
				<div className="flex-row" key={index}>
					<Icon fontSize="small">email</Icon> {comment.email}
					<Icon fontSize="small">comment</Icon> {comment.name}
				</div>
			)
		})
	)
}
