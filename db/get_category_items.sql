select food_items.* from food_items
join category on (category.id = food_items.category_id)
where category.title = $1;
