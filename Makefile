install:
	docker-compose run --rm fcc "npm install"

shell:
	docker-compose run --rm --service-ports fcc "bash"

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .
