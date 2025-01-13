import '../../Styles/app.css'
import ExperienceIcon from '../../assets/ExperienceIcon.jpg'
function ExperienceForm({experiences, handleChange, addDetail, sectionClick, isOpen, addExp}){
    
    return(
        <div className='section-background' onClick={()=>sectionClick("experience")}>
            <div className='header'>
                <h2 className='header-title'>Experience</h2>
                <div className="icon-container">
                    <img src= {ExperienceIcon} alt="Experience Icon" className='icon'/>
                </div>
            </div>
            
            {isOpen && experiences.map((exp) => (
                // Key always goes on the top level element of the list item
                <div key = {exp.id} className = "input-section"> 
                    <label htmlFor = {`${exp.id}company`}>Company</label>
                    <input
                        placeholder = "Company"
                        id={`${exp.id}company`}
                        name = "company"
                        value = {exp.company}
                        onChange = {(e) => handleChange(e, "exp", exp.id)}
                    />
                    <label htmlFor = {`${exp.id}position`}>Position</label>
                    <input
                        placeholder="Position"
                        id = {`${exp.id}position`}
                        name="position"
                        value={exp.position}
                        onChange={(e) => handleChange(e, "exp", exp.id)}
                    />
                    <label htmlFor = {`${exp.id}startYear`}>Start Year</label>
                    <input
                        placeholder="Start Year"
                        id = {`${exp.id}startYear`}
                        name="startYear"
                        value={exp.startYear}
                        onChange={(e) => handleChange(e, "exp", exp.id)}
                    />
                    <label htmlFor = {`${exp.id}endYear`}>End Year</label>
                    <input
                        placeholder="End Year"
                        id = {`${exp.id}endYear`}
                        name = "endYear"
                        value={exp.endYear}
                        onChange={(e) => handleChange(e, "exp", exp.id)}
                    />
                    {exp.detail && exp.detail.map((det)=>(
                        <div key={det.id}>
                            <label htmlFor = {`${det.id}detail`}>Detail</label>
                            <input
                                key = {det.id}
                                placeholder = "Detail"
                                id = {`${det.id}detail`}
                                name = "detail"
                                value = {det.description}
                                onChange={(e) => handleChange(e, "exp", exp.id, det.id)}
    
                            />
                        </div>
                    ))}
                    <button className = "form-button" onClick={() => {addDetail(exp.id)}}>Add Detail</button>
                </div>
            ))}
            
            {isOpen &&  (<button className = "form-button" onClick={()=> addExp("exp")}>Add Experience</button>)}
        </div>
    )
}
export default ExperienceForm