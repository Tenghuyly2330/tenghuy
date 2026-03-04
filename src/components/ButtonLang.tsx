import { useTranslation } from 'react-i18next';

const ButtonLang = () => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "km" ? "en" : "km";
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <div className="hidden md:flex gap-2">
        <button onClick={toggleLang} className='rounded text-white hover:[#] transition'>
          {i18n.language === 'km' ? <img src="./usa-flag.png" className='w-14 h-10 object-contain' alt="" /> : <img src="./kh-flag.png" className='w-14 h-10 object-contain' alt="" />}
        </button>
      </div>

      <div className="flex items-center justify-center mt-8 md:hidden gap-2">
        <button onClick={toggleLang} className='rounded text-white hover:[#] transition'>
          {i18n.language === 'km' ?
            <div className='w-[200px] flex items-center justify-center gap-4 border border-[#fe7b7a] hover:bg-[#fe7b7a] py-2 rounded-full'>
              <img src="./usa-flag.png" className='w-10 h-8 object-contain' alt="" />
              <p>ភាសាអង់គ្លេស</p>
            </div>
            :
            <div className='w-[200px] flex items-center justify-center gap-4 border border-[#fe7b7a] hover:bg-[#fe7b7a] py-2 rounded-full'>
              <img src="./kh-flag.png" className='w-10 h-8 object-contain' alt="" />
              <p>Khmer</p>
            </div>}
        </button>
      </div>
    </div>
  );
};

export default ButtonLang;