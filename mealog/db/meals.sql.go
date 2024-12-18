// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: meals.sql

package db

import (
	"context"
	"database/sql"
	"time"
)

const createMeal = `-- name: CreateMeal :one
INSERT INTO meals (user_id, meal_time, meal_type, description, total_calories) 
VALUES ($1, $2, $3, $4, $5) 
RETURNING meal_id, user_id, meal_time, meal_type, description, total_calories, created_at
`

type CreateMealParams struct {
	UserID        sql.NullInt32
	MealTime      time.Time
	MealType      sql.NullString
	Description   sql.NullString
	TotalCalories sql.NullString
}

func (q *Queries) CreateMeal(ctx context.Context, arg CreateMealParams) (Meal, error) {
	row := q.db.QueryRowContext(ctx, createMeal,
		arg.UserID,
		arg.MealTime,
		arg.MealType,
		arg.Description,
		arg.TotalCalories,
	)
	var i Meal
	err := row.Scan(
		&i.MealID,
		&i.UserID,
		&i.MealTime,
		&i.MealType,
		&i.Description,
		&i.TotalCalories,
		&i.CreatedAt,
	)
	return i, err
}

const deleteMeal = `-- name: DeleteMeal :exec
DELETE FROM meals 
WHERE meal_id = $1
`

func (q *Queries) DeleteMeal(ctx context.Context, mealID int32) error {
	_, err := q.db.ExecContext(ctx, deleteMeal, mealID)
	return err
}

const getMeal = `-- name: GetMeal :one
SELECT meal_id, user_id, meal_time, meal_type, description, total_calories, created_at 
FROM meals 
WHERE meal_id = $1
`

func (q *Queries) GetMeal(ctx context.Context, mealID int32) (Meal, error) {
	row := q.db.QueryRowContext(ctx, getMeal, mealID)
	var i Meal
	err := row.Scan(
		&i.MealID,
		&i.UserID,
		&i.MealTime,
		&i.MealType,
		&i.Description,
		&i.TotalCalories,
		&i.CreatedAt,
	)
	return i, err
}

const updateMeal = `-- name: UpdateMeal :exec
UPDATE meals 
SET meal_time = $1, meal_type = $2, description = $3, total_calories = $4 
WHERE meal_id = $5
`

type UpdateMealParams struct {
	MealTime      time.Time
	MealType      sql.NullString
	Description   sql.NullString
	TotalCalories sql.NullString
	MealID        int32
}

func (q *Queries) UpdateMeal(ctx context.Context, arg UpdateMealParams) error {
	_, err := q.db.ExecContext(ctx, updateMeal,
		arg.MealTime,
		arg.MealType,
		arg.Description,
		arg.TotalCalories,
		arg.MealID,
	)
	return err
}
