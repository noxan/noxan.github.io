deploy:
	git checkout master
	webpack
	git checkout gh-pages
	cp dist/index.html .
	cp dist/index.html 404.html
	cp dist/bundle.js .
	git add index.html 404.html bundle.js
	git commit -m "build and release new version"
	git push
	git checkout master
