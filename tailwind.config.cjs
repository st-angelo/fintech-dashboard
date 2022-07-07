const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'serif'],
      },
      screens: {
        mobile: '643px',
      },
      colors: {
        'ghost-white': 'rgba(248, 249, 253, 1)',
        'silver-200': 'rgba(204, 204, 212, 1)',
        'silver-400': 'rgba(173, 173, 173, 1)',
        'gold-200': 'rgba(195, 187, 182, 1)',
        'gold-400': 'rgba(180, 170, 158, 1)',
        'gold-1k': 'rgba(52, 42, 17, 1)',
        'lilac-100': 'rgba(246, 247, 255, 1)',
        'lilac-200': 'rgba(237, 234, 250, 1)',
        'lilac-300': 'rgba(212, 219, 245, 1)',
        'lilac-800': 'rgba(81, 69, 159, 1)',
        'lilac-1k': 'rgba(54, 39, 182, 1)',
        'neon-800': 'rgba(24, 223, 190, 1)',
        'peach-100': 'rgba(254, 238, 201, 1)',
        'peach-800': 'rgba(250, 137, 107, 1)',
        'peach-1k': 'rgba(253, 32, 20, 1)',
        'blossom-100': 'rgba(254, 225, 237, 1)',
        'grass-100': 'rgba(219, 254, 189, 1)',
        'grass-200': 'rgba(200, 241, 186, 1)',
        cherry: 'rgba(254, 65, 103, 1)',
        mustard: 'rgba(254, 174, 41, 1)',
        blueberry: 'rgba(6, 143, 253, 1)',
        mousse: 'rgba(117, 62, 57, 1)',
        blois: 'rgba(51, 66, 78, 1)',
        tar: 'rgba(30, 30, 30, 1)',
      },
    },
  },

  plugins: [],
};

module.exports = config;
