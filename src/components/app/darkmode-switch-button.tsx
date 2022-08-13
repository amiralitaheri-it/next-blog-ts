import React, {useEffect, useState} from 'react';

import {MoonIcon, SunIcon} from "@heroicons/react/solid";
import {useTheme} from "next-themes";

const DarkmodeSwitchButton = () => {

    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = (): JSX.Element => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="w-9 h-9 text-yellow-500 mt-1" role="button" onClick={() => setTheme('light')}/>
            )
        } else {
            return (
                <MoonIcon className="w-9 h-9 dark:text-gray-300 text-gray-900 mt-1" role="button" onClick={() => setTheme('dark')}/>
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