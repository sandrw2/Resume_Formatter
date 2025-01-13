
function EducationPreview({educations}){
    return(
        <div className = "educations">
            <h3>
                Education
                <hr></hr>
            </h3>
            {educations.map((edu)=>(
                <div key={edu.id}>
                    <h5>
                        {`${edu.school ? edu.school : "School Name"} (${edu.startYear ? edu.startYear : "Start Year "} - 
                        ${edu.endYear ? edu.endYear : " End Year"})`}
                    </h5>
                    <p>
                        {`${edu.degree ? edu.degree : "Degree"} - ${edu.gpa ? edu.gpa : "GPA"}`}
                    </p>
                </div>
                
            ))}
        </div>
        
    )
}

export default EducationPreview