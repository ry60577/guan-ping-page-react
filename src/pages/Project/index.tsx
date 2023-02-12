import '../../assets/styles/project.scss';
import data from 'staticData';
import ProjectCard from 'conponents/ProjectCard';

const Project = () => {
    const { project } = data
    return (
        <div className="project">
            <h1>Project</h1>
            {
                project.map((item, index) => (
                    <div>
                        <ProjectCard project={ item } key={index} />
                    </div>
                ))
            }
        </div>
    )   
}

export default Project