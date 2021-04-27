import './projects.css'
import ProjectList from './components/projectList'
import { useState } from 'react';


function Projects() {
    // const [projects, setProjects] = useState(
    //     [
    //         {
    //             id: 1,
    //             path: '/propjects/test',
    //             text: 'Open this test project :)',

    //         },
    //         {
    //             id: 2,
    //             path: '#',
    //             text: 'Just test empty link',
    //         }
    //     ]
    // );
    
    const [projectsList, setProjectda] = useState([   
    {
        id: 1,
        path: `/projects/test`,
        text: `Сюда можно кликнуть и что-то произойдёт, но зачем?`,

    },
    {
        id: 2,
        path: `#`,
        text: `Empty test link`,
    },
    {
        id: 3,
        path: `#`,
        text: `Empty test link`,
    }
    ])

    return (
        <div className="projectCase">
            {projectsList.map((project) => (
                <ProjectList key ={project.id} project = {project} />
            )).reverse()}
        </div>
    );
}

export default Projects;