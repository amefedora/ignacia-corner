
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Ignacias Corner',
  description: 'My writings, projects, and book reviews',
  bundler: viteBundler(),
  theme: defaultTheme(),
})
