import React from 'react';

const projects = [
    {
        projectName: 'Project'
    }
]

function Project() {
    return (
        <section>
            <h3>{projects[0].projectName}</h3>
        </section>
    )
}

export default Project;