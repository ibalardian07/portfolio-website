import AOS from 'aos';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import Project0 from '../assets/images/projects/project-1.png'
import Project1 from '../assets/images/projects/project-1.webp'
import Project2 from '../assets/images/projects/project-2.webp'
import Project3 from '../assets/images/projects/project-3.webp'
import ProjectSmm from '../assets/images/projects/project-smm.png'
import Project4 from '../assets/images/projects/project-4.jpg'
import Project5 from '../assets/images/projects/project-5.webp'
import Project6 from '../assets/images/projects/project-6.webp'
import Project7 from '../assets/images/projects/project-7.webp'
import Project8 from '../assets/images/projects/project-8.webp'
import Project9 from '../assets/images/projects/project-9.jpeg'
import Project10 from '../assets/images/projects/project-rakyatpay.png'
import Project11 from '../assets/images/projects/project-elaundry.png'
import Project12 from '../assets/images/projects/project-hotelhebat.png'
import Project13 from '../assets/images/projects/project-gamapay.png'
import Project14 from '../assets/images/projects/project-portfolio.png'

const projects = [
    {
        'name': 'Clickbox HTML5',
        'description': 'This is a simple game I made using vanilla JavaScript.',
        'media': Project0,
        'link': Project0,
        'stack': ['HTML', 'CSS', 'Vanilla Js'],
    },
    {
        'name': 'Bukukas',
        'description': 'Digital financial recording website application.',
        'media': Project1,
        'link': Project1,
        'stack': ['Bootstrap 4', 'Codeigniter 4'],
    },
    {
        'name': 'E-Learn',
        'description': 'Digital learning and class website.',
        'media': Project3,
        'link': Project3,
        'stack': ['Bootstrap 4', 'Codeigniter 4'],
    },
    {
        'name': 'E-SPP',
        'description': 'Website application for making tuition payments.',
        'media': Project2,
        'link': Project2,
        'stack': ['Bootstrap 4', 'Codeigniter 4'],
    },
    {
        'name': 'E-Laundry',
        'description': 'Website application for laundry business.',
        'media': Project11,
        'link': Project11,
        'stack': ['Bootstrap 4', 'Codeigniter 4'],
    },
    {
        'name': 'WaroengSosmed',
        'description': 'SMM Panel is a website for purchasing Social Media Marketing services.',
        'media': ProjectSmm,
        'link': ProjectSmm,
        'stack': ['Bootstrap 4', 'Laravel 9'],
    },
    {
        'name': 'Hotel Hebat',
        'description': 'Online hotel room booking website.',
        'media': Project12,
        'link': Project12,
        'stack': ['Bootstrap 4', 'PHP MVC'],
    },
    {
        'name': 'Undangen',
        'description': 'Digital wedding invitation website.',
        'media': Project4,
        'link': Project4,
        'stack': ['Bootstrap 4', 'Codeigniter 4'],
    },
    {
        'name': 'Coffe S',
        'description': 'A landing page designed for a furniture sales website.',
        'media': Project5,
        'link': Project5,
        'stack': ['Bootstrap 4'],
    },
    {
        'name': 'Furniture S',
        'description': 'A landing page designed for a furniture sales website.',
        'media': Project6,
        'link': Project6,
        'stack': ['Bootstrap 4'],
    },
    {
        'name': 'GamaPay',
        'description': 'Website application for credit, PPOB, and token agents such as e-wallets.',
        'media': Project13,
        'link': Project13,
        'stack': ['Bootstrap 4', 'Codeigniter 4'],
    },
    {
        'name': 'SumutPay',
        'description': 'Website application for credit, PPOB, and token agents such as e-wallets.',
        'media': Project7,
        'link': Project7,
        'stack': ['Bootstrap 4', 'Codeigniter 4'],
    },
    {
        'name': 'POBIGAME',
        'description': 'A Top Up Game, Game Voucher and PPOB website.',
        'media': Project8,
        'link': Project8,
        'stack': ['Bootstrap 5', 'Codeigniter 4'],
    },
    {
        'name': 'RGTOPUP',
        'description': 'A Top Up Game, Game Voucher and PPOB website.',
        'media': Project9,
        'link': 'https://rgtopup.id/',
        'stack': ['Bootstrap 5', 'Codeigniter 4'],
    },
    {
        'name': 'RakyatPay',
        'description': 'A website for selling credit, PPOB and game top-up panels.',
        'media': Project10,
        'link': Project10,
        'stack': ['Bootstrap 5', 'Codeigniter 4'],
    },
    {
        'name': 'Portfolio',
        'description': 'Simple personal portfolio website',
        'media': Project14,
        'link': Project14,
        'stack': ['Bootstrap 5', 'React Js'],
    },
];

function ProjectsList() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <>
            {projects
            .slice()
            .reverse()
            .map((project, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4" key={index} data-aos="fade-in" data-aos-duration="1200">
                    <div className="certificate-card">
                        <img src={project.media} alt={project.name} className="certificate-img-2" />
                        <a href={project.link} target="_blank" className="view-link">
                            <i className="fa-solid fa-eye"></i>
                        </a>
                    </div>
                    <div className="certificate-detail p-2">
                        <h6 className="certificate-name mt-3 mb-1">{project.name}</h6>
                        <p className="certificate-publisher mt-0 mb-3">{project.description}</p>
                        <div className="certificate-tag-wrapper">
                            {project.stack.map((tech, index) => (
                                <span className="certificate-tag" key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default function Projects() {
    return (
        <> 
            <Helmet>
                <title>Ibalardian | Projects</title>
            </Helmet>

            <h2 className="article-title mb-4">Selected Projects</h2>

            <div className="row">
                <ProjectsList />
            </div>
        </>
    );
}