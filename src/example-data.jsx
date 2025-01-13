import { v4 as uuidv4 } from 'uuid'
const exampleData = {
    personalInfo:{
        first: "Smandra",
        last: "Weng", 
        number: "(123)-456-7890",
        email: "reactPractice@gmail.com"
    },
    educations:[
        {id: uuidv4(), school: "UCI", degree: "Computer Science", startYear: 2002, endYear: 2006},
        {id: uuidv4(), school: "UCB", degree: "Math", startYear: 2006, endYear: 2010}
    ], 
    experiences:[
        {id: uuidv4(), company: "Google", position: "intern", startYear: 2010, endYear: 2012, 
            detail: [{id: uuidv4(), description: "Frontend Engineeer Intern"}, {id: uuidv4(), description:"Project manager Assistant"}]}, 
        {id: uuidv4(), company: "Bing", position: "intern", startYear: 2015, endYear: 2016, 
            detail: [{id: uuidv4(), description: "Full Stack Intern"}, {id: uuidv4, description: "Data Analyst Assistant"}]}
    ]
    
};

export default exampleData