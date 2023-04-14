# Brain Agriculture Test

## Description

Farm and Producer Management System

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

```

## Documentation
```bash
# compodoc
$ npx @compodoc/compodoc -p tsconfig.json -s

# swagger 
# http://localhost:3000/api

```

## Examples

```
# Create Area

# POST localhost:3000/api/v1/areas
payload:  
  {
    "name": "Milho"    
  }



# Create Producers

# POST localhost:3000/api/v1/producers
payload:
{
    "name": "Daniel Corbe",
    "document": "29274734808",
    "farms": [
       { 
           "name": "Fazenda do Daniel",
           "city": "São Paulo",
           "state": "SP",
           "totalArea": 30,
           "totalVegetationArea": 3,
           "areas": [
               {  
                    "area": {
                        "id": 1
                    },
                    "value":12
               }
            ]
        }
    ]
}


# Dashboard data

# Get localhost:3000/api/v1/dashboard

```

## 🛠️ Develope with

* [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

* Thanks to Brain Agriculture for the opportunity to demonstrate my work.

⌨️ with ❤️ by [Daniel Corbe Hahne Latorre](https://github.com/corbe) 😊


