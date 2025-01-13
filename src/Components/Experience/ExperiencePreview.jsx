import '../../Styles/app.css'

function ExperiencePreview({experiences}){
     return(
        <div className = "experiences">
            <h3>
                Experiences
                <hr></hr>
                {experiences.map((exp) => (
                    // Key always goes on the top level element of the list item
                    <div key = {exp.id} className = "exp">
                        <span className = "exp-company">{`${exp.company ? exp.company : "Company"} (${exp.position ? exp.position: "Position"}) `}</span>
                        <span className= "exp-date">{`${exp.startYear ? exp.startYear : "Start Year"} - ${exp.endYear ? exp.endYear : "End Year"}`}</span>
                        <ul>
                            {exp.detail.map((det)=>(
                                <li key = {det.id}>{det.description}</li>
                            ))}
                        </ul>
                        
                    </div>
                ))}
            </h3>
        </div>
    )
}

export default ExperiencePreview