import '../../Styles/app.css'
import PersonIcon from '../../assets/PersonIcon.jpg'
function PersonalInfoForm({first, last, email, number, handleChange, sectionClick, isOpen}){
    return(
        <div className = "input-section" onClick={()=>sectionClick("general")}>
            <div className='header'>
                <h2 className='header-title'>General Information</h2>
                <div className="icon-container">
                    <img src= {PersonIcon} alt="PersonIcon" className = "icon"/>
                </div>
            </div>
            {isOpen && (
                <>
                    <label htmlFor = "first">First Name</label>
                    <input id = "first" name = "first" placeholder = "First Name" value = {first} onChange = {(e)=>{handleChange(e, "per")}}/>
                    <label htmlFor= "last">Last Name</label>
                    <input id = "last" name = "last" placeholder = "Last Name" value = {last} onChange = {(e)=>{handleChange(e, "per")}}/>
                    <label htmlFor= "email">Email</label>
                    <input id = "email" name = "email" placeholder = "Email" value = {email} onChange = {(e)=>{handleChange(e, "per")}}/>
                    <label htmlFor= "phone">Phone</label>
                    <input id = "phone" name = "phone" placeholder = "Phone Number" value = {number} onChange = {(e)=>{handleChange(e, "per")}}/>
                </>
            )}
            
        </div>
    )
}

export default PersonalInfoForm