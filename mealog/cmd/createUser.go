package cmd

import (
	"fmt"
	"log"
	"meal-log-app/db"
	"meal-log-app/pkg/config"

	"github.com/spf13/cobra"
	"golang.org/x/crypto/bcrypt"
)

// createUserCmd represents the createUser command
var createUserCmd = &cobra.Command{
	Use:   "createUser",
	Short: "Create a new user",
	Long:  `This command allows you to create a new user in the system.`,
	Run: func(cmd *cobra.Command, args []string) {
		username, _ := cmd.Flags().GetString("username")
		email, _ := cmd.Flags().GetString("email")
		password, _ := cmd.Flags().GetString("password")

		cfg, err := config.LoadConfig()
		if err != nil {
			log.Fatalf("Error loading config: %v", err)
		}

		queries, err := db.ConnectDB(&cfg.Database)
		if err != nil {
			log.Fatalf("Error connecting to the database: %v", err)
		}

		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
		if err != nil {
			log.Fatalf("Error hashing password: %v", err)
		}

		userParams := db.CreateUserParams{
			Username:     username,
			Email:        email,
			PasswordHash: string(hashedPassword),
		}

		user, err := queries.CreateUser(cmd.Context(), userParams)
		if err != nil {
			log.Fatalf("Error creating user: %v", err)
		}

		fmt.Printf("User created successfully: %v\n", user)
	},
}

func init() {
	rootCmd.AddCommand(createUserCmd)

	createUserCmd.Flags().StringP("username", "u", "", "Username for the new user")
	createUserCmd.Flags().StringP("email", "e", "", "Email for the new user")
	createUserCmd.Flags().StringP("password", "p", "", "Password for the new user")

	createUserCmd.MarkFlagRequired("username")
	createUserCmd.MarkFlagRequired("email")
	createUserCmd.MarkFlagRequired("password")
}
