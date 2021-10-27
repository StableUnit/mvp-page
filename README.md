# Stableunit.org main page

## Development

Need to install node-sass and css-minify:
1. ```npm install -g node-sass```
3. ```npm install css-minify -g```
   
To get min.css:
1. ```node-sass assets/css -o dist/css```
2. ```css-minify -f dist/css/styles.css -o dist/css```
3. ```rm dist/css/styles.css```