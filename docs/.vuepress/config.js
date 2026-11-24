
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: "Ignacia's Corner",
  description: 'A place for everything I build, learn, and love',

  bundler: viteBundler(),

  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'What I Do',
        link: '/what-i-do/',
      },
      {
        text: 'What I Love',
        link: '/what-i-love/',
      },
    ],
  }),
})
