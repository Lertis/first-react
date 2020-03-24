import React from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';

export default class CommentList extends React.Component {
	API_URL = "https://jsonplaceholder.typicode.com/comments";
	state = {
		comments: [],
		loading: true
	};

	componentDidMount() {
		axios.get(this.API_URL)
			.then((comments) => {
				setTimeout(() => this.setState({ comments: comments.data, loading: false }), 1200); // Just that spinner works
			})
	}

	render() {
		return (
			<div>
				{this.state.loading ?
					<div className="flex-center">
						<CircularProgress />
					</div>
					:
					<ul>
						{this.state.comments.map((comment) => {
							return (
								<div className="flex-row" key={comment.id}>
									<Icon fontSize="small">email</Icon> {comment.email}
									<Icon fontSize="small">comment</Icon> {comment.name}
								</div>
							);
						})}
					</ul>
				}
			</div>
		);
	}
}
