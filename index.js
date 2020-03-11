#! /usr/bin/env node

const commander = require('commander')
const { exec } = require('child_process')

//传入url
function openUrl (url) {
    // 拿到当前系统的参数
    switch (process.platform) {
        //mac系统使用 一下命令打开url在浏览器
        case "darwin":
            exec(`open ${url}`);
        //win系统使用 一下命令打开url在浏览器
        case "win32":
            exec(`start ${url}`);
            // 默认mac系统
        default:
            exec(`open ${url}`);
    }
}

// commander
//     .version('v0.0.1')
//     .description('A cmd manager')

// commander
//     .option('-v, --version', 'show version')
//     // .option('-l, --list', 'show all cmd')
//     // .option('-a, --add', 'Add bbq sauce')
//     // .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
// // console.log('demo-cli', process.cwd())

// commander
//     .helpOption('-h,--HELP')
//     // .option('-f, --foo', 'enable some foo')
//     // .option('-b, --bar', 'enable some bar')
//     // .option('-B, --baz', 'enable some baz')

// commander
//     .command('search <keyword>')
//     .description('Search by keyword.')
//     //   .option('-r, --recursive', 'Remove recursively')
//     .action((keyword) => {
//         let url = `https://www.baidu.com/s?wd=${encodeURIComponent(keyword)}`
//         console.log('url')
//         openUrl(url)
//     })

// commander.parse(process.argv)
// if ()
// console.log(process.argv[2])
if (process.argv[2]) {
    let keyword = process.argv[2]
    let url
    if (keyword.startsWith('http')) {
        url = http
    } else {
        url = `http://${keyword}`
    }
    // let url = `https://www.baidu.com/s?wd=${encodeURIComponent(keyword)}`
    // console.log('url')
    openUrl(url)
}