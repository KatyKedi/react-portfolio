import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import profilePic from '../assets/images/profile/profile-pic.jpg'
import dockPic from '../assets/images/profile/dock.jpg'

function About() {
    return (
        <Container>
            <Row className='m-3 align-items-center'>
                <Col md={9}>
                    <Card className='bg-primary m-2'>
                        <Card.Body>
                            <Card.Title className='text-white'>My Story</Card.Title>
                            <Card.Text className='bg-white p-3 about-text'>Welcome to my website! My name is Katy and I am a California based Web Developer and Linguist, interested in combining my passions of Programming and Language to work in Computational Linguistics. I started my post highschool educational journey at a community college in Sacramento called American River College. Taking general education classes, I was unsure of what I wanted to study moving forward. I was most academically inclined in Mathematics,but this subject wasn't exactly my destiny. It wasn't until I took an Anthropology class as an elective that I discovered the study of Linguistics. After this course, I took Intro to Linguistics, and the rest was history.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='bg-primary m-2'>
                        <Card.Body>
                            <Card.Title className='text-white'>Educational background</Card.Title>
                            <Card.Text className='bg-white p-3 about-text'>I attended UC Santa Barbara where I earned a Bachelor’s degree in Linguistics and UC Davis Continuing Education where I earned a Certificate in Full Stack Web Development. My preferred subjects in the field of Linguistics include morphology, syntax, semantics, and historical linguistics. However, I am also well-versed in phonology and phonetics. In web development, my passion lies in the backend, especially working with databases and relationships between data. That being said, I am a equally proficient and comfortable working in the frontend, making me a balanced and well-rounded Web Developer.</Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Img src={profilePic} />
                    </Card>
                </Col>
            </Row>
            <Row className='m-3 align-items-center'>
                <Col md={3}>
                    <Card>
                        <Card.Img src={dockPic} />
                    </Card>
                </Col>
                <Col md={9}>
                    <Card className='bg-primary m-2'>
                        <Card.Body>
                            <Card.Title className='text-white'>Professional Experience</Card.Title>
                            <Card.Text className='bg-white p-3 about-text'>Currently, I am employed as a Teaching Assistant for 2U Bootcamps, where I work with instructors to mentor and maintain a class of Web Development students. As a TA, I always ensure my assignments are completed in an accurate, effective and timely manner by following my instructor or manager’s guidelines. It is essential that students receive feedback on their work in a timely manner so they can apply the necessary changes to their future code. It is also absolutely necessary that I update the class repository accurately and timely, so that I don’t upload something I shouldn’t or delay the student’s access to the curriculum they need. Working with the material and helping students not only improves my ability to teach and train others, but also solidifies my own education. Every day in class, I learn something new from the instructor and even the students, broadening my knowledge and furthering my personal development.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='bg-primary m-2'>
                        <Card.Body>
                            <Card.Title className='text-white'>Other Interests and Hobbies</Card.Title>
                            <Card.Text className='bg-white p-3 about-text'>In my free time, I enjoy learning new languages, playing videogames, and spending time with my loved ones. Languages I study include Spanish, French, Turkish, and American Sign Language. Videogames I play include Dead By Daylight, Rocket League, and Super Smash Bros (Melee and Ultimate). I love the any body of water, whether it be the beach, rivers, lakes, or waterfalls. I love also travelling but haven't done nearly enough of it!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default About