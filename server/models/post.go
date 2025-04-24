package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type Post struct {
	ID        int       `json:"id" gorm:"primaryKey"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`

	UserID int  `json:"user_id"`
	User   User `json:"user" gorm:"foreignKey:UserID"`
}

func (post *Post) BeforeCreate(tx *gorm.DB) (err error) {
	post.CreatedAt = time.Now()
	return
}

func (post *Post) BeforeUpdate(tx *gorm.DB) (err error) {
	post.UpdatedAt = time.Now()
	return
}
