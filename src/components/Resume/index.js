import React from 'react';

function Resume() {
    return (
    <div id='resume-content'>
        <ul class='resume-section'>Skills
            <li className='resume-li'><i class="fa-solid fa-laptop-code"></i><p className='resume-p'>Analytical skills in phonetics, phonology, morphology, syntax, and historical linguistics.</p></li>
            <li className='resume-li'><i class="fa-solid fa-laptop-code"></i><p className='resume-p'>Skills in HTML/CSS, JavaScript, Python, ELAN, Praat, and Rezonator</p></li>
        </ul>
        <ul class='resume-section'>Research History
            <li className='resume-li'><i class="fa-solid fa-book"></i><p className='resume-p'>Worked under the direction of graduate student Jordan Douglas-Tavani and transcribed works of a field linguist into the international phonetic alphabet</p></li>
            <li className='resume-li'><i class="fa-solid fa-book"></i><p className='resume-p'>Worked under the direction of graduate student Chadi Ben Youssef and used ELAN to transcribe chunks of audio data in English, including notes accounting for pauses and intonation</p></li>
        </ul>
        <ul class='resume-section'>Education
            <li className='resume-li'><i class="fa-solid fa-graduation-cap"></i>
                <ul className='education'>Coding Bootcamp 
                    <li>University of California, Davis</li>
                    <li>June 2022</li>
                </ul>
            </li>
            <li className='resume-li'><i class="fa-solid fa-graduation-cap"></i>
                <ul className='education'>Bachelor of Arts: Linguistics
                    <li>GPA: 3.83</li>
                    <li>University of California, Santa Barbara</li>
                    <li>June 2020</li>
                </ul>
            </li>
            <li className='resume-li'><i class="fa-solid fa-graduation-cap"></i>
                <ul className='education'>Associate of Arts: Language Studies
                    <li>GPA: 3.71</li>
                    <li>American River College, Sacramento, CA</li>
                    <li>June 2018</li>
                </ul>
            </li>
        </ul>
    </div>
    )
}

export default Resume;