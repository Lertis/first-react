import React from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const ListLazyLoad = React.lazy(() => import('./List'));

export default class CommentList extends React.Component {
	API_URL = "https://jsonplaceholder.typicode.com/comments";
	state = {
		comments: [],
		loading: true,
		error: false
	};

	componentDidMount() {
		axios.get(this.API_URL)
			.then((comments) => {
				setTimeout(() => this.setState({ comments: comments.data, loading: false }), 1200); // Just that spinner works
			})
			.catch(() => {
				this.setState({ comments: [], loading: false, errors: true });
			});
	}

	render() {
		return (
			<div>
				{
					this.state.loading ?
						<div className="flex-center">
							<CircularProgress />
						</div> :
						<div>
							{
								this.state.error ?
									<div>
										<h2 className="warning-text text-center">Please check your internet connection!</h2>
									</div> :
									<div>
										<React.Suspense fallback={<p>Loading...</p>}>
											<ListLazyLoad comments={this.state.comments}></ListLazyLoad>
										</React.Suspense>
									</div>
							}
						</div>
				}
			</div>
		);
	}
}
