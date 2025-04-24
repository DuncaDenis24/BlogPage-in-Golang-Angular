package routes

import (
	"net/http"

	"server/handlers"

	"github.com/gorilla/mux"
)

func RegisterPostRoutes(router *mux.Router) {
	router.HandleFunc("/handlers/posts", handlers.GetPosts).Methods(http.MethodGet)
	router.HandleFunc("/handlers/posts/{id}", handlers.GetPostByID).Methods(http.MethodGet)
	router.HandleFunc("/handlers/posts/create", handlers.CreatePost).Methods(http.MethodPost)
	router.HandleFunc("/handlers/posts/update/{id}", handlers.UpdatePost).Methods(http.MethodPut)
	router.HandleFunc("/handlers/posts/delete/{id}", handlers.DeletePost).Methods(http.MethodDelete)
}
