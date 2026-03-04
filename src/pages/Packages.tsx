import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { packages } from '../helpers/records'

const Packages = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Helmet>
                <title>Open Source Packages - Tenghuy</title>
            </Helmet>

            <section className="max-w-7xl mx-auto mt-10 px-4">
                <div className="text-[16px] sm:text-[18px] lg:text-[25px] text-center text-black dark:text-white p-10 lg:p-20 bg-gradient-dark space-y-4 rounded-lg">
                    <h1 className="text-[30px] sm:text-[40px] lg:text-[60px] text-gradient font-bold">{t("Package.title")}</h1>
                    <p>{t("Package.sub_title1")}</p>
                    <p>{t("Package.sub_title2")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="bg-gray-200 dark:bg-[#29242b] rounded-3xl p-6 hover:scale-105 dark:hover:shadow-[0_10px_25px_rgba(254,123,122,0.25)] transition-all duration-300">
                            <h2 className="text-[18px] lg:text-[30px] font-bold mb-2 text-[#fe7b7a]"><img src="/images/book.svg" alt={pkg.title} width={40} height={40} className="inline-block mr-2" /><span>{pkg.title}</span></h2>
                            <p className="text-gray-600 dark:text-gray-300">{pkg.description}</p>
                            <hr className='w-full h-[1px] border-none bg-[#fe7b7a] my-8' />
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <div className='w-2 h-2 rounded-full' style={{ backgroundColor: pkg.color }}></div>
                                    <span className="text-[16px] font-medium">
                                        {pkg.tech}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/images/star.svg" alt="star" width={20} height={20} className="inline-block" />
                                    <span className="text-[16px] font-medium">
                                        {pkg.stars}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/images/forks.svg" alt="fork" width={20} height={20} className="inline-block" />
                                    <span className="text-[16px] font-medium">
                                        {pkg.forks}
                                    </span>
                                </div>
                            </div>
                            <a href={pkg.githubUrl} className="text-[#fe7b7a] text-[16px] font-semibold flex items-center gap-2 hover:translate-x-[5px] transition-transform duration-300">
                                <span>View on GitHub</span>
                                <img src="/images/arrow.svg" alt="View on GitHub" width={20} height={20} className="inline-block ml-2" />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Packages