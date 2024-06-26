import { PluginAPI } from "tailwindcss/types/config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#1d4ed8',
          '800': '#1e40af',
          '900': '#1e3a8a',
          '950': '#172554',
        },
        success: '#28a745',
        danger: '#dc3545',
      },
      fontFamily: {
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [
    function({ addComponents }: PluginAPI) {
      addComponents({
        '.btn': {
          display: 'inline-block',
          fontWeight: '600',
          textAlign: 'center',
          verticalAlign: 'middle',
          userSelect: 'none',
          border: '1px solid transparent',
          padding: '.375rem .75rem',
          fontSize: '1rem',
          lineHeight: '1.5',
          borderRadius: '.25rem',
          transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
        },
        '.btn-primary': {
          color: '#fff',
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          '&:hover': {
            backgroundColor: '#0056b3',
            borderColor: '#0056b3',
          },
        },
        '.btn-success': {
          color: '#fff',
          backgroundColor: '#28a745',
          borderColor: '#28a745',
          '&:hover': {
            backgroundColor: '#218838',
            borderColor: '#1e7e34',
          },
        },
        '.btn-danger': {
          color: '#fff',
          backgroundColor: '#dc3545',
          borderColor: '#dc3545',
          '&:hover': {
            backgroundColor: '#c82333',
            borderColor: '#bd2130',
          },
        },
      });
    },
  ],
};
