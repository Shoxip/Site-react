import { Link } from 'react-router-dom';
import './projectList.css'

const ProjectList = ({project}) => {

    return (
            <div className="component">
                <div className="before"><Link to={project.path}><div className="content">{project.text}</div> </Link></div>
            </div>

    );
};
export default ProjectList