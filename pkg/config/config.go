package config

import (
	"fmt"

	"github.com/spf13/viper"
)

// DatabaseConfig holds the database configuration
type DatabaseConfig struct {
	Host     string
	Port     int
	Username string
	Password string
	DBName   string
	SSLMode  string
}

// ServerConfig holds the server configuration
type ServerConfig struct {
	Port int
}

// Config holds the application configuration
type Config struct {
	Database DatabaseConfig
	Server   ServerConfig
}

// LoadConfig initializes and loads the configuration
func LoadConfig() (*Config, error) {
	// Set default config file name and type
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")

	// Add config paths
	viper.AddConfigPath("./pkg/config")
	viper.AddConfigPath(".")

	// Automatically override values with environment variables
	viper.AutomaticEnv()

	// Read in the config file
	if err := viper.ReadInConfig(); err != nil {
		return nil, fmt.Errorf("error reading config file: %w", err)
	}

	// Initialize and return the config
	config := &Config{
		Database: DatabaseConfig{
			Host:     viper.GetString("database.host"),
			Port:     viper.GetInt("database.port"),
			Username: viper.GetString("database.username"),
			Password: viper.GetString("database.password"),
			DBName:   viper.GetString("database.dbname"),
			SSLMode:  viper.GetString("database.sslmode"),
		},
		Server: ServerConfig{
			Port: viper.GetInt("server.port"),
		},
	}

	return config, nil
}
