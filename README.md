# W-RFRN

## Backend

This project uses **Spring Boot** version `3.3.3` with **Java 22**.

### Prerequisites

Ensure you have the following installed:
- **Java 22** JDK
- **Maven** (for managing dependencies and building the project)

### Setup

1. **Clone the Repository**

   `git clone git@github.com:raphaelfrn/W-RFRN.git`

2. **Build the Project**

   Use Maven to build the project:

   `mvn clean install`

3. **Run the Application**

   To start the Spring Boot application, use:

   `mvn spring-boot:run`

   The application will be accessible at `http://localhost:8080`.

### Dependencies

- **Spring Boot Starter Data JPA**: Provides data access and persistence capabilities.
- **Spring Boot Starter Web**: Includes components for building web applications and RESTful APIs.
- **Spring Boot DevTools**: Offers additional development-time features like hot swapping.
- **Spring Boot Starter Test**: Includes testing support for Spring Boot applications.
- **Lombok**: Reduces boilerplate code such as getters and setters.
- **MariaDB Java Client**: Provides the JDBC driver for MariaDB connectivity.

### Configuration

The backend is configured to use MariaDB. Ensure that the database is set up and the necessary configurations are updated in `application.properties`.

---

## Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version `18.2.2`.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (which includes `npm`)
- **Angular CLI** (if not installed, you can install it using `npm install -g @angular/cli`)

### Setup

1. **Navigate to the Frontend Directory**

   `cd W-RFRN/wakfu-frontend`

2. **Install Dependencies**

   Install the required dependencies using npm:

   `npm install`

3. **Run the Development Server**

   Start the Angular development server:

   `ng serve`

   The application will be accessible at `http://localhost:4200/`.

### Code Scaffolding

- **Generate a New Component**

  `ng generate component component-name`

- **Generate Other Elements**

  `ng generate directive|pipe|service|class|guard|interface|enum|module`

### Build

To build the project, use:

`ng build`

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute the unit tests via [Karma](https://karma-runner.github.io):

`ng test`

### Running End-to-End Tests

To execute end-to-end tests:

`ng e2e`

Ensure you have added a package that implements end-to-end testing capabilities if needed.

### Further Help

For more help on the Angular CLI, use:

`ng help`

Or check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

### Notes

- Ensure that both the backend and frontend services are running to interact with the full application.
- Update configuration files as needed based on your local setup and environment.
