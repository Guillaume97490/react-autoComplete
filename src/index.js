import React from 'react';
import ReactDOM from 'react-dom';
import { AutoComplete } from '@bit/primefaces.primereact.autocomplete';
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';

// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


class Example extends React.Component {
	constructor() {
		super();
		this.state = {
			filteredvilles: null
		};
		this.filtervilles = this.filtervilles.bind(this);
    }
    
    

	componentDidMount() {
		// this.villes = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
        this.villes = "Bras-Panon,Cilaos,Entre-Deux,L'Étang-Salé,La Plaine-des-Palmistes,La Possession,Le Port,Le Tampon,Les Avirons,Les Trois-Bassins,Petite-Île,Saint-André,Saint-Benoît,Saint-Denis,Saint-Joseph,Saint-Leu,Saint-Louis,Saint-Paul,Saint-Philippe,Saint-Pierre,Sainte-Marie,Sainte-Rose,Sainte-Suzanne,Salazie,".split(',')
        
    }

	filtervilles(event) {
		setTimeout(() => {
			let results;

			if (event.query.length === 0) {
				results = [...this.villes];
			} else {
				results = this.villes.filter(ville => {
					return ville.toLowerCase().startsWith(event.query.toLowerCase());
				});
			}

			this.setState({ filteredvilles: results });
		}, 250);
	}

	itemTemplate(ville) {
		return (
			<div className='p-clearfix'>
				<img
					alt={ville}
					src={`https://raw.githubusercontent.com/primefaces/primereact/master/public/showcase/resources/demo/images/car/${ville}.png`}
					style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }}
				/>
				<div style={{ fontSize: '18px', float: 'right', margin: '10px 10px 0 0' }}>
					{ville}
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className='content-section implementation'>
				<PrimereactStyle />
				<h3>Advanced</h3>
				<AutoComplete
					value={this.state.ville}
					suggestions={this.state.filteredvilles}
					completeMethod={this.filtervilles}
					size={30}
					minLength={1}
					placeholder='Hint: type v or f'
					dropdown={true}
					// itemTemplate={this.itemTemplate.bind(this)}
					onChange={e => this.setState({ ville: e.value })}
				/>
				<span style={{ marginLeft: '50px' }}>
					ville: {this.state.ville || 'none'}
				</span>
			</div>
		);
	}
}

export default <Example />; 


ReactDOM.render(<Example />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
