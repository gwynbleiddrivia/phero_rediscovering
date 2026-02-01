How I rediscovered Github upload

Open a new repository in the github with the same name as your local directory
git init
git add .
git commit -m "test commit"
git branch -M main
git remote add origin copy paste the url
git push -u origin main

Then everytime you do something,
git add .
git commit -m "some message"
git push