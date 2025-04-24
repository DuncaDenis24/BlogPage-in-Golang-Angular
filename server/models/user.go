package models

type User struct {
	ID       int    `json:"id" gorm:"primaryKey"`
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`

	Posts []Post `json:"posts" gorm:"foreignKey:UserID"`
}
