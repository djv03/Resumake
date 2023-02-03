console.log('script is running');



document.getElementById('workAddbtn').addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log('work add clicked');

    let newWorkField= document.createElement('textarea');
    newWorkField.classList.add('form-control');
    newWorkField.classList.add('mt-3');
    newWorkField.classList.add('experienceField');//-----> this line will provide class to each newly created textarea
    newWorkField.setAttribute('placeholder','enter next work experience');
    newWorkField.setAttribute('rows', 3);

    let firstworkField= document.getElementById('foraddExperience');
    let workAddbtn= document.getElementById('workAddbtn');

    firstworkField.insertBefore(newWorkField,workAddbtn);

})

document.getElementById('academicAddbtn').addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log('clicked');

    let newAcademicField= document.createElement('textarea');
    newAcademicField.classList.add('form-control');
    newAcademicField.classList.add('mt-3');
    newAcademicField.classList.add('academicField');
    newAcademicField.setAttribute('placeholder','enter next academic qualification');
    newAcademicField.setAttribute('rows', 3);

    let firstacademicField=document.getElementById('foraddAcademic');
    let academicAddbtn= document.getElementById('academicAddbtn');

    firstacademicField.insertBefore(newAcademicField,academicAddbtn);

})

//generating resume function

document.getElementById('generate_resume').addEventListener('click',(e)=>{
    e.preventDefault();

    console.log('generating started');

    // start filling template by grabbing value in inputs from form

    let nameField=document.getElementById('nameField');
    let phoneField= document.getElementById('phoneField');
    let adressField= document.getElementById('adressField');

    let socialField= document.getElementById('socialField');
    let LinkedInField= document.getElementById('LinkedInField');
    let githubField= document.getElementById('githubField');
   

    //filling gereral info
    document.getElementById('nameT').innerHTML=`<p id="name_left">${nameField.value}</p>`;
    document.getElementById('nameT2').innerHTML=`<p id="name_left">${nameField.value}</p>`;
    document.getElementById('contactT').innerHTML=`<p id="name_left">${phoneField.value}</p>`;
    document.getElementById('adressT').innerHTML=`<p id="name_left">${adressT.value}</p>`;
    

    //filling links and add href to each link
    document.getElementById('socialT').innerHTML=`${socialField.value}`;
    document.getElementById('socialT').setAttribute("href",`${socialField.value}`);
    document.getElementById('socialT').setAttribute("target","_blank");
    
    document.getElementById('linkedinT').innerHTML=`${LinkedInField.value}`;
    document.getElementById('linkedinT').setAttribute("href",`${LinkedInField.value}`);
    document.getElementById('linkedinT').setAttribute("target","_blank");
    
    document.getElementById('githubT').innerHTML=`${githubField.value}`;
    document.getElementById('githubT').setAttribute("href",`${githubField.value}`);
    document.getElementById('githubT').setAttribute("target","_blank");

    //filling objective
    document.getElementById('objectiveT').innerHTML= document.getElementById('objectiveField').value;
    
    // filling experience
    // for this 1. grab all fields
    //          2. add all field to the id="experienceT" 


    // 1.getting all the elements of the "experienceField" class
    let wes=document.querySelectorAll('.experienceField');
    // console.log(wes);-------> uncomment this for debug
    let results="";//------> string to store the whole result

    for (const exp of wes) {
        //concating each experience of appicant to the <li>tag
        results=results+`<li>${exp.value}</li>`
    }

    //2.store created list of <li> to experienceT 
    document.getElementById('experienceT').innerHTML=results;


    // now repeat same process for academic qualification

    let qualifications= document.getElementsByClassName('academicField');
    console.log(qualifications)//-------> uncomment this for debug
    let Allqualification="";

    for (const qua of qualifications) {
        Allqualification=Allqualification+`<li>${qua.value}</li>`
    }
    document.getElementById('qualificationT').innerHTML=Allqualification;4

    //code for image upload
    let file=document.getElementById('profilepic').files[0];
    console.log(file);
    let reader= new FileReader();

    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function(){
        document.getElementById('profilepicT').src=reader.result

    };




    document.getElementById('resume-form').style.display='none';
    document.getElementById('resume-template').style.display='block';
})

//print resume
document.getElementById('print_resume').addEventListener('click',()=>{
    window.print();
})
