import AOS from 'aos';
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <> 
            <Helmet>
                <title>Ibalardian | About</title>
            </Helmet>

            <h2 className="article-title mb-4">About</h2>
            <p className="article-paragraph">
                I am a versatile professional with a unique blend of customer service, creative communication, and technical development skills. My journey began as a barista, where I learned the value of precision, consistency, and delivering exceptional customer experiences. I later transitioned into copywriting, honing my ability to craft engaging, targeted content that connects with audiences.
            </p>
            <p className="article-paragraph">
                Today, I apply those combined strengths as a junior full-stack web developer, building user-friendly, visually appealing, and performance-driven digital solutions. From UI/UX design to SEO optimization, I am committed to creating products that not only function flawlessly but also tell a story.
            </p>
            <p className="article-paragraph mb-5">
                I thrive in dynamic environments, adapt quickly to new challenges, and bring a detail-oriented, creative, and problem-solving mindset to every project I take on.
            </p>

            <h4 className="service-title mb-1">What I'm Doing</h4>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                    <div className="card card-service" data-aos="fade-up" data-aos-duration="500">
                        <div className="card-body">
                            <div className="d-flex align-items-top">
                                <div className="icon-box mb-3">
                                    <i className="fa-solid fa-pager"></i>
                                </div>
                                <div className="ms-4">
                                    <h6 className="service-item">UI/UX Design</h6>
                                    <p className="article-paragraph">
                                        Creating innovative interfaces and engaging user experiences through research, wireframing, prototyping, and visual design focused on user needs and business goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                    <div className="card card-service" data-aos="fade-up" data-aos-duration="1000">
                        <div className="card-body">
                            <div className="d-flex align-items-top">
                                <div className="icon-box mb-3">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <div className="ms-4">
                                    <h6 className="service-item">Web Development</h6>
                                    <p className="article-paragraph">
                                        Building responsive, scalable, and secure web applications from front-end to back-end, integrating modern technologies to deliver seamless user experiences and robust functionality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                    <div className="card card-service" data-aos="fade-up" data-aos-duration="1500">
                        <div className="card-body">
                            <div className="d-flex align-items-top">
                                <div className="icon-box mb-3">
                                    <i className="fa-solid fa-server"></i>
                                </div>
                                <div className="ms-4">
                                    <h6 className="service-item">System Administration</h6>
                                    <p className="article-paragraph">
                                        Managing and maintaining servers, networks, and IT infrastructure to ensure optimal performance, security, and reliability across systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                    <div className="card card-service" data-aos="fade-up" data-aos-duration="2000">
                        <div className="card-body">
                            <div className="d-flex align-items-top">
                                <div className="icon-box mb-3">
                                    <i className="fa-solid fa-box-archive"></i>
                                </div>
                                <div className="ms-4">
                                    <h6 className="service-item">Admin Support</h6>
                                    <p className="article-paragraph">
                                        Providing efficient administrative assistance, managing documents, organizing schedules, and supporting daily office operations to ensure smooth and productive workflows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}