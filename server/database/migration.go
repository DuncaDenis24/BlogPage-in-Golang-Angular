package database

import (
	"log"
	"server/models"
)

func MigrateDatabase() {
	err := DB.AutoMigrate(&models.User{}, &models.Post{})
	if err != nil {
		log.Fatal("[error] Migration failed:", err)
	}
	log.Println("[success] Database migration completed")
}
