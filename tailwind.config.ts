import { type Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
};
