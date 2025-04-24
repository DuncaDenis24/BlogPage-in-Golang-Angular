package main

import (
	"fmt"
	"log"
	"net/http"

	"server/database"
	"server/routes"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	database.ConnectDatabase()
	database.MigrateDatabase()

	r := mux.NewRouter()

	routes.RegisterPostRoutes(r) // For blog post related endpoints
	routes.RegisterAuthRoutes(r) // For auth-related endpoints like login/register
	routes.UserRoutes(r)         // For user-related endpoints like profile management
	// CORS settings
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:4200"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Content-Type"},
		AllowCredentials: true,
	})

	fmt.Println("Server is running on port 8080")
	err := http.ListenAndServe(":8080", c.Handler(r))
	if err != nil {
		log.Fatal(err)
	}
}
