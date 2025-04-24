package routes

import (
	"net/http"
	"server/handlers"

	"github.com/gorilla/mux"
)

func RegisterAuthRoutes(router *mux.Router) {
	router.HandleFunc("/handlers/auth/login", handlers.LoginHandler).Methods(http.MethodPost)
	router.HandleFunc("/handlers/auth/register", handlers.RegisterHandler).Methods(http.MethodPost)
	router.HandleFunc("/handlers/auth/logout", handlers.LogoutHandler).Methods(http.MethodGet)
}
