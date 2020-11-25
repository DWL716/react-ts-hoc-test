安装依赖
yarn install  or   npm install

运行项目
yarn start    or   npm run start




项目初始化/本地仓库和远程仓库连接
<!-- 创建项目初始化的时候 -->
echo "# react-ts-hoc-test" >> README.md
git init
git add README.md
<!-- 提交暂存区 -->
git commit -m "first commit"
<!-- 创建分支 -->
git branch -M master
<!-- 添加远程仓库地址 -->
git remote add origin https://github.com/DWL716/react-ts-hoc-test.git
<!-- push 到远程仓库 -->
git push -u origin master