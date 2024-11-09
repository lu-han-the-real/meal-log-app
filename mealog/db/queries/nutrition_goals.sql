-- name: CreateNutritionGoal :one
INSERT INTO nutrition_goals (user_id, daily_calories, daily_protein, daily_carbs, daily_fats, start_date, end_date) 
VALUES ($1, $2, $3, $4, $5, $6, $7) 
RETURNING goal_id, user_id, daily_calories, daily_protein, daily_carbs, daily_fats, start_date, end_date;

-- name: GetNutritionGoal :one
SELECT goal_id, user_id, daily_calories, daily_protein, daily_carbs, daily_fats, start_date, end_date 
FROM nutrition_goals 
WHERE goal_id = $1;

-- name: UpdateNutritionGoal :exec
UPDATE nutrition_goals 
SET daily_calories = $1, daily_protein = $2, daily_carbs = $3, daily_fats = $4, start_date = $5, end_date = $6 
WHERE goal_id = $7;

-- name: DeleteNutritionGoal :exec
DELETE FROM nutrition_goals 
WHERE goal_id = $1;
