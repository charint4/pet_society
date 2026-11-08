# express

Simple pet express app
Learned how to use express by modeling a andoption centre data
created controller with query and params
created middleware for validating id and password
made the folder modular with
learned type for typescript
run with bun

```bash
bun install
```

To run:

```bash
bun --watch src/index.ts
```

##test api
###get all pets
```
http://localhost:8000/pets
```
###filter pet by species
you can change cat with other species
```
http://localhost:8000/pets?species=cat
```

###filter pet by age
you can change min and max age
```
http://localhost:8000/pets?minAge=1&maxAge=5
```

you also can combine species and age query with '&'
```
http://localhost:8000/pets?species=bird&minAge=2&maxAge=10
```

###get pet by id
to get a pet by id we attach a simple validator for password and the id itself, might not be secure just for reference
```
http://localhost:8000/pets/1?password=please
```



This project was created using `bun init` in bun v1.4.4. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
