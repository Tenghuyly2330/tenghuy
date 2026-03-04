import { Helmet } from 'react-helmet'
import ContactForm from '../components/ContactForm'
import { Toaster } from "react-hot-toast";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Get in Touch</title>
      </Helmet>

      <section className='max-w-7xl mx-auto mt-10 px-4 overflow-hidden'>
        <div className="text-[16px] sm:text-[18px] lg:text-[25px] text-center text-black dark:text-white p-10 lg:px-20 lg:py-32 bg-gradient-dark space-y-4 rounded-lg">
          <h1 className="text-[50px] sm:text-[70px] lg:text-[100px] text-gradient font-bold leading-none">{t("ContactNav.contact_title")}</h1>
          <div className='w-[150px] h-2 bg-gradient-to-r from-[#fe7b7a] to-[#fbbd7e] mx-auto rounded-full mt-4 mb-10'></div>
          <p>{t("ContactNav.contact_sub")}</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-black dark:text-white'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-6 border border-gray-200 dark:border-none dark:bg-[#2a2a2f] rounded-3xl p-4 hover:translate-y-[-5px] hover:bg-[#cee1f9] dark:hover:text-black transition-all duration-300'>
              <div className='inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-300'>
                <img src="/images/icons/twitter.svg" alt="Email" width={40} height={40} className="inline-block" />
              </div>
              <div>
                <span className="text-[18px] font-bold text-[#fe7b7a]">{t("ContactNav.twitter")}</span>
                <p className="text-[14px] md:text-[16px]">@tenghuy</p>
              </div>
            </div>
            <div className='flex items-center gap-6 border border-gray-200 dark:border-none dark:bg-[#2a2a2f] rounded-3xl p-4 hover:translate-y-[-5px] hover:bg-[#cee1f9] dark:hover:text-black transition-all duration-300'>
              <div className='inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-300'>
                <img src="/images/icons/github.svg" alt="Email" width={40} height={40} className="inline-block" />
              </div>
              <div>
                <span className="text-[18px] font-bold text-[#fe7b7a]">{t("ContactNav.github")}</span>
                <p className="text-[14px] md:text-[16px]">@tenghuy</p>
              </div>
            </div>
            <div className='flex items-center gap-6 border border-gray-200 dark:border-none dark:bg-[#2a2a2f] rounded-3xl p-4 hover:translate-y-[-5px] hover:bg-[#cee1f9] dark:hover:text-black transition-all duration-300'>
              <div className='inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-300'>
                <img src="/images/icons/linkedin.svg" alt="Email" width={40} height={40} className="inline-block" />
              </div>
              <div>
                <span className="text-[18px] font-bold text-[#fe7b7a]">{t("ContactNav.linkedin")}</span>
                <p className="text-[14px] md:text-[16px]">@tenghuy</p>
              </div>
            </div>

            <div className='mt-8'>
              <div className='flex items-center gap-6 border border-gray-200 dark:border-none dark:bg-[#2a2a2f] rounded-3xl p-4'>
                <div className='inline-flex p-3 rounded-full bg-gradient-to-r from-[#fe7b7a] to-[#fbbd7e]'>
                  <img src="/images/icons/mail.svg" alt="Email" width={40} height={40} className="inline-block" />
                </div>
                <div>
                  <span className="text-[14px] font-bold uppercase">{t("ContactNav.mail")}</span>
                  <p className="text-[14px] md:text-[16px] text-gradient font-semibold">tenghuyly2330@gmail.com</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='flex items-center gap-6 border border-gray-200 dark:border-none dark:bg-[#2a2a2f] rounded-3xl p-4'>
                <div className='inline-flex p-3 rounded-full bg-gradient-to-r from-[#fe7b7a] to-[#fbbd7e]'>
                  <img src="/images/icons/pin.svg" alt="Email" width={40} height={40} className="inline-block" />
                </div>
                <div>
                  <span className="text-[14px] font-bold uppercase">{t("ContactNav.location")}</span>
                  <p className="text-[14px] md:text-[16px] text-gradient font-semibold">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
            <Toaster position="top-right" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact