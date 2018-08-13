import React from 'react';

interface AppProps {
	text: string;
}

class App extends React.Component<AppProps, {}> {
	static defaultProps = {
		test: 'world',
	};

	public render() {
		return <h1>Hello, {this.props.text}!</h1>;
	}
}

export default App;
