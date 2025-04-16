install:
		npm ci

lint: 
	npx eslint
test:
	npm test

test-watch:
	npm run test-watch

test-coverage:
	npm test -- --coverage --coverage.provider=v8git 