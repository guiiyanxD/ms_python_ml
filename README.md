# ml-graphql-inference

This project is designed to facilitate machine learning inference using a GraphQL server that interacts with a PostgreSQL database deployed on Google Cloud Platform. The architecture consists of a GraphQL server and a Python microservice for inference, with components dedicated to different models.

## Project Structure

- **services/graphql-server**: Contains the GraphQL server implementation.
  - **src**: Source code for the GraphQL server.
    - **server.ts**: Entry point for the GraphQL server.
    - **schema.graphql**: Defines the GraphQL schema.
    - **graphql**: Contains resolvers and types for GraphQL.
      - **resolvers.ts**: Resolver functions for handling GraphQL queries and mutations.
      - **types.ts**: TypeScript types for the GraphQL schema.
    - **db**: Database connection logic.
      - **gcpPostgres.ts**: Connects to the PostgreSQL database.
    - **components**: Contains model-specific logic.
      - **model-a**: Logic for Model A.
      - **model-b**: Logic for Model B.
      - **model-c**: Logic for Model C.
      - **model-d-image**: Logic for Model D, including image handling.
  - **package.json**: Configuration file for npm.
  - **tsconfig.json**: TypeScript configuration file.
  - **Dockerfile**: Instructions for building the GraphQL server Docker image.

- **services/python-inference**: Contains the Python microservice for inference.
  - **app**: Source code for the inference service.
    - **main.py**: Entry point for the Python microservice.
    - **api**: API logic for handling inference requests.
      - **infer.py**: Processes input data and returns results.
    - **models**: Implementations of various models for inference.
      - **model_a.py**: Implementation of Model A.
      - **model_b.py**: Implementation of Model B.
      - **model_c.py**: Implementation of Model C.
      - **model_d.py**: Implementation of Model D.
  - **requirements.txt**: Lists Python dependencies.
  - **Dockerfile**: Instructions for building the Python inference service Docker image.

- **infra/gcp**: Infrastructure as code for Google Cloud Platform.
  - **terraform**: Terraform configuration for resource deployment.
    - **main.tf**: Terraform configuration file.
  - **k8s**: Kubernetes deployment configuration.
    - **deployment.yaml**: Kubernetes deployment file.

- **docker-compose.yml**: Defines services, networks, and volumes for Docker Compose.

- **.env.example**: Example environment variables for the application.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd ml-graphql-inference
   ```

2. **Set up the GraphQL server**:
   - Navigate to the `services/graphql-server` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Start the server:
     ```
     npm start
     ```

3. **Set up the Python inference service**:
   - Navigate to the `services/python-inference` directory.
   - Install dependencies:
     ```
     pip install -r requirements.txt
     ```
   - Start the service:
     ```
     python app/main.py
     ```

4. **Deploy infrastructure**:
   - Navigate to the `infra/gcp/terraform` directory.
   - Initialize Terraform:
     ```
     terraform init
     ```
   - Apply the configuration:
     ```
     terraform apply
     ```

## Usage

- The GraphQL server exposes an API for querying and mutating data related to the models.
- The Python microservice handles inference requests based on the parameters received from the GraphQL server.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.