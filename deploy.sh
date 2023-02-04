git branch -d dist&&
git branch dist&&
git checkout dist&&
git merge master&&
ng build&&
rm *.json node_modules src front
mv dist/kernelious/* .
rm dist

