import { Helmet } from "react-helmet"
import { articles } from "../helpers/records"
import { useTranslation } from "react-i18next"
const Articles = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Open Source Packages - Tenghuy</title>
      </Helmet>

      <section className='max-w-7xl mx-auto mt-10 px-4 overflow-hidden dark:text-white text-black'>
        <div className="text-[16px] sm:text-[18px] lg:text-[25px] text-center text-black dark:text-white p-10 lg:px-20 lg:py-32 bg-gradient-dark space-y-4 rounded-lg">
          <h1 className="text-[50px] sm:text-[70px] lg:text-[100px] text-gradient font-bold">{t("Article.title")}</h1>
          <div className='w-[200px] h-4 bg-gradient-to-r from-[#fe7b7a] to-[#fbbd7e] mx-auto rounded-full mt-4 mb-10'></div>
          <p>{t("Article.content")}</p>
        </div>

        <div className='mt-10 p-8 bg-[#f5f5f5] dark:bg-[#fe7b7a]/5 rounded-lg'>
          <div className='flex flex-col gap-4 mt-10'>
            {articles.map((article) => (
              <div key={article.id} className='group'>
                <div className='flex flex-col lg:flex-row items-start p-6 gap-4 lg:gap-10 group-hover:translate-x-[10px] transition-all duration-300'>
                  <h1 className="text-[40px] md:text-[50px] xl:text-[80px] font-bold text-slate-800 dark:text-slate-800 leading-none group-hover:text-[#fe7b7a]">{article.id}</h1>
                  <div>
                    <div className='flex items-center gap-4 text-[14px] md:text-[16px]'>
                      <p className="font-semibold bg-[#fe7b7a] dark:bg-[#281819] text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-[#fe7b7a] px-4 py-1 rounded-full uppercase tracking-widest">{article.tech}</p>
                      <p className=" text-black dark:text-white">{article.date}</p>
                    </div>
                    <h3 className="text-[18px] lg:text-[30px] font-bold mt-2 group-hover:text-[#fe7b7a]">{article.title}</h3>
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
        </div>
      </section>
    </div>
  )
}

export default Articles