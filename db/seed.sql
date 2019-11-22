create table r_users (
user_id serial primary key,
name varchar,
email varchar
); 

create table r_users_hash (
    hash_id serial primary key,
    hash text,
    user_id int references r_users (user_id)
);


 
insert into r_users(username, email)
values ('Codus1127', 'codyjamesyoung@gmail.com'),
('Username', 'usern@me' );

select * from r_users;

create table category (
    id serial primary key,
    
)

drop table if exists food_items;

create table food_items (
id serial primary key,
category varchar(100),
title varchar(100),
price numeric,
description text,
img text
);

create table add_ons (
id serial primary key,
title text
);

create table food_items_regular_add_ons (
id serial primary key,
food_item_id integer references food_items (id),
add_on_id integer references add_ons (id)
);


insert into food_items (category, title, price, description, img) values
('Burrito', 'Chile Relleno', 5.69,  'Chile Relleno, guacamole and pico de gallo wrapped in a flour tortilla', null),
('Burrito', 'Shredded Beef', 5.19, 'Shredded beef mixed with tomatoes, onions and bell peppers wrapped in a flour tortilla', null),
('Burrito', 'Chicken', 4.79, 'Shredded chicken wrapped in a flour tortilla', null),
('Burrito', 'Texano', 5.19, 'Shredded chicken, potatoes, cheese and sour cream wrapped in a flour tortilla', null),
('Burrito', 'California', 6.49, 'Chopped steak, potatoes, pico de gallo and cheese wrapped in a flour tortilla', null),
('Burrito', 'Carne Asada', 6.49, 'Chopped steak, guacamole and pico de gallo wrapped in a flour tortilla', null),
('Burrito', 'Chile Verde', 5.69, 'Carnitas (shredded pork), rice, beans and Chile verde salsa wrapped in a flour tortilla', null),
('Burrito', 'Ranchero', 6.48, 'Chopped steak mixed with tomatoes, jalapeños and onions, and guacamole wrapped in a flour tortill', null),
('Burrito', 'Grilled Chicken', 5.69, 'Chopped grilled chicken, onions, bell peppers and sour cream wrapped in a flour tortilla', null),
('Burrito', 'Carnitas', 6.49, 'Shredded pork, guacamole and pico de gallo wrapped in a flour tortilla', null),
('Burrito', 'Fish', 4.59, 'Fried fish, lettuce, pico de gallo and tartar sauce wrapped in a flour tortilla', null),
('Burrito', 'Shrimp', 6.99, 'Shrimp, vegetable mixed (tomatoes, jalapeños and onions), rice and mayonnaise wrap in a flour tortilla', null),
('Burrito', 'Bean and Cheese', 3.19, 'Refried beans and cheese wrapped in a flour tortilla', null),
('Burrito', 'Bean', 2.99, 'Refried beans wrapped in a flour tortilla', null),
('Breakfast Burrito', 'Chorizo Breakfast Burrito', 5.69, 'Chorizo (Mexican sausage), potatoes, eggs and cheese wrapped in a flour tortilla', null),
('Breakfast Burrito', 'Crazy Breakfast Burrito', 5.99, 'Ham, chorizo, potatoes, eggs and cheese wrapped in a flour tortilla', null),
('Breakfast Burrito', 'Pico Salsa Breakfast Burrito', 4.99, 'Pico de Gallo, potatoes, eggs and cheese wrapped in a flour tortilla', null),
('Breakfast Burrito', 'Ham Breakfast Burrito', 5.69, 'Ham, potatoes, eggs and cheese wrapped in a flour tortilla', null),
('Breakfast Burrito', 'Bacon Breakfast Burrito', 4.99, 'Bacon, potatoes, eggs and cheese wrapped in a flour tortilla', null),
('Breakfast Burrito', 'Steak Breakfast Burrito', 5.69, 'Steak, potatoes, eggs and cheese wrapped in a flour tortilla', null),
('Breakfast Burrito', 'Mixed Breakfast Burrito', 5.69, 'Ham, bacon, potatoes, eggs and cheese wrapped in a flour tortilla', null),
('Breakfast Burrito', 'American Sausage Breakfast Burrito', 4.99, 'Sausage, potatoes, eggs and cheese wrapped in a flour tortilla', null);

insert into food_items(category, title, price, description, img) values
('Child Menu', 'Quesadilla Meal', 4.29, 'Cheese quesadilla with rice, beans and small drink', null),
('Child Menu', 'Bean Burrito Meal', 4.29, 'Bean and cheese burrito with rice, beans and small drink', null),
('Child Menu', 'Soft Taco Meal', 4.29, 'Soft corn tortilla taco ( chicken or beef ) with rice, beans and small drink', null),
('Child Menu', 'Carne Asada Taco Meal', 4.49, 'Chopped steak corn tortilla taco with rice, beans and small drink', null);

insert into food_items(category, title, price, description, img) values
('Chimichangas', 'Carne Asada Chimichang', 6.99 , 'Chopped steak, beans and cheese fried burrito topped with guacamole, lettuce, sour cream, pico de gallo and cheese', null),
('Chimichangas', 'Carnitas Chimichanga', 6.99 , 'Shredded pork, beans and cheese fried burrito topped with guacamole, lettuce, sour cream, pico de gallo and cheese', null),
('Chimichangas', 'Chicken Chimichanga', 6.25 , 'Shredded chicken, beans and cheese fried burrito topped with guacamole, lettuce, sour cream, pico de gallo and cheese', null),
('Chimichangas', 'Al Pastor Chimichanga', 6.99 , 'Marinated pork, beans and cheese fried burrito topped with guacamole, lettuce, sour cream, pico de gallo and cheese', null),
('Chimichangas', 'Shredded Beef Chimichanga', 6.25 , 'Shredded beef mixed with tomatoes, onions, bell peppers, beans and cheese fried burrito topped with guacamole, lettuce, sour cream, pico de gallo and cheese', null);

insert into food_items(category, title, price, description, img) values
('Combination Plates', '#1 Two Cheese enchiladas', 8.69 , 'Two cheese enchiladas with rice and beans', null),
('Combination Plates', '#2 Adobada Plate', 9.69 , 'Marinated pork, lettuce, guacamole and pico de gallo served with rice, beans and two flour tortillas', null),
('Combination Plates', '#3 Shredded Beef Taco & Enchilada', 8.96 , 'Shredded beef taco hard shell, cheese enchilada topped with lettuce served with rice and beans', null),
('Combination Plates', '#4 Shredded Beef Burrito & Enchilada', 8.69 , 'Shredded beef burrito, cheese enchilada topped with lettuce served with rice and beans', null),
('Combination Plates', '#5 Two Carne Asada Tacos', 8.99 , 'Two chopped steak tacos topped with guacamole and pico de gallo, served with rice and beans', null),
('Combination Plates', '#6 Steak Ranchero Plate', 9.79 , 'Chopped steak mixed with pico de gallo, topped with two fried eggs, served with rice, beans and two flour tortillas', null),
('Combination Plates', '#7 Carne Asada Plate', 9.69 , 'Two pieces of steak, lettuce, guacamole and pico de gallo served with rice, beans and two flour tortillas', null),
('Combination Plates', '#8 Carnitas Plate', 9.69 , 'Shredded pork, guacamole, lettuce and pico de gallo served with rice, beans and two flour tortillas', null),
('Combination Plates', '#9 Chile Relleno Plate', 9.69 , 'One Chile Relleno, guacamole, pico de gallo, lettuce, sour cream and cheese served with rice, beans and two flour tortillas', null),
('Combination Plates', '#10 Two Taco Plate', 8.99 , 'Two tacos ( fish, beef or chicken ) served with rice and beans', null),
('Combination Plates', '#11 Chimichanga Plate', 9.69 , 'Chicken or beef fried burrito, topped with lettuce, guacamole, cheese, pico de gallo and sour cream served with rice and beans', null),
('Combination Plates', '#12 Fajita Mix', 9.99 , 'Shrimp, steak and chicken mixed with tomatoes, onions and jalapeños, served with guacamole, lettuce, rice, beans and two flour tortillas', null);

insert into food_items(category, title, price, description, img) values
('Enchiladas', 'Shredded Beef Enchiladas', 5.29, '(order of two) Shredded beef mixed with tomatoes, jalapeños and onions topped with enchilada sauce, lettuce and cheese', null),
('Enchiladas', 'Cheese Enchiladas', 5.29, '(order of two) Cheese enchiladas topped with enchilada sauce, lettuce and cheese', null),
('Enchiladas', 'Chicken Enchiladas', 5.29, '(order of two) Shredded chicken enchiladas topped with enchilada sauce, lettuce and cheese', null);

insert into food_items(category, title, price, description, img) values
('Nachos', 'Super Nachos', 9.69, 'Tortilla chips with cheese, guacamole, sour cream, pico de gallo and your choice of meat (chicken, carnitas, al pastor or carne asada)', null),
('Nachos', 'Taco Salad', 6.09, 'Tortilla shell with beans, sour cream, lettuce, guacamole, pico de gallo, cheese and your choice of meat', null),
('Nachos', 'Chips and Gaucamole', 4.99, 'Tortilla chips with guacamole and cheese', null);


insert into add_ons (title) values
('guacamole'),
('sour cream'),
('pico de gallo');
