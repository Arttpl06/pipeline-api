create table users(
	id Integer generated always as identity primary key,
	name varchar(100) not null,
	email varchar(150) unique not null
);


insert into users(name , email) values
('Joao Silva', 'joao@email.com'),
('Maria Souza' , 'maria@email.com');



