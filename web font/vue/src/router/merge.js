let fs = require('fs');
let path = require('path');
const root = path.join(__dirname, '..', 'pages');
let imports = '';
let routes = '';
let dirArr = fs.readdirSync(root);
for (let dir of dirArr) {
  let routerPath = path.join(root, dir, 'router.js')
  if (fs.existsSync(routerPath)) {
    console.log('扫描到的路由路径', routerPath);
    let content = fs.readFileSync(routerPath);
    content = content.toString();
    let tempImports = content.substr(0, content.indexOf('export default')).trim();
    if (tempImports) imports += (tempImports + '\r\n');

    content = content.substr(content.indexOf('export default'));
    content = content.replace(/export default \[/g, '').replace(/];/g, '').trim();
    let lastChar = content.charAt(content.length - 1);
    if (lastChar != ',') content += ',';
    content += '\r\n';
    routes += content;
  }
}

let content = fs.readFileSync(path.resolve(__dirname, 'routerTemplate.js'));
content = content.toString();
content = content.replace(`import imports from 'imports';`, imports);
content = content.replace('\'{{routes}}\'', routes);

console.log('正在写入文件');
let outStream = fs.createWriteStream(path.resolve(__dirname, 'index.js'));
outStream.write(content);
outStream.close();
console.log('文件写入完成');