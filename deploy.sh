git branch -D dist&&
git branch dist&&
git checkout dist&&
git merge master&&
npm i && npm audit fix &&
ng build&&
rm *.json node_modules src front -rf &&
mv dist/kernelious/* . &&
rm dist -rf
git add -A
git commit -m "Deploy"
git push -f  origin dist

