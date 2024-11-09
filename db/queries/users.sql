-- name: CreateUser :one
INSERT INTO users (username, email, password_hash)
VALUES ($1, $2, $3)
RETURNING id,
    username,
    email,
    password_hash,
    created_at;
-- name: GetUser :one
SELECT id,
    username,
    email,
    password_hash,
    created_at
FROM users
WHERE id = $1;
-- name: UpdateUser :exec
UPDATE users
SET username = $1,
    email = $2
WHERE id = $3;
-- name: DeleteUser :exec
DELETE FROM users
WHERE id = $1;
