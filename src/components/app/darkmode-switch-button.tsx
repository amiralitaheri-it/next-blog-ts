import React, {useEffect, useState} from 'react';

import {MoonIcon, SunIcon} from "@heroicons/react/solid";
import {useTheme} from "next-themes";

const DarkmodeSwitchButton = () => {

    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')}/>
            )
        } else {
            return (
                <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')}/>
            )
        }
    };

    return (
        <>
            {renderThemeChanger()}
        </>
    );
}

export default React.memo(DarkmodeSwitchButton);