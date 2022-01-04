const faker = require('faker');
const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const user = new User();
console.log(user);

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}
const company = new Company();
console.log(company);
// console.log(company.name);
// console.log(company.address.state);

// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json(user);
});
app.get("/api/companies/new", (req, res) => {
    res.json(company);
});
app.get("/api/user/company", (req, res) => {
    res.json([user, company]);
    console.log(res[0].firstName)
});



// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));

