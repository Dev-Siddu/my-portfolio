
import React from 'react';
import { useTheme } from '../Contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="theme-dropdown-wrapper">
            <i className="bi bi-palette2 me-2 theme-icon-label"></i>
            <select
                className="theme-select"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
            >
                <option value="light">☀️ Light</option>
                <option value="dark">🌙 Dark</option>
                <option value="dotnet">🚀 .NET</option>
            </select>
        </div>
    );
};

export default ThemeToggle;