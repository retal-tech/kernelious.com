git branch -D dist&&
git branch dist&&
git checkout dist&&
git merge master&&
npm i && npm audit fix &&
ng build&&
rm *.json node_modules src front *.MD *.md -rf &&
mv dist/kernelious/* . &&
rm dist -rf
rm README.md
git add -A
git commit -m "Deploy"
git push -f  origin dist

