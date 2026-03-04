import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ButtonLang from './ButtonLang';
import ThemeToggle from './ThemeToggle';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open)
  }, [open]);

  // scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // if (window.innerWidth < 768) {
      //   // mobile show navbar only after 100px
      //   setShowNavbar(scrollY > 10);
      // } else {
      //   // desktop show
      //   setShowNavbar(true);
      //   setShadow(scrollY > 0);
      // }

      setShowNavbar(true);
      setShadow(scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { path: '/', label: t('Navbar.home') },
    { path: '/packages', label: t('Navbar.packages') },
    { path: '/articles', label: t('Navbar.articles') },
    { path: '/contact', label: t('Navbar.contact') },
  ];

  return (
    <div className='w-full px-2 py-4 sticky top-2 left-0 right-0 z-999'>
      <div className={`max-w-7xl mx-auto bg-white dark:bg-[#121314] text-black dark:border dark:border-[#fff]/20 dark:text-white flex items-center justify-between md:justify-center gap-4 px-8 py-3 rounded-full transition-all duration-300
          ${showNavbar ? "opacity-100 visible" : "opacity-0 invisible"} ${shadow ? "shadow-lg shadow-white/40" : ""}`}>
        <div className='flex shrink-0 items-center gap-4 text-[16px] md:text-[20px] lg:text-[25px] font-[500]'>
          <img src="./images/logo.png" alt="" className='w-14 rounded-full object-contain' />
          <p>{t("HomePage.name")}</p>
        </div>

        <ul className="w-full hidden md:flex items-center justify-center gap-10 text-[16px]">
          {links.map((link) => {
            return (
              <li className="transition duration-300">
                <NavLink to={link.path} className={({ isActive }) => `relative text-[16px] md:text-[18px] after:absolute after:left-0 after:-bottom-0 after:h-1 after:rounded-full after:w-0 after:bg-[#fe7b7a] after:transition-all after:duration-300 px-2 py-2 hover:after:w-full
                  ${isActive ? 'after:w-full after:bg-[#fe7b7a] dark:after:bg-[#fe7b7a] font-semibold text-[#fe7b7a]' : 'text-black dark:text-white'}`}>{t(link.label)}</NavLink>
              </li>
            )
          })}
        </ul>

        <div className='hidden md:flex item-center gap-4'>
          <ThemeToggle />
          <ButtonLang />
        </div>

        <button className='md:hidden' onClick={() => setOpen(!open)}>
          {open ? (
            <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
              <g fill="#c42223" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M4.99023,3.99023c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l6.29297,6.29297l-6.29297,6.29297c-0.26124,0.25082 -0.36647,0.62327 -0.27511,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27511l6.29297,-6.29297l6.29297,6.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-6.29297,-6.29297l6.29297,-6.29297c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-6.29297,6.29297l-6.29297,-6.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273z"></path></g></g>
            </svg>
          ) : (
            <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
              <g fill="#c42223" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                <g transform="scale(8.53333,8.53333)">
                  <path d="M3,7c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,21c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
                </g>
              </g>
            </svg>
          )}
        </button>
      </div>

      {/* mobile */}
      <div className={`fixed inset-0 bg-white dark:bg-[#0b0b0b] z-50 transition-transform duration-500 ease-in-out md:hidden ${open ? "translate-y-40" : "translate-y-full"}`}>
        <ul className='flex flex-col items-center justify-center gap-6 text-black pt-10'>
          {links.map((link) => {
            return (
              <li className="transition duration-300">
                <NavLink to={link.path} className={({ isActive }) => `relative text-[20px] after:absolute after:left-0 after:-bottom-0 after:h-1 after:rounded-full after:w-0 after:bg-[#fe7b7a] after:transition-all after:duration-300 px-2 py-2 hover:after:w-full
                  ${isActive ? 'after:w-full after:bg-[#fe7b7a] dark:after:bg-[#fe7b7a] font-semibold text-[#fe7b7a]' : 'text-black dark:text-white'}`}>{t(link.label)}</NavLink>
              </li>
            )
          })}
        </ul>
        <ButtonLang />
        <ThemeToggle />

        {/* <button onClick={() => setOpen(!open)} className='absolute right-4 top-4'>CLose</button> */}
      </div>
    </div>
  )
}

export default Navbar