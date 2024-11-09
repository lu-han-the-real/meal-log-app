package http_api

import (
	"fmt"
	"meal-log-app/db"
	"meal-log-app/pkg/config"
	"net/http"

	"github.com/labstack/echo/v4"
)

type Server struct {
	queries *db.Queries
}

func NewServer(queries *db.Queries) *Server {
	return &Server{queries: queries}
}

// StartServer initializes and starts the HTTP server
func (s *Server) Serve(cfg *config.Config) error {
	e := echo.New()
	e.GET("/health-check", s.healthCheck)
	e.POST("/users", s.CreateUser)
	e.GET("/users/:id", s.getUserHandler)
	port := cfg.Server.Port
	if err := e.Start(fmt.Sprintf(":%d", port)); err != nil {
		return fmt.Errorf("failed to start server: %w", err)
	}
	return nil
}

func (s *Server) healthCheck(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{"status": "ok"})
}
