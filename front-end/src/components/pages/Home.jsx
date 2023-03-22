import Slide from '../partials/Slide';
import gitarraElectrica from '../../img/instrumentos/electrica2.jpg';
import amplificador from '../../img/instrumentos/amplificador.jpg';
import cuerdas from '../../img/instrumentos/cuerdas3.jpg';
import guitarraAcustica from '../../img/instrumentos/acustica.jpg';

export default function Home () {
    return (
        <>
            <Slide />
            <div className='content-parallax'>
                <a className='link-light' href='/productos/tipo/Guitarras electricas'>
                    <h1 className='text-white text-center bg-black mb-0 py-4'>
                        Guitarras Electricas
                    </h1>
                    <div className="parallax" style={{ backgroundImage: `url(${gitarraElectrica})` }}></div>
                </a>
                <a className='link-light' href='/productos/tipo/Guitarras acusticas'>
                    <h1 className='text-white text-center bg-black mb-0 py-4'>
                        Guitarras Acusticas
                    </h1>
                    <div className="parallax" style={{ backgroundImage: `url(${guitarraAcustica})` }}></div>
                </a>
                <a className='link-light' href='/productos/tipo/Amplificador'>
                    <h1 className='text-white text-center bg-black mb-0 py-4'>
                        Amplificadores
                    </h1>
                    <div className="parallax" style={{ backgroundImage: `url(${amplificador})` }}></div>
                </a>
                <a className='link-light' href='/productos/tipo/Cuerdas'>
                    <h1 className='text-white text-center bg-black mb-0 py-4'>
                        Cuerdas
                    </h1>
                    <div className="parallax" style={{ backgroundImage: `url(${cuerdas})` }}></div>
                </a>
            </div>
        </>
    )
}