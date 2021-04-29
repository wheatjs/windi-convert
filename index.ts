#!/usr/bin/env node

import fs from 'fs/promises'
import fg from 'fast-glob'
import path from 'path'
import { createUtils, } from '@windicss/plugin-utils'
import { prompt } from 'enquirer'
import { regexHTMLClass } from './regexes'
import meta from './meta'

const cwd = process.cwd()

function normalizeClass(input: string) {
  if (input.includes(':'))
    return input.substring(input.lastIndexOf(':') + 1)

  return input
}

function convertAttributesToString(attributes, prefix): string {
  let output = ' '

  for (const attr in attributes) {
    if (attributes[attr].length > 0)
      output += `${prefix && attr !== 'class' ? prefix + '-' : ''}${attr}="${attributes[attr].join(' ')}" `
  }

  return output.trimEnd()
}

function findGroupForClass(input: string) {
  input = normalizeClass(input)

  for (const entry in meta.utility) {
    for (const test of meta.utility[entry]) {
      if (input.match(test))
        return entry
    }
  }

  return null
}

function replaceAtIndexes(code: string, replacements) {
  let offset = 0

  for (const node of replacements) {
    code = code.slice(0, node.start + offset) + node.replacement + code.slice(node.end + offset)
    offset += node.replacement.length - (node.end - node.start)
  }

  return code
}

async function init() {
  console.log('🍃 WindiCSS Attributify Converter 🍃')
  console.warn('⚠️ Please backup your code before running this tool ⚠️')

  const { style, prefix, dir } = await prompt<{ style: string, prefix: string, dir: string }>([{
    type: 'select',
    name: 'style',
    message: 'Choose Attributify Style',
    choices: [
      { name: 'utilities', message: 'utilities', value: 'utilities' },
      { name: 'variants', message: 'variants', value: 'variants' },
    ],

  }, {
    type: 'input',
    name: 'prefix',
    message: 'Attribute Prefix',
    initial: '',
  }, {
    type: 'input',
    name: 'dir',
    message: 'Directory (relative)',
    initial: './src'
  }])

  const files = await fg(path.join(`${dir ? dir : '.'}`, `/**/*.{vue,html,svelte}`), {
    onlyFiles: true,
    ignore: ['node_modules'],
    cwd,
  })
  const utils = createUtils()
  await utils.init()

  if (style === 'variants') {
    console.log('Sorry this option is not supported yet.')
  } else {
    await Promise.all(files.map(async (file) => {
      const code = await fs.readFile(file, 'utf-8')
      const ast = await Promise.all(Array.from(code.matchAll(regexHTMLClass))
        .map(async (match) => ({
          value: match[0],
          start: match.index,
          end: match.index + match[0].length,
          classes: (await utils.applyExtractors(match[0], file)).classes
        })))

      const nodes = ast.map((node) => ({
        ...node,
        replaced: node.classes.filter((clazz) => findGroupForClass(clazz)),
        attributes: node.classes.reduce((obj, clazz) => {
          const group = findGroupForClass(clazz)
          if (group) {

            let name = clazz

            if (name === group)
              name = 'default'
            else
              name = clazz.replace(new RegExp(group + '(-)?', 'gm'), '')

            if (group in obj) {
              obj[group] = [...obj[group], name]
            } else {
              obj[group] = [name]
            }
          }

          return obj
        }, {})
      }))
        .map((node) => {
          return {
            ...node,
            replacement: convertAttributesToString({
              ...node.attributes,
              class: node.classes.filter((x) => node.replaced.indexOf(x) === -1)
            }, prefix)
          }
        })

      await fs.writeFile(file, replaceAtIndexes(code, nodes))
      console.log(`Update ${file}`)
    }))
  }

  console.log('Done!')
}

init()
  .catch((e) => {
    console.error(e)
  })