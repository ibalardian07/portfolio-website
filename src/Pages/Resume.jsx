import AOS from 'aos';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import HtmlLogo from '../assets/images/tools/html.png'
import CssLogo from '../assets/images/tools/css.png'
import BsLogo from '../assets/images/tools/bootstrap.svg'
import TailLogo from '../assets/images/tools/tailwind.svg'
import JsLogo from '../assets/images/tools/js.png'
import ReactLogo from '../assets/images/tools/react.svg'
import PhpLogo from '../assets/images/tools/php.svg'
import CiLogo from '../assets/images/tools/codeigniter.svg'
import LaraLogo from '../assets/images/tools/laravel.png'
import MySLogo from '../assets/images/tools/mysql.png'
import FigmaLogo from '../assets/images/tools/figma.svg'
import CanvaLogo from '../assets/images/tools/canva.png'
import GitLogo from '../assets/images/tools/git.svg'
import BlogLogo from '../assets/images/tools/blogger.png'
import WordPressLogo from '../assets/images/tools/wordpress.png'
import OfficeLogo from '../assets/images/tools/office.png'

const toolsList = [
    {
        'name': 'HTML5',
        'icon': HtmlLogo,
    },
    {
        'name': 'CSS3',
        'icon': CssLogo,
    },
    {
        'name': 'Bootstrap',
        'icon': BsLogo,
    },
    {
        'name': 'Tailwind',
        'icon': TailLogo,
    },
    {
        'name': 'Vanilla Js',
        'icon': JsLogo,
    },
    {
        'name': 'React Js',
        'icon': ReactLogo,
    },
    {
        'name': 'Php',
        'icon': PhpLogo,
    },
    {
        'name': 'Codeigniter',
        'icon': CiLogo,
    },
    {
        'name': 'Laravel',
        'icon': LaraLogo,
    },
    {
        'name': 'MySQL',
        'icon': MySLogo,
    },
    {
        'name': 'Figma',
        'icon': FigmaLogo,
    },
    {
        'name': 'Canva',
        'icon': CanvaLogo,
    },
    {
        'name': 'Git',
        'icon': GitLogo,
    },
    {
        'name': 'Blogger',
        'icon': BlogLogo,
    },
    {
        'name': 'WordPress',
        'icon': WordPressLogo,
    },
    {
        'name': 'Microsoft Office',
        'icon': OfficeLogo,
    },
];

function ToolsSkills () {
    return (
        <>
            {toolsList.map((tool) => (
                <div className="skill-box mt-3" key={tool.name}>
                    <img src={tool.icon} className="skill-icon" alt={tool.name} />
                </div>
            ))}
        </>
    );
}

export default function Resume() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <> 
            <Helmet>
                <title>Ibalardian | Resume</title>
            </Helmet>

            <h2 className="article-title mb-4">Resume</h2>

            <div className="d-flex align-items-center">
                <div className="icon-box">
                    <i className="fa-solid fa-book"></i>
                </div>
                <div className="ms-3">
                    <h3 className="timeline-title mb-0">Education</h3>
                </div>
            </div>

            <section className="timeline mt-3">
                <ol className="timeline-list">
                    <li className="timeline-item" data-aos="fade-up" data-aos-duration="1000">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4 className="timeline-item-title">Asia Cyber University</h4>
                            <h6 className="timeline-item-text text-pw-primary text-end ms-2">Aug 2025 - Present</h6>
                        </div>
                        <h6 className="timeline-item-text">Study: Informatika</h6>
                        <h6 className="timeline-item-text">Status: Active Students</h6>
                        <ul className="timeline-sub-list mb-2">
                            <li className="timeline-text">
                                I start studying in August 2025. I hope to graduate and get a lot of good knowledge from here!
                            </li>
                        </ul>
                        <p className="timeline-text">
                            <b>Skills:</b> Emm I haven't gained any knowledge from here because I just started, but I will definitely get a lot
                        </p>
                    </li>
                    <li className="timeline-item" data-aos="fade-up" data-aos-duration="1300">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4 className="timeline-item-title">SMKN 1 Beringin</h4>
                            <h6 className="timeline-item-text text-pw-primary text-end ms-2">Jul 2019 - Jun 2022</h6>
                        </div>
                        <h6 className="timeline-item-text">Major: Rekayasa Perangkat Lunak</h6>
                        <h6 className="timeline-item-text">GPA: 89.91</h6>
                        <ul className="timeline-sub-list mb-2">
                            <li className="timeline-text">
                                Winning First Place in the Website Programming Skills Competency Test
                            </li>
                            <li className="timeline-text">
                                Becoming a tutor for children in school in the field of website programming
                            </li>
                            <li className="timeline-text">
                                Won 2nd Place in the Student Competency Competition (LKS) at the North Sumatra Province Level in the Web Technologies Field
                            </li>
                        </ul>
                        <p className="timeline-text">
                            <b>Skills:</b> Web Development · UI/UX Design · HTML5 · Cascading Style Sheets (CSS) · Vanilla JS · jQuery · PHP · MySQL · Figma (Software)
                        </p>
                    </li>
                </ol>
            </section>

            <div className="d-flex align-items-center">
                <div className="icon-box">
                    <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className="ms-3">
                    <h3 className="timeline-title mb-0">Experience</h3>
                </div>
            </div>

            <section className="timeline mt-3">
                <ol className="timeline-list">
                    <li className="timeline-item" data-aos="fade-up" data-aos-duration="1300">
                        <h4 className="timeline-item-title">Full-Stack Web Developer</h4>
                        <h6 className="timeline-item-text mb-0">Freelancer - Remote</h6>
                        <h6 className="timeline-item-text text-pw-primary">Jan 2024 - Present</h6>
                        <ul className="timeline-sub-list mb-2">
                            <li className="timeline-text">
                                Design and develop UI/UX for websites that are visually appealing, responsive, and user-friendly, taking into account audience needs and the latest design trends.
                            </li>
                            <li className="timeline-text">
                                Build and implement websites according to company or client requirements, from planning the structure to testing functionality and performance.
                            </li>
                            <li className="timeline-text">
                                Create graphic designs that support the brand’s visual identity for website content, including illustrations, banners, and other visual elements.
                            </li>
                            <li className="timeline-text">
                                Perform server and website maintenance to ensure optimal performance, security, and availability.
                            </li>
                            <li className="timeline-text">
                                Enhance SEO (Search Engine Optimization) quality by optimizing content, improving site structure, and implementing strategies to increase organic search rankings.
                            </li>
                        </ul>
                        <p className="timeline-text">
                            <b>Skills:</b> Web Development · UI/UX Design ·  HTML5 · Casdading Style Sheets (CSS) · Vanilla Js · jQuery · Bootstrap CSS · Tailwind CSS · React Js · PHP · Codeigniter · Laravel · MySQL · Figma · Git
                        </p>
                    </li>
                    <li className="timeline-item" data-aos="fade-up" data-aos-duration="1300">
                        <h4 className="timeline-item-title">Full-Stack Web Developer</h4>
                        <h6 className="timeline-item-text mb-0">RGTOPUP.ID - Remote</h6>
                        <h6 className="timeline-item-text text-pw-primary">Sep 2024 - Dec 2024</h6>
                        <ul className="timeline-sub-list mb-2">
                            <li className="timeline-text">
                                Design and optimize UI/UX for the company website, ensuring a visually appealing, user-friendly, and responsive interface that enhances overall user experience.
                            </li>
                            <li className="timeline-text">
                                Develop and implement websites based on company objectives and technical requirements, from initial concept and layout to deployment and performance testing.
                            </li>
                            <li className="timeline-text">
                                Create engaging graphic designs for products, marketing materials, and digital content, maintaining brand consistency across all platforms.
                            </li>
                            <li className="timeline-text">
                                Manage and maintain servers and digital products, ensuring system reliability, security, and smooth operation at all times.
                            </li>
                            <li className="timeline-text">
                                Enhance SEO (Search Engine Optimization) quality by optimizing content, improving site structure, and implementing strategies to increase organic search rankings.
                            </li>
                        </ul>
                        <p className="timeline-text">
                            <b>Skills:</b> Web Development · jQuery · Cascading Style Sheets (CSS) · UI/UX Design · HTML5 · Graphic Design · Database Design · Figma (Software) · Responsive Web Design · CodeIgniter · MySQL
                        </p>
                    </li>
                    <li className="timeline-item" data-aos="fade-up" data-aos-duration="1300">
                        <h4 className="timeline-item-title">Full-Stack Web Developer</h4>
                        <h6 className="timeline-item-text mb-0">GAMAPAY.ID - Remote</h6>
                        <h6 className="timeline-item-text text-pw-primary">Mar 2024 - Jun 2024</h6>
                        <ul className="timeline-sub-list mb-2">
                            <li className="timeline-text">
                                Design and optimize UI/UX for the company website, ensuring a visually appealing, user-friendly, and responsive interface that enhances overall user experience.
                            </li>
                            <li className="timeline-text">
                                Develop and implement websites based on company objectives and technical requirements, from initial concept and layout to deployment and performance testing.
                            </li>
                            <li className="timeline-text">
                                Create engaging graphic designs for products, marketing materials, and digital content, maintaining brand consistency across all platforms.
                            </li>
                            <li className="timeline-text">
                                Manage and maintain servers and digital products, ensuring system reliability, security, and smooth operation at all times.
                            </li>
                            <li className="timeline-text">
                                Enhance SEO (Search Engine Optimization) quality by optimizing content, improving site structure, and implementing strategies to increase organic search rankings.
                            </li>
                        </ul>
                        <p className="timeline-text">
                            <b>Skills:</b> Administration · CodeIgniter · MySQL · jQuery · Web Development · Web Design · UI/UX Design · Database Design · Cascading Style Sheets (CSS)
                        </p>
                    </li>
                    <li className="timeline-item" data-aos="fade-up" data-aos-duration="1300">
                        <h4 className="timeline-item-title">SEO Copywriter</h4>
                        <h6 className="timeline-item-text mb-0">CSR Auto Film - Jakarta Barat, DKI Jakarta</h6>
                        <h6 className="timeline-item-text text-pw-primary">Jun 2022 - Sep 2022</h6>
                        <ul className="timeline-sub-list mb-2">
                            <li className="timeline-text">
                                Write and publish articles that align with the website’s topics, ensuring they are engaging, informative, and optimized for both readers and search engines.
                            </li>
                            <li className="timeline-text">
                                Improve the quality of the website’s domain backlinks by implementing effective link-building strategies and collaborating with reputable sources to boost domain authority.
                            </li>
                            <li className="timeline-text">
                                Design and produce graphic content for the website, including banners, infographics, and other visual elements that enhance user engagement and brand identity.
                            </li>
                            <li className="timeline-text">
                                Enhance SEO (Search Engine Optimization) performance through keyword optimization, content structure improvements, and technical SEO adjustments to increase organic traffic.
                            </li>
                        </ul>
                        <p className="timeline-text">
                            <b>Skills:</b> Search Engine Optimization (SEO) · Graphic Design · Copywriting · WordPress · Figma (Software)
                        </p>
                    </li>
                    <li className="timeline-item" data-aos="fade-up" data-aos-duration="1300">
                        <h4 className="timeline-item-title">Blog Owner</h4>
                        <h6 className="timeline-item-text mb-0">Note-Iqbal26.com</h6>
                        <h6 className="timeline-item-text text-pw-primary">2018 - 2021</h6>
                        <ul className="timeline-sub-list mb-2">
                            <li className="timeline-text">
                                Managed and maintained a personal blog, overseeing content planning, publishing, and updates.
                            </li>
                            <li className="timeline-text">
                                Created and edited engaging articles to attract readers and improve content quality.
                            </li>
                            <li className="timeline-text">
                                Implemented SEO strategies to increase website visibility and organic traffic.
                            </li>
                            <li className="timeline-text">
                                Analyzed audience insights and adapted content strategy to improve user engagement and reach.
                            </li>
                        </ul>
                        <p className="timeline-text">
                            <b>Skills:</b> WordPress · Blogger · Search Engine Optimization (SEO) · Graphic Design · Copywriting
                        </p>
                    </li>
                </ol>
            </section>

            <h4 className="service-title">Tools & Skills</h4>
            <div className="skill-wrapper">
                <ToolsSkills />
            </div>
        </>
    );
}