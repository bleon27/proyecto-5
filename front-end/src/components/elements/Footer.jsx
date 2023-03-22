import logo from '../../img/logo.png';
import facebook from '../../img/socialmedia/facebook.png';
import instagram from '../../img/socialmedia/instagram.png';
import gorjeo from '../../img/socialmedia/gorjeo.png';
import Image from 'react-bootstrap/Image';

function Footer() {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img
                                alt=""
                                src={logo}
                                width="200"
                                className="d-inline-block align-top"
                            />
                        </a>
                        <span className="mb-3 mb-md-0 text-white">&copy; 2022 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" rel="noreferrer" target="_blank" href="https://www.facebook.com/">
                            <Image
                                alt=""
                                src={facebook}
                                width="30"
                                style={{ objectFit: 'contain' }}
                            />
                        </a>
                        </li>
                        <li className="ms-3"><a className="text-muted" rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                            <Image
                                alt=""
                                src={instagram}
                                width="30"
                                style={{ objectFit: 'contain' }}
                            />
                        </a></li>
                        <li className="ms-3"><a className="text-muted" rel="noreferrer" target="_blank" href="https://twitter.com/?lang=es">
                            <Image
                                alt=""
                                src={gorjeo}
                                width="30"
                                style={{ objectFit: 'contain' }}
                            />
                        </a></li>
                    </ul>
                </footer>
            </div>
        </>
    );
}

export default Footer;