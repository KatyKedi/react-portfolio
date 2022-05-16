import React from 'react';
import image1 from '../../assets/code-quiz.png';
import image2 from '../../assets/workday-scheduler.png';
import image3 from '../../assets/note-taker.png';
import image4 from '../../assets/budget-tracker.png';
// import image5 from '../../assets/apex-losers.png';
import image6 from '../../assets/tft-compare.png';

const projects = [
    {
      title: 'Code Quiz',
      img: image1,
      link: 'https://katykedi.github.io/code-quiz/',
      repo: 'https://github.com/KatyKedi/code-quiz'
    },
    {
      title: 'Workday Scheduler',
      img: image2,
      link: 'https://katykedi.github.io/workday-scheduler/',
      repo: 'https://github.com/KatyKedi/workday-scheduler'
    },
    {
      title: 'Note Taker',
      img: image3,
      link: 'https://note-taker-katykedi.herokuapp.com/',
      repo: 'https://github.com/KatyKedi/note-taker'
    },
    {
      title: 'Budget Tracker',
      img: image4,
      link: 'https://budget-tracker-katykedi.herokuapp.com/',
      repo: 'https://github.com/KatyKedi/budget-tracker'
    },
    // {
    //   title: 'Apex Losers',
    //   img: image5,
    //   link: 'https://github.com/KatyKedi/apex-losers',
    //   repo: 'https://github.com/KatyKedi/apex-losers'
    // },
    {
      title: 'TFT Compare',
      img: image6,
      link: 'https://tft-compare.herokuapp.com/',
      repo: 'https://github.com/Atweaver7/tft-compare'
    }
];

function Project() {
    return (
        <div>
            {projects.map((project, index) => (
                <section key={index}>
                        <img 
                            src={project.img}
                            alt={project.title + ' image'} 
                            className="img-thumbnail mx-1"
                            onClick={() =>  window.open(project.link)}
                            key={index}>
                        </img>
                    <a href={project.repo}>Repo</a>
                </section>
            ))}
        </div>
    )
}

export default Project;