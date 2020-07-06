-- id            name      base spirit         ingredients       recipe        photo
-- Integer      text       string               text              text         text?


CREATE TABLE cocktails (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
base_spirit TEXT,
ingredients TEXT,
recipe TEXT,
image TEXT
);


INSERT INTO cocktails (name, base_spirit, ingredients) VALUES ("Old Fashioned", "Bourbon", "Bourbon, Sugar cube, Angostura Bitters, orange peel");
INSERT INTO cocktails (name, base_spirit, ingredients) VALUES ("Negroni", "Gin", "Gin, Campari, Vermouth, orange peel");
INSERT INTO cocktails (name, base_spirit, ingredients) VALUES ("The Last Word", "Gin", "Gin, Chartreuse Vert, Maraschino liqueur, lime juice");
