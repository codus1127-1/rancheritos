insert into orders (user_id, order_items, time_stamp) values
($1, $2::json, $3);
