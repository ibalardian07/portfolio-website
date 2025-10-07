import AOS from 'aos';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import CertifLKS from '../assets/images/certificate/Sertifikat LKS.jpg'
import CertifHtml from '../assets/images/certificate/Sertifikat Kursus HTML CSS.png'
import CertifPhp from '../assets/images/certificate/Sertifikat Kursus PHP.png'
import CertifPython from '../assets/images/certificate/Sertifikat Kursus Python.png'
import CertifOffice from '../assets/images/certificate/Sertifikat Office.jpg'
import CertifDicoding1 from '../assets/images/certificate/Belajar Dasar Cloud dan Gen AI di AWS.jpg'
import CertifDicoding2 from '../assets/images/certificate/Belajar Dasar AI.jpg'

const certificate = [
    {
        'credential_id': 'NaN',
        'name': 'Pemrograman Website',
        'publisher': 'LKP Utama Jaya',
        'issued': 'Jun 2021',
        'media': CertifOffice,
        'link': CertifOffice,
    },
    {
        'credential_id': 'NaN',
        'name': 'Kursus HTML & CSS',
        'publisher': 'Progate',
        'issued': 'Nov 2021',
        'media': CertifHtml,
        'link': 'https://progate.com/course_certificate/998608e0qjmty9',
    },
    {
        'credential_id': 'NaN',
        'name': 'Kursus PHP',
        'publisher': 'Progate',
        'issued': 'Des 2021',
        'media': CertifPhp,
        'link': 'https://progate.com/course_certificate/aebb7146r40ct9',
    },
    {
        'credential_id': 'NaN',
        'name': 'Kursus Python',
        'publisher': 'Progate',
        'issued': 'Des 2021',
        'media': CertifPython,
        'link': 'https://progate.com/course_certificate/ace826a8r41zw1',
    },
    {
        'credential_id': '421.5/6818/BID.SMK/X/2021',
        'name': 'LKS Provinsi Sumatera Utara',
        'publisher': 'Dispen Sumatera Utara',
        'issued': 'Oct 2021',
        'media': CertifLKS,
        'link': CertifLKS,
    },
    {
        'credential_id': '547/LKP.UJ/II/2025',
        'name': 'Administrasi Perkantoran',
        'publisher': 'LKP Utama Jaya',
        'issued': 'Feb 2025',
        'media': CertifOffice,
        'link': CertifOffice,
    },
    {
        'credential_id': 'MRZM68K3KPYQ',
        'name': 'Belajar Dasar Cloud dan Gen AI di AWS',
        'publisher': 'Dicoding',
        'issued': 'Sep 2025',
        'media': CertifDicoding1,
        'link': 'https://www.dicoding.com/certificates/MRZM68K3KPYQ',
    },
    {
        'credential_id': '6RPNG45L8Z2M',
        'name': 'Belajar Dasar AI',
        'publisher': 'Dicoding',
        'issued': 'Sep 2025',
        'media': CertifDicoding2,
        'link': 'https://www.dicoding.com/certificates/6RPNG45L8Z2M',
    },
];

function CertificateList() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <>
            {certificate
            .slice()
            .reverse()
            .map((certif, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 mb-4" key={index} data-aos="fade-in" data-aos-duration="1200">
                    <div className="certificate-card">
                        <img src={certif.media} alt={certif.name} className="certificate-img" />
                        <a href={certif.link} target="_blank" className="view-link">
                            <i className="fa-solid fa-eye"></i>
                        </a>
                    </div>
                    <div className="certificate-detail p-2">
                        <h6 className="certificate-name mt-3 mb-1">{certif.name}</h6>
                        <p className="certificate-publisher mt-0 mb-0">{certif.publisher}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default function Certificate() {
    return (
        <> 
            <Helmet>
                <title>Ibalardian | Certificate</title>
            </Helmet>

            <h2 className="article-title mb-4">Certificate</h2>

            <div className="row">
                <CertificateList />
            </div>
        </>
    );
}