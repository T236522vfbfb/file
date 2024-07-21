import React from "react";

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { filters, selected, onSelectFilter } = this.props;
        return(
            <div className="ToolBar">
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        className={filter === selected ? 'filter-selected' : ''}
                        onClick={() => onSelectFilter(filter)}>
                        {filter}
                    </button>
                ))}
            </div>
        )
    }
}


export default Toolbar;