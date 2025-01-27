import '../../Styles/app.css'
import ExperienceIcon from '../../assets/ExperienceIcon.jpg'
import DeleteIcon from '../../assets/RedXIcon.png'
import minusIcon from '../../assets/MinusIcon.png'
function ExperienceForm({experiences, handleChange, addDetail, sectionClick, isOpen, addExp, deleteExp}){
    
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
                    <img
                        src = {DeleteIcon}
                        className = "delete-button" 
                        onClick={(e)=>{e.stopPropagation(); deleteExp("exp", exp.id)}}   
                        alt="Delete"
                    /> 
                    <label htmlFor = {`${exp.id}company`}>Company</label>
                    <input
                        placeholder = "Company"
                        id={`${exp.id}company`}
                        name = "company"
                        value = {exp.company}
                        onChange = {(e) => handleChange(e, "exp", exp.id)}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <label htmlFor = {`${exp.id}position`}>Position</label>
                    <input
                        placeholder="Position"
                        id = {`${exp.id}position`}
                        name="position"
                        value={exp.position}
                        onChange={(e) => handleChange(e, "exp", exp.id)}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <label htmlFor = {`${exp.id}startYear`}>Start Year</label>
                    <input
                        placeholder="Start Year"
                        id = {`${exp.id}startYear`}
                        name="startYear"
                        value={exp.startYear}
                        onChange={(e) => handleChange(e, "exp", exp.id)}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <label htmlFor = {`${exp.id}endYear`}>End Year</label>
                    <input
                        placeholder="End Year"
                        id = {`${exp.id}endYear`}
                        name = "endYear"
                        value={exp.endYear}
                        onChange={(e) => handleChange(e, "exp", exp.id)}
                        onClick={(e) => e.stopPropagation()}
                    />
                    {exp.detail && exp.detail.map((det)=>(
                        <div key={det.id}>
                            <label htmlFor = {`${det.id}detail`}>Detail</label>
                            <div className = 'detail-section'>
                                <input
                                    key = {det.id}
                                    placeholder = "Detail"
                                    id = {`${det.id}detail`}
                                    name = "detail"
                                    value = {det.description}
                                    onChange={(e) => handleChange(e, "exp", exp.id, det.id)}
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <img
                                    src = {minusIcon}
                                    className = "minus-button" 
                                    onClick={(e)=>{e.stopPropagation(); deleteExp("exp", exp.id, det.id)}}   
                                    alt="minus-button"
                                />
                            </div>
                            
                        </div>
                    ))}
                    <button className = "form-button" onClick={(e) => {e.stopPropagation(); addDetail(exp.id)}}>Add Detail</button>
                </div>
            ))}
            {isOpen &&  (<button className = "form-button" onClick={(e)=> {e.stopPropagation(); addExp("exp")}}>Add Experience</button>)}
        </div>
    )
}
export default ExperienceForm