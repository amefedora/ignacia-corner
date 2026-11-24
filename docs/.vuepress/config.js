
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
        children: [
          { text: 'Overview', link: '/what-i-do/' },
          { text: 'Studies', link: '/what-i-do/studies/' },
          { text: 'Career', link: '/what-i-do/career/' },
          { text: 'Projects', link: '/what-i-do/projects/' },
        ],
      },
      {
        text: 'What I Love',
        children: [
      { text: 'Overview', link: '/what-i-love/' },
      { text: 'Writings', link: '/what-i-love/writings/' },
      { text: 'Music', link: '/what-i-love/music/' },
      { text: 'Bookshelf', link: '/what-i-love/bookshelf/' },
      { text: 'Everything Else', link: '/what-i-love/everything-else/' },
    ],
      },
    ],
  }),
})
