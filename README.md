# Rick Advisor 
A TripAdvisor clone developed using service oriented architechture. This application is a full-stack microservice for the 'About' section on a TripAdvisor hotel page. The backend was build using Amazon Web Services: AWS RDS PostgreSQL, API Gateway, Lambda, ElastiCache, ECS, EC2

## AWS Code samples
(Swagger yaml)[https://github.com/IanGSalmon/Jared-About-Service/blob/master/sam-app/swagger/aboutService.yaml]

(SAM Deploy yaml)[https://github.com/IanGSalmon/Jared-About-Service/blob/master/sam-app/packaged.yaml]

(Lambda handler sample)[https://github.com/IanGSalmon/Jared-About-Service/blob/master/sam-app/src/lambda/getHotelById.js]

(Benchmark - 4000 RPS with t.2micro ec2 instances)[https://imgur.com/a/HsvVa9k]

## Getting Started

Clone this repository from by running:
`git clone https://github.com/IanGSalmon/Jared-About-Service.git`

### Prerequisites
Node.js

npm

### Installing
Install all dependencies.

`npm install`

`npm start`

### Running the tests

`npm run test`

### Additional dependencies
AWS dependencies can be initialized upon request to Ian, isalmon1@gmail.com

### Built With

* [Express.js]
* [React]
* [Node.js]
* [Jest]
* [AWS RDS (PostgreSQL)]
* [AWS API Gateway]
* [AWS Lambda]

## Authors (backend)

* **Ian Salmon** - [GitHub](https://github.com/IanGSalmon)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you to Jared Brink, for designing the beautiful front-end with React.js.
* Thank you to my wife, Anna, for supporting me through all of the all-night code sprints.
