import fs from 'fs'
import path from 'path'

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
