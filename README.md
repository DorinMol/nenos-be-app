#### NENOS be app - challenge

#### Notes

1. Make sure to have all the details from env file
2. npx prisma migrate dev - to migrate the database
3. npx prisma seed - to seed the database
4. npx prisma studio - to view the database
5. In order to generate a database use docker

```bash
docker run --name nenos -e POSTGRES_USER=nenos -e POSTGRES_PASSWORD=nenos -p 5432:5432 -v nenos:/var/l
ib/postgresql/data -d postgres
```
