/** @type {import('tailwindcss').Config} */
module.exports = {
  // အောက်က "src" တွင် ** တွေသည် src file ထဲတွင် file တွေဘယ်လောက်ခွဲခွဲရပြီး အထဲမှာ {js,jsx,ts,tsx} တွေပါရင်လည်းရသည်
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

