deploy:
	git checkout develop
	npm run build
	git checkout master
	mv dist/* .
	rm -rf dist/
	cp index.html 404.html
	git add .
	git commit -m "build and release new version"
	git push origin master
	git checkout develop
