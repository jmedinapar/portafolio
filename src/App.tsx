import { ConfigProvider, theme as antdTheme } from 'antd';
import MainLayout from './Layout/MainLayout';
import 'antd/dist/reset.css';
import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('theme') as ThemeMode | null;
    if (stored === 'light' || stored === 'dark') return stored;
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ConfigProvider
      direction="ltr"
      theme={{
        algorithm: themeMode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
          // colorBgBase: themeMode === "dark" ? "#141414" : "#fff",
          // colorTextBase: themeMode === "dark" ? "#f5f5f5" : "#141414",
          borderRadius: 8,
        },
      }}
    >
      <MainLayout toggleTheme={toggleTheme} themeMode={themeMode} />
    </ConfigProvider>
  );
}

export default App;
