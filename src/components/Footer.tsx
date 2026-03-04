import { useTranslation } from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation();
  return (
     <div className='bg-[#141418] text-white text-center py-10 mt-20 text-[16px] lg:text-[18px]'>
        <h1 className=''>{t('Footer.copyright')}</h1>
        <p className=''>{t('Footer.made_with_love')}</p>
    </div>
  )
}

export default Footer