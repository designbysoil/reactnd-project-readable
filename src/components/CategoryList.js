import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
	
	render() {
		const { categories } = this.props
		return (
			<div className="categories">
				<h3>Browse by category</h3>
				<ul className="category-list">
					{categories.categories.map((category, index) => (
		        <li key={index} className="category">
		          <Link to={`/category/${category.name}`} key={category.path}>{category.name}</Link>
		        </li>
		      ))}
	      </ul>
      </div>
		)
	}
}

export default CategoryList