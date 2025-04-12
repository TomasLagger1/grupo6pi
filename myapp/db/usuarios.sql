CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(250) NOT NULL UNIQUE,
	contrasenia VARCHAR(500) NOT NULL,
    documento INT NOT NULL,
    nacimiento DATE NOT NULL,
	foto VARCHAR(300),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios (email, contrasenia, documento, nacimiento, foto)
VALUES
('briangomez@gmail.com', 'brian1234', '41082865', '2000-12-07', ''),
('laura.mendez@gmail.com', 'laura2024', 38900231, '1995-03-21', ''),
('tomasrivero10@gmail.com', 'tommyriver', 40200123, '1998-11-15', ''),
('florencia_paz@gmail.com', 'florpaz88', 37455678, '1992-07-08', ''),
('ignaciotorres23@gmail.com', 'nachotorres', 42109876, '2001-01-30', '');