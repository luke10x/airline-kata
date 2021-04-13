up:
	docker-compose up -d --build --force-recreate

into:
	docker-compose exec ticketsrv "bash"

down:
	docker-compose down --remove-orphans

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .
