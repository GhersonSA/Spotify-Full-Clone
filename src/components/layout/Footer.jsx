import InstagramIcon from "../../assets/icons/InstagramIcon"
import TwitterIcon from "../../assets/icons/TwitterIcon"
import FacebookIcon from "../../assets/icons/FacebookIcon"
import WorldIcon from "../../assets/icons/WorldIcon"

const Footer = () => {
    return (
        <footer className="w-full pt-2 pb-10">
            <nav className="bg-bg-secondary mb-32">
                <hr className="border border-t-1 text-white/10 hidden lg:my-5 lg:block" />
                <div className="flex flex-col justify-between mt-8 lg:flex-row">
                    <div className="flex flex-1 flex-col md:flex-row">
                        <div className="footer-margin">
                            <ul className="footer-ul">
                                <p className="footer-p">Empresa</p>
                                <a href="" className="mt-2 mb-1 cursor-pointer">
                                    <span className="footer-span">Acerca de</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Empleo</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">For the Record</span>
                                </a>
                            </ul>
                        </div>
                        <div className="footer-margin">
                            <ul className="footer-ul">
                                <p className="footer-p">Comunidades</p>
                                <a href="" className="mt-2 mb-1">
                                    <span className="footer-span">Para artistas</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Desarrolladores</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Publicidad</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Inversores</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Proveedores</span>
                                </a>
                            </ul>
                        </div>
                        <div className="footer-margin">
                            <ul className="footer-ul">
                                <p className="footer-p">Enlaces útiles</p>
                                <a href="" className="mt-2 mb-1">
                                    <span className="footer-span">Asistencia</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">App gratis para móvil</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Popular por país</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Import your music</span>
                                </a>
                            </ul>
                        </div>
                        <div className="footer-margin">
                            <ul className="footer-ul">
                                <p className="footer-p">Planes de Spotify</p>
                                <a href="" className="mt-2 mb-1">
                                    <span className="footer-span">Premium Individual</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Premium Duo</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Premium Familiar</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Premium para Estudiantes</span>
                                </a>
                                <a href="" className="mb-1">
                                    <span className="footer-span">Spotify Free</span>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <div className="pr-4">
                            <a href="" className="footer-a">
                                <InstagramIcon className="svg footer-a-icon" />
                            </a>
                        </div>
                        <div className="pr-4">
                            <a href="" className="footer-a">
                                <TwitterIcon className="svg footer-a-icon" />
                            </a>
                        </div>
                        <div className="pr-4">
                            <a href="" className="footer-a">
                                <FacebookIcon className="svg footer-a-icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border border-t-1 text-white/10 lg:my-5" />
                <div className="flex flex-col justify-between lg:flex-row pt-4">
                    <div className="flex flex-wrap mb-2">
                        <div className="mr-5">
                            <a href="">
                                <span className="footer-span-2">Legal</span>
                            </a>
                        </div>
                        <div className="mr-5">
                            <a href="">
                                <span className="footer-span-2">Centro de seguridad y privacidad</span>
                            </a>
                        </div>
                        <div className="mr-5">
                            <a href="">
                                <span className="footer-span-2">Política de Privacidad</span>
                            </a>
                        </div>
                        <div className="mr-5">
                            <a href="">
                                <span className="footer-span-2">Cookies</span>
                            </a>
                        </div>
                        <div className="mr-5">
                            <a href="">
                                <span className="footer-span-2">Información sobre los anuncios</span>
                            </a>
                        </div>
                        <div className="mr-5">
                            <a href="">
                                <span className="footer-span-2">Accesibilidad</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-secondary text-sm">© 2025 Spotify Full Clone by&nbsp;
                                <a href="https://ghersonsa.com/" target="_blank" className="underline">
                                    GhersonSA
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="pt-4 lg:hidden">
                        <button className="flex items-center relative h-8 font-bold text-[13px] py-1 pr-4 pl-9 text-white border border-[#7c7c7c] rounded-full">
                            <span className="absolute left-3 top-2">
                                <WorldIcon className="svg" />
                            </span>
                            Español de España
                        </button>  
                    </div>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;