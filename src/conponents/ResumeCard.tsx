import '../assets/styles/components/resume_card.scss'

const ResumeCard = ( { resume }: { resume: Object | any } ) => {
    let duty;
    if (resume.length > 0) {
        duty = resume.map((item: any) => (<li key={item}>{item}</li>))
    } else if (resume?.duty) {
        duty = resume?.duty.map((item: any) => (<li key={item}>{item}</li>))
    }
    return (
        <div className="resume_card">
            {resume?.workTime
                ? <div className="work_time">{ resume?.workTime }</div>
                : <div className="work_time">{ '' }</div> 
            }
            <div className="resume_content">
                {resume?.title
                    ? <div className="resume_title">{ resume?.title }</div>
                    : <div className="resume_title">{ '' }</div> 
                }
                {resume?.establishmentName
                    ? <div className="woresume_companyrk_time">{ resume?.establishmentName }</div>
                    : <div className="resume_company">{ '' }</div> 
                }
                <ul>
                    { duty }
                </ul>
            </div>
        </div>
    )
}

export default ResumeCard