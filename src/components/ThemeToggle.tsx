import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
    const [dark, setDark] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const saveTheme = localStorage.getItem("theme");

        if (saveTheme === "dark") {
            document.documentElement.classList.add('dark');
            setDark(true);
        }
    }, []);

    const toggleTheme = () => {
        if (dark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        setDark(!dark);
    }

    return (
        <div className='flex items-center justify-center text-black dark:text-white'>
            <button onClick={toggleTheme} className='hidden md:flex items-center'>
                {dark ? "☀️" : "🌙"}
            </button>
            <button onClick={toggleTheme} className='flex items-center justify-center mt-8 md:hidden gap-2 w-[200px]'>
                {dark ? 
                    <div className='w-full flex items-center justify-center gap-4 border border-[#fe7b7a] hover:bg-[#fe7b7a] py-3 rounded-full'>
                        ☀️ {t("Mode.light")}
                    </div>
                : 
                    <div className='w-full flex items-center justify-center gap-4 border border-[#fe7b7a] hover:bg-[#fe7b7a] py-3 rounded-full'>
                        🌙 {t("Mode.dark")}
                    </div>
                }
            </button>
        </div>
    )
}

export default ThemeToggle