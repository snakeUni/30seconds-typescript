const fs = require('fs-extra')
const program = require('commander')
const ora = require('ora')

program.parse(process.argv)

const fileName = program.args[0]
const dir = process.cwd()

const tsFile = `${dir}/ts/${fileName}.ts`
const jsFile = `${dir}/js/${fileName}.js`
const mdFile = `${dir}/docs/${fileName}.md`

try {
  const spinner = ora('start create file...').start()
  fs.ensureFileSync(tsFile)
  fs.ensureFileSync(jsFile)
  fs.ensureFileSync(mdFile)
  spinner.text = 'create file succeed'
  spinner.succeed()
} catch (error) {
  console.log(error)
}
