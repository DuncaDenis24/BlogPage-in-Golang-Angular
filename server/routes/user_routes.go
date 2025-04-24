package routes

import (
	"server/handlers"

	"github.com/gorilla/mux"
)

func UserRoutes(router *mux.Router) {
	router.HandleFunc("/handlers/user/{id}", handlers.GetUserByID).Methods("GET")
	router.HandleFunc("/handlers/user/{id}", handlers.UpdateUser).Methods("PUT")
}
