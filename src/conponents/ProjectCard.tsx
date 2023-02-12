import { useState } from 'react';
import '../assets/styles/components/project_card.scss';
import Viewer from 'react-viewer';

const ProjectCard = ( { project }: { project: Object | any } ) => {
    const cover = project.image.at(0);
    const [ visible, setVisible ] = useState(false);
    let imageList = [];
    imageList = project.image.map((item: any, index: any) => {
        return {src: item, alt: `${project.name}-${index+1}`}
    });

    return (
        <div className="project_card">
            <div className="project_content">
            <h2>{ project.name }</h2>
            <div className="environment">
                {
                    project.environment.map((item: any) => (<span key={item}> #{ item }</span>))
                }
            </div>
            <div className="row">{ project.desc }</div>
            <div className="row">
                <span className="desc_title">In charge:</span>
                { project.charge }
            </div>
            <div className="row">
                <div className="desc_title">Feature:</div>
                <ul>
                    {
                        project.feature.map((item: any) => (<li key={item}> { item }</li>))
                    }
                </ul>
            </div>
            </div>
            <img src={cover} alt="" onClick={() => { setVisible(true); }} />
            <Viewer
                visible={visible}
                onClose={() => { setVisible(false); } }
                images={imageList}
            />
        </div>
    )
}

export default ProjectCard