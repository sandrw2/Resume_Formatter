import '../../Styles/app.css'
import EducationIcon from '../../assets/EducationIcon.jpg'
import DeleteIcon from '../../assets/RedXIcon.png'
import EditButton from '../Additional/editButton'

function EducationForm({educations, handleChange, sectionClick, isOpen, openSubSect, addEdu, deleteEdu}){
    return (
        <div className='section-background' onClick={()=>sectionClick("education")}>
            <div className='header'>
                <h2 className='header-title'>Education</h2>
                <div className="icon-container">
                    <img src= {EducationIcon} alt="Education Icon" className='icon'/>
                </div>
            </div>
            
            {isOpen && educations.map((edu)=>(
                edu.id === openSubSect ? <div key={edu.id} className = "input-section" onClick={(e)=>{e.stopPropagation(); sectionClick("education", edu.id)}}>
                    <img
                        src = {DeleteIcon}
                        className = "delete-button" 
                        onClick={(e)=>{e.stopPropagation(); deleteEdu("edu", edu.id)}}   
                        alt="Delete"
                    />
                    <input 
                        name = "school" 
                        placeholder="School Name" 
                        value = {edu.school} 
                        onChange = {(e) => handleChange(e, "edu", edu.id)}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <input 
                        name  = "degree" 
                        placeholder="Degree" 
                        value = {edu.degree} 
                        onChange={(e) => handleChange(e, "edu", edu.id)}
                        onClick={(e)=> e.stopPropagation()}
                    />
                    <input 
                        name  = "startYear" 
                        placeholder="Start Year"   
                        value = {edu.startYear} 
                        onChange={(e) => handleChange(e, "edu", edu.id)}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <input
                        name  = "endYear" 
                        placeholder="End Year" 
                        value = {edu.endYear} 
                        onChange={(e) => handleChange(e, "edu", edu.id)}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <input 
                        name  = "gpa" 
                        placeholder="GPA" 
                        value = {edu.gpa} 
                        onChange={(e) => handleChange(e, "edu", edu.id)}
                        onClick={(e)=> e.stopPropagation()}
                    />
                </div>
                : <div key = {edu.id} className='closed-subsection' onClick={(e)=>{e.stopPropagation(); sectionClick("education", edu.id)}}> 
                    <div className='edit-button-container'>
                        <EditButton></EditButton>
                    </div>
                    Education
                </div>   
            ))}

            {isOpen && (
                <button 
                    className = "form-button" 
                    onClick={(e)=> {e.stopPropagation(); addEdu("edu")}}>Add Education
                </button>
            )}
        </div>
    )
    
}
export default EducationForm