CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE meals (
    meal_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    meal_time TIMESTAMP NOT NULL,
    meal_type VARCHAR(20),
    description TEXT,
    total_calories NUMERIC(6, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE ingredients (
    ingredient_id SERIAL PRIMARY KEY,
    meal_id INTEGER REFERENCES meals(meal_id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    quantity NUMERIC(6, 2),
    unit VARCHAR(20),
    calories NUMERIC(6, 2),
    protein NUMERIC(5, 2),
    carbs NUMERIC(5, 2),
    fats NUMERIC(5, 2)
);
CREATE TABLE nutrition_goals (
    goal_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    daily_calories NUMERIC(6, 2) NOT NULL,
    daily_protein NUMERIC(5, 2),
    daily_carbs NUMERIC(5, 2),
    daily_fats NUMERIC(5, 2),
    start_date DATE NOT NULL,
    end_date DATE
);
