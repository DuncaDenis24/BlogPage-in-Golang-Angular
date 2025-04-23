package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

// Global variable to hold blog posts (in-memory database)
var posts = []Post{
	{ID: "1", Title: "First Post", Content: "This is the first blog post!"},
	{ID: "2", Title: "Second Post", Content: "This is the second blog post!"},
}

type Post struct {
	ID      string `json:"id"`
	Title   string `json:"title"`
	Content string `json:"content"`
}

func main() {
	r := mux.NewRouter()

	// Define routes
	r.HandleFunc("/posts", GetPosts).Methods("GET")
	r.HandleFunc("/posts/{id}", GetPost).Methods("GET")
	r.HandleFunc("/posts", CreatePost).Methods("POST")
	r.HandleFunc("/posts/{id}", UpdatePost).Methods("PUT")
	r.HandleFunc("/posts/{id}", DeletePost).Methods("DELETE")

	// Start the server
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:4200"}, // frontend origin
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Content-Type"},
		AllowCredentials: true,
	})
	http.ListenAndServe(":8080", c.Handler(r))
}

// Handlers for the routes

// Get all posts
func GetPosts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(posts)
}

// Get a specific post by ID
func GetPost(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for _, post := range posts {
		if post.ID == params["id"] {
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(post)
			return
		}
	}
	http.Error(w, "Post not found", http.StatusNotFound)
}

// Create a new post
func CreatePost(w http.ResponseWriter, r *http.Request) {
	var post Post
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&post); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// Add a new ID to the post (in real-world, you'd use a database auto-increment ID)
	post.ID = fmt.Sprintf("%d", len(posts)+1)
	posts = append(posts, post)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(post)
}

// Update an existing post
func UpdatePost(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var updatedPost Post
	if err := json.NewDecoder(r.Body).Decode(&updatedPost); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	for i, post := range posts {
		if post.ID == params["id"] {
			posts[i].Title = updatedPost.Title
			posts[i].Content = updatedPost.Content
			json.NewEncoder(w).Encode(posts[i])
			return
		}
	}

	http.Error(w, "Post not found", http.StatusNotFound)
}

// Delete a post
func DeletePost(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for i, post := range posts {
		if post.ID == params["id"] {
			posts = append(posts[:i], posts[i+1:]...)
			w.WriteHeader(http.StatusNoContent)
			return
		}
	}
	http.Error(w, "Post not found", http.StatusNotFound)
}
