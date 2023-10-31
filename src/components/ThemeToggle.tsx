import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Moon, Sun } from 'phosphor-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.theme);

    // Atualiza a classe do documento quando o tema muda
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    // Alterna entre os temas claro e escuro
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.theme = newTheme;
        setTheme(newTheme);
    };

    return (

        <Button
            textSize="xm" textStyle="text-gray-100"
            className="!w-full !bg-gray-700"
            icon={theme === 'light' ? <Moon className={`!text-gray-100 `} size={32} /> : <Sun className={`!text-gray-100 `} size={32} />}
            onClick={toggleTheme}>
                {theme === 'light' ? 'Tema escuro' : 'Tema claro'}
        </Button>

    );
};

export default ThemeToggle;
