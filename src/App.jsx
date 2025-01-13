import { useState } from 'react'
import exampleData from './example-data.jsx'
import PersonalInfoForm from './Components/PersonalInfo/PersonalInfoForm.jsx'
import PersonalInfoPreview from './Components/PersonalInfo/PersonalInfoPreview.jsx'
import EducationForm from './Components/Education/EducationForm.jsx'
import EducationPreview from './Components/Education/EducationPreview.jsx'
import ExperienceForm from './Components/Experience/ExperienceForm.jsx'
import ExperiencePreview from './Components/Experience/ExperiencePreview.jsx'
import { v4 as uuidv4 } from 'uuid'
import Print from './Components/Additional/Print.jsx'
import './Styles/app.css'

function App(){

    //How will sections be organized?
    //Sections:
    //---PersonalInfo: {Name, Email...}
    //---Educations: [{id, School, Start, End ...}, {...}]
    //---Experiences: [{id, Company, Start, End, ...} , {...}]

    const [openSections, setOpenSections] = useState(
        {"general":true, "education":true, "experience": true});
    const [sections, setSections] = useState(exampleData);

    function handleSectionChange(e, section, id = null, detId = null){
        const{name,value} = e.target;
        if(section === "per"){
            const updatedPersonal = {...sections.personalInfo, [name]:value};
            setSections({...sections, personalInfo: updatedPersonal});
        }else if (section === "exp") {
            const updatedExp = sections.experiences.map((exp) => {
                if (exp.id !== null && exp.id === id) {
                    if (name === "detail") {
                        const updatedDetail = exp.detail.map((det) => 
                            det.id === detId ? { ...det, description: value } : det
                        );
                        return { ...exp, detail: updatedDetail }; // Simplified key usage
                    } else {
                        return { ...exp, [name]: value };
                    }
                }
                return exp; 
            });

            setSections({ ...sections, experiences: updatedExp });

        }else if(section === "edu"){
            const updatedEdu = sections.educations.map((edu) => {
                if(edu.id === id){
                    return {...edu, [name] : value};
                }else{
                    return edu;
                }
            })
            setSections({...sections, educations:updatedEdu});
        }else{
            console.log("Error: Section Does Not Exist");
        }
    }

    function handleAddSection(section){
        console.log('SectionAdd');
        if(section === "edu"){
            const updatedEdu = [...(sections.educations||[]), {id: uuidv4(), school:"", degree:"", startYear: "", endYear : ""}];
            setSections({...sections, educations:updatedEdu});
        }else if (section === "exp"){
            const updatedExp = [...(sections.experiences||[]), {id: uuidv4(), company:"", position:"", startYear: "", endYear : "", detail: []}];
            setSections({...sections, experiences:updatedExp});
        }else{
            console.log("Error: Section Does Not Have an Addition Function");
        }
    }

    function addDet(expId){
        console.log('Detail Add');
        const updatedExp = sections.experiences.map((exp) =>
            exp.id === expId ? {...exp, detail: [...(exp.detail||[]), {id: uuidv4(), description: ""}]} : exp
        );
        setSections({...sections, experiences:updatedExp});

    }

    function collapseToggle(section){
        if(section === "general"){
            console.log("general is toggled");
            const currentGeneral = openSections["general"];
            setOpenSections({...openSections, general: !currentGeneral});

        }else if(section === "education"){
            console.log("education is toggled");
            const currentEducation = openSections["education"];
            setOpenSections({...openSections, education: !currentEducation});
        }else if (section === "experience"){
            console.log("experience is toggled");
            const currentExperience = openSections["experience"];
            setOpenSections({...openSections, experience: !currentExperience});
        }else{
            console.log("Nothing is toggled");
        }
        
    }

    function handlePrint(){
        window.print();
    }


    function handleDeleteSection(section, sectionId, detId = null){
        //If detId is null assume delete entire section 
        //If detId is not null assume delete detail from section
        if(section === "edu"){
            const updatedEdu = sections.educations.filter((edu) => edu.id !== sectionId);
            setSections({...sections, educations:updatedEdu});
            
        }else if(section === "exp" && detId === null){
            const updatedExp = sections.experiences.filter((exp) => exp.id !== sectionId);
            setSections({...sections, experiences:updatedExp});

        }else if(section === "exp" && detId !== null){
            const updatedExp = sections.experiences.map((exp) => {
                if(exp.id === sectionId){
                    const updatedDet = exp.detail.filter((det)=> det.id !== detId);
                    return {...exp, detail:updatedDet};
                }
                return exp;
            });
            setSections({...sections, experiences:updatedExp});
        }else{
            console.log("No sections deleted")
        }
    }


    return (
    // add div parent container so that we can add css and define layout rules that applies 
    // to all children elements
    <div className='container'>
        <header/>
        <div className = 'form'>
            <PersonalInfoForm 
                first = {sections.personalInfo.first}
                last = {sections.personalInfo.last}
                email = {sections.personalInfo.email}
                number = {sections.personalInfo.number}
                handleChange = {handleSectionChange}
                sectionClick={collapseToggle}
                innerSectionClick = {inner}
                isOpen = {openSections["general"]}
            />
            <EducationForm 
                educations = {sections.educations} 
                handleChange={handleSectionChange}
                sectionClick={collapseToggle}
                isOpen={openSections["education"]}
                addEdu = {handleAddSection}
                deleteEdu={handleDeleteSection}
            />
                    
            <ExperienceForm 
                experiences={sections.experiences} 
                handleChange ={handleSectionChange} 
                addDetail={addDet}
                sectionClick={collapseToggle}
                isOpen = {openSections["experience"]}
                addExp = {handleAddSection}
            />
            
        </div>
        <div className = 'preview'>
            <Print handlePrint = {handlePrint}/>
            <PersonalInfoPreview
                first = {sections.personalInfo.first}
                last = {sections.personalInfo.last}
                email = {sections.personalInfo.email}
                number = {sections.personalInfo.number}
            />
            <EducationPreview educations = {sections.educations} />
            <ExperiencePreview experiences={sections.experiences} />
        </div>
    </div>
  )
}

export default App