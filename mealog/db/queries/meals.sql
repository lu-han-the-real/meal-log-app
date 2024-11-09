-- name: CreateMeal :one
INSERT INTO meals (user_id, meal_time, meal_type, description, total_calories) 
VALUES ($1, $2, $3, $4, $5) 
RETURNING meal_id, user_id, meal_time, meal_type, description, total_calories, created_at;

-- name: GetMeal :one
SELECT meal_id, user_id, meal_time, meal_type, description, total_calories, created_at 
FROM meals 
WHERE meal_id = $1;

-- name: UpdateMeal :exec
UPDATE meals 
SET meal_time = $1, meal_type = $2, description = $3, total_calories = $4 
WHERE meal_id = $5;

-- name: DeleteMeal :exec
DELETE FROM meals 
WHERE meal_id = $1;
