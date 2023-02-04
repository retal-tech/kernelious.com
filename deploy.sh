git checkout dist&&
git merge master&&
ng build&&
find . ! -name 'dist' -type f -exec rm -f {} +&&
mv dist/kernelious/* .

