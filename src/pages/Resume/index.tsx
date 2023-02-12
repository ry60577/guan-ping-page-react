import '../../assets/styles/resume.scss';
import data from '../../staticData';
import ResumeCard from '../../conponents/ResumeCard'

const Resume = () => {
    const { resume } = data
    return (
        <div className="resume">
            <h1>Resume</h1>
            <div className="row">
                <h2>Skills</h2>
                <div>
                    <ResumeCard resume={ resume.skill } />
                </div>
            </div>
            <div className="row">
                <h2>Work Experience</h2>
                <div>
                    {
                        resume.experience.map((item, index) => (<ResumeCard resume={ item } key={index} />))
                    }
                </div>
            </div>
            <div className="row">
                <h2>Education</h2>
                <div>
                    {
                        resume.education.map((item, index) => (<ResumeCard resume={ item } key={index} />))
                    }
                </div>
            </div>
        </div>
    )
}

export default Resume