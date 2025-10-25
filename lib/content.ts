import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export function getSettings(filename: string) {
  const filePath = path.join(contentDirectory, 'settings', `${filename}.json`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export function getProfile() {
  return getSettings('profile')
}

export function getSocial() {
  return getSettings('social')
}

export function getHomepage() {
  return getSettings('homepage')
}

export function getAbout() {
  return getSettings('about')
}

export function getBlog() {
  return getSettings('blog')
}

export function getProject() {
  return getSettings('project')
}

export function getSkill() {
  return getSettings('skill')
}

// Blog posts
export function getAllBlogPosts() {
  const blogsDirectory = path.join(contentDirectory, 'blog')
  const filenames = fs.readdirSync(blogsDirectory)
  
  const posts = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(blogsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        ...data,
        body: content,
        slug: filename.replace(/\.md$/, ''),
        id: filename.replace(/\.md$/, '')
      }
    })
    .filter(post => post.published !== false)
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return posts
}

// Projects
export function getAllProjects() {
  const projectsDirectory = path.join(contentDirectory, 'projects')
  const filenames = fs.readdirSync(projectsDirectory)
  
  const projects = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(projectsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        ...data,
        body: content,
        slug: filename.replace(/\.md$/, ''),
        id: filename.replace(/\.md$/, '')
      }
    })
    .filter(project => project.visible !== false)
    .sort((a: any, b: any) => (a.order || 999) - (b.order || 999))
  
  return projects
}

// Skills
export function getAllSkills() {
  const skillsDirectory = path.join(contentDirectory, 'skills')
  const filenames = fs.readdirSync(skillsDirectory)
  
  const skills = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(skillsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      
      return data
    })
    .sort((a: any, b: any) => (a.order || 999) - (b.order || 999))
  
  return skills
}
