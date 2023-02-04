git checkout dist&&
git merge master&&
ng build&&
rm *.json node_modules src front
mv dist/kernelious/* .
rm dist

