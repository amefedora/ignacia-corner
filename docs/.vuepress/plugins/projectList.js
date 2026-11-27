
export const projectListPlugin = () => ({
  name: 'project-list',

  async onPrepared(app) {
    console.log('[ProjectList] Plugin is running')
    console.log('[ProjectList] Total pages:', app.pages.length)
    console.log('[ProjectList] Temp directory:', app.dir.temp())
    
    const projects = app.pages
      .filter(page =>
        page.path.startsWith('/what-i-do/projects/') &&
        page.path !== '/what-i-do/projects/'
      )
      .map(page => ({
        title: page.title,
        description: page.frontmatter.description || '',
        category: page.frontmatter.category || '',
        status: page.frontmatter.status || '',
        date: page.frontmatter.date || '',
        tags: page.frontmatter.tags || [],
        link: page.path
      }))

    await app.writeTemp(
      'projects.js',
      `export const projects = ${JSON.stringify(projects, null, 2)}`
    )
  }
})
