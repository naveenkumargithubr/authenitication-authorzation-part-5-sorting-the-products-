import {BsFilterRight} from 'react-icons/bs' // this is the filter icon to imort from react-icons

import './index.css'

// this header is used to sorting the products based on the price
const ProductsHeader = props => {
  const {sortbyOptions, activeOptionId, updateActiveOptionId} = props
  // sortbyoptions are displayed high-low and low-high
  // activeoptionId is changing over the time when the select element is clicked so we update it on state
  // updateOptionid is the changed to latest data

  // this.onchange method is when select element is triggered then corresponding the details will be displayed
  const onChangeSortby = event => {
    updateActiveOptionId(event.target.value)
  }

  return (
    <div className="products-header">
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <h1 className="sort-by">Sort by</h1>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
