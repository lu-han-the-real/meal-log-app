package db

import (
	"database/sql"
	"fmt"
	"log"

	"meal-log-app/pkg/config"

	_ "github.com/lib/pq"
)

// ConnectDB establishes a connection to the database and returns the connection object
func ConnectDB(cfg *config.DatabaseConfig) (*Queries, error) {
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=%s",
		cfg.Host, cfg.Port, cfg.Username, cfg.Password, cfg.DBName, cfg.SSLMode)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}

	log.Println("Successfully connected to the database!")
	return New(db), nil
}
