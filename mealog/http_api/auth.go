package http_api

import (
	"time"

	"github.com/dgrijalva/jwt-go"
)

var jwtKey = []byte("mealog_secret")

func generateJWT(userID int32) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": userID,
		"exp":     time.Now().Add(time.Hour * 72).Unix(),
	})

	return token.SignedString(jwtKey)
}
