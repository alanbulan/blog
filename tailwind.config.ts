import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // 技能和项目渐变色
    'from-blue-500', 'to-cyan-500',
    'from-purple-500', 'via-pink-500', 'to-rose-500',
    'from-orange-500', 'via-red-500', 'to-pink-500',
    'from-green-500', 'via-emerald-500', 'to-teal-500',
    'from-indigo-500', 'via-purple-500', 'to-pink-500',
    'from-yellow-500', 'via-orange-500', 'to-red-500',
    'from-teal-500', 'to-blue-500',
    'from-pink-500', 'to-purple-500',
    'from-cyan-500', 'to-teal-500',
    'from-gray-700', 'to-gray-900',
    'from-sky-400', 'to-blue-500',
    'from-blue-600', 'to-blue-700',
    'from-blue-500', 'to-purple-600',
    // 兴趣爱好额外的渐变色
    'from-amber-500', 'to-yellow-500',
    'from-rose-500', 'to-pink-500',
    // 确保所有渐变方向都被包含
    {
      pattern: /bg-gradient-to-(r|br|b|bl|l|tl|t|tr)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        // 舒适的色彩系统 - 灵感来自Navi UI
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(14, 165, 233, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
