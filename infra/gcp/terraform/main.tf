resource "google_sql_database_instance" "postgres_instance" {
  name             = "my-postgres-instance"
  database_version = "POSTGRES_13"
  region           = "us-central1"

  settings {
    tier = "db-f1-micro"

    ip_configuration {
      authorized_networks {
        name = "my-network"
        value = "0.0.0.0/0"
      }
      ipv4_enabled = true
    }
  }
}

resource "google_sql_user" "default_user" {
  name     = "db_user"
  instance = google_sql_database_instance.postgres_instance.name
  password = "your_password"
}

resource "google_sql_database" "default_database" {
  name     = "my_database"
  instance = google_sql_database_instance.postgres_instance.name
}

output "instance_connection_name" {
  value = google_sql_database_instance.postgres_instance.connection_name
}

output "database_name" {
  value = google_sql_database.default_database.name
}

output "db_user" {
  value = google_sql_user.default_user.name
}