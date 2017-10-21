import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import CategoryList from './CategoryList'
import { connect } from 'react-redux'
import { getCategories } from '../actions'


class App extends Component {

	componentDidMount() {
		this.handleListCategories()
	}
	
	handleListCategories = () => {
  	this.props.dispatch(getCategories())
  }


  render() {
  	console.log('Props', this.props)
    const { categories } = this.props
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <CategoryList categories={categories} />
          )}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
	categories
})

export default connect(mapStateToProps)(App)