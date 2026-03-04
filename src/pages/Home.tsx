import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet';
import { articles } from '../helpers/records';

const Home = () => {

  const { t } = useTranslation();

  const tech = [
    { name: 'Php', icon: '/images/icons/php.svg' },
    { name: 'Laravel', icon: '/images/icons/laravel.png' },
    { name: 'React', icon: '/images/icons/react.svg' },
    { name: 'Tailwind CSS', icon: '/images/icons/tailwind.svg' },
    { name: 'TypeScript', icon: '/images/icons/typescript.svg' },
    { name: 'Git', icon: '/images/icons/git.svg' },
    { name: 'Node.js', icon: '/images/icons/nodejs.svg' },
    { name: 'MySQL', icon: '/images/icons/mysql.svg' },
    { name: 'Docker', icon: '/images/icons/docker.svg' },
    { name: 'Kubernetes', icon: '/images/icons/kubernetes.svg' },
  ];

  const aboutMe = [
    { title: t("HomePage.about_01"), icon: '/images/about/01.svg' },
    { title: t("HomePage.about_02"), icon: '/images/about/02.svg' },
    { title: t("HomePage.about_03"), icon: '/images/about/03.svg' },
    { title: t("HomePage.about_04"), icon: '/images/about/04.svg' },
    { title: t("HomePage.about_05"), icon: '/images/about/05.svg' },
    { title: t("HomePage.about_06"), icon: '/images/about/06.svg' },
  ];

  return (

    <div>
      <Helmet>
        <title>Tenghuy Ly</title>
      </Helmet>

      {/* banner */}
      <section className='w-full max-w-7xl mx-auto px-4 md:px-10 text-black dark:text-white py-10 md:py-20 flex flex-col md:flex-row gap-10 md:gap-4 items-center justify-between'>
        <div className='w-full lg:w-1/2 text-[16px] md:text-[18px] xl:text-[20px]'>
          <h1 className='text-[30px] md:text-[50px] xl:text-[80px] font-[600]'>{t("HomePage.welcome")} <span className='text-[#c42223]'>{t("HomePage.name")}</span></h1>
          <p className='my-4'>{t("HomePage.title")}</p>
          <p className=''>{t("HomePage.content1")} <span className='font-[600] italic'>{t("HomePage.content2")}</span></p>
        </div>
        <div className='w-full lg:w-1/2'>
          <img src="./images/banner.png" alt="" className='w-full animate-float' />
        </div>
      </section>

      <hr className='my-8 border-0 w-full h-[1px] bg-gray-800 max-w-7xl mx-auto' />

      {/* tech */}
      <section className='text-black dark:text-white'>
        <h2 className="text-[18px] lg:text-[25px] font-bold text-center mb-4 flex items-center justify-center text-[#fe7b7a]"><span className='w-2 h-2 rounded-full bg-[#fe7b7a] inline-block mr-2'></span>{t("HomePage.tech_title")}</h2>
        <h1 className='text-[25px] lg:text-[40px] font-bold text-center mb-4'>{t("HomePage.tech_sub_title")}</h1>

        <div className='mt-10 w-full max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-4 items-center justify-center gap-6 md:gap-8'>
          {tech.map((item) => (
            <div key={item.name}
              className="w-full h-full flex flex-col border border-gray-200 dark:border-[#121314]
                  rounded-4xl p-8 bg-white dark:bg-[#121314] items-center justify-center
                  transition-all duration-300 hover:border-[#fe7b7a] hover:text-[#fe7b7a]
                  hover:shadow-lg dark:hover:shadow-[0_10px_25px_rgba(254,123,122,0.25)] cursor-pointer">
              <img src={item.icon} alt={item.name} className="w-[80px] h-[80px] object-contain transition-transform duration-300 animate-float" />
              <p className="text-[14px] font-bold mt-2 text-center tracking-wider">
                {item.name}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/*   about me */}
      <section className='w-full max-w-7xl mx-auto mt-20 py-10 dark:text-white text-black px-4'>
        <h1 className='text-[25px] lg:text-[40px] font-light text-center mb-4'>{t("HomePage.about_title")}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center md:gap-8 mt-10'>
          {aboutMe.map((item) => (
            <div key={item.title} className='flex flex-col items-center justify-center bg-[#fecbcb] dark:bg-[#1e2837] px-10 pt-10 rounded-lg cursor-pointer'>
              <img src={item.icon} alt={item.title} className='object-contain w-[80px] h-[80px]' />
              <p className='text-[18px] font-medium text-center mt-4 min-h-[60px]'>{item.title}</p>
            </div>
          ))}
        </div>

        <div className='w-full flex items-center justify-center mt-10 gap-8'>
          <a href="#" className='flex items-center gap-2 text-[14px] md:text-[20px] hover:text-[#fe7b7a] transition-colors duration-300'><img src="/images/twitter.svg" alt="" className='w-[30px] h-[30px]' /><span>{t("twitter")}</span></a>
          <a href="#" className='flex items-center gap-2 text-[14px] md:text-[20px] hover:text-[#fe7b7a] transition-colors duration-300'><img src="/images/github.svg" alt="" className='w-[30px] h-[30px]' /><span>{t("github")}</span></a>
          <a href="#" className='flex items-center gap-2 text-[14px] md:text-[20px] hover:text-[#fe7b7a] transition-colors duration-300'><img src="/images/linkedin.svg" alt="" className='w-[30px] h-[30px]' /><span>{t("linkedin")}</span></a>
        </div>
      </section>

      {/* articles */}
      <section className='w-full max-w-7xl mx-auto mt-10 dark:text-white text-black px-4'>
        <div className='flex items-center justify-between'>
          <h2 className="text-[25px] lg:text-[30px] font-bold text-center">{t("HomePage.latest_articles")}</h2>
          <a href="/articles" className="text-[#fe7b7a] text-[16px] font-semibold">
            <span className="inline-block hover:-translate-x-[5px] transition-transform duration-300 ease-out">
              {t("HomePage.view_all_articles")}
            </span>
            <img src="/images/arrow.svg" alt="View All" className="inline-block ml-2 w-[20px] h-[20px]" />
          </a>
        </div>
        <div className='flex flex-col gap-4 mt-10'>
          {articles.slice(0, 3).map((article) => (
            <div key={article.id} className='group'>
              <div className='flex flex-col lg:flex-row items-start p-6 gap-4 lg:gap-10 group-hover:translate-x-[10px] transition-all duration-300'>
                <h1 className="text-[40px] md:text-[50px] xl:text-[80px] font-bold text-slate-800 dark:text-slate-800 leading-none group-hover:text-[#fe7b7a]">{article.id}</h1>
                <div>
                  <div className='flex items-center gap-4 text-[14px] md:text-[16px]'>
                    <p className="font-semibold bg-[#fe7b7a] dark:bg-[#281819] text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-[#fe7b7a] px-4 py-1 rounded-full uppercase tracking-widest">{article.tech}</p>
                    <p className=" text-black dark:text-white">{article.date}</p>
                  </div>
                  <h3 className="text-[18px] lg:text-[25px] font-bold mt-2 group-hover:text-[#fe7b7a]">{article.title}</h3>
                  <p className="mt-2 text-[14px] lg:text-[18px]">{article.description}</p>

                  <div className=" hidden lg:flex  opacity-0 translate-y-2 lg:group-hover:opacity-100
                        lg:group-hover:translate-y-0 transition-all duration-300 ease-out mt-4 text-[14px] lg:text-[18px]
                        font-bold text-[#fe7b7a] items-center gap-2">
                    <a href="#">Read More</a>
                    <img src="/images/arrow.svg" alt="View All" className="w-[20px] h-[20px] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

              </div>

              <hr className='w-full h-[1px] border-none bg-gray-200 my-10' />
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home