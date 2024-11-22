-- name: CreateIngredient :one
INSERT INTO ingredients (meal_id, name, quantity, unit, calories, protein, carbs, fats) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
RETURNING ingredient_id, meal_id, name, quantity, unit, calories, protein, carbs, fats;

-- name: GetIngredient :one
SELECT ingredient_id, meal_id, name, quantity, unit, calories, protein, carbs, fats 
FROM ingredients 
WHERE ingredient_id = $1;

-- name: UpdateIngredient :exec
UPDATE ingredients 
SET name = $1, quantity = $2, unit = $3, calories = $4, protein = $5, carbs = $6, fats = $7 
WHERE ingredient_id = $8;

-- name: DeleteIngredient :exec
DELETE FROM ingredients 
WHERE ingredient_id = $1;
