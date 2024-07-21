import React from "react";

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { projects } = this.props;
        return(
            <div className="ProjectList">
                {projects.map((project, index) => (
                    <div key={index} className={project.category}>
                        <img src={project.img} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ProjectList;