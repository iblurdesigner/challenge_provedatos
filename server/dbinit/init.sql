CREATE DATABASE IF NOT EXISTS provedatosdb;
ALTER DATABASE provedatosdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE empleados CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE provedatosdb;
DROP TABLE IF EXISTS empleados;	

CREATE TABLE empleados
(
	id int(11) NOT NULL AUTO_INCREMENT,
	nombres varchar(100) NOT NULL,
	apellidos varchar(100) NOT NULL,
	cedula int(11) NOT NULL,
	provincia varchar(100) NOT NULL,
	f_nacimiento date NOT NULL,
	email varchar(100) NOT NULL,
	observaciones text,
	url_foto varchar(100),
	ingreso date,
	cargo varchar(100) NOT NULL,
	departamento varchar(100) NOT NULL,
	provilab varchar(100) NOT NULL,
	sueldo float(10,2) NOT NULL,
	jornada varchar(100) NOT NULL,
	observlab text,
	codigo varchar(100) NOT NULL,
	estado varchar(100) NOT NULL,
	PRIMARY KEY (id)
);


INSERT INTO `empleados` (`id`, `nombres`, `apellidos`, `cedula`, `provincia`, `f_nacimiento`, `email`, `observaciones`, `url_foto`, `ingreso`, `cargo`, `departamento`, `provilab`, `sueldo`, `jornada`, `observlab`, `codigo`, `estado`) VALUES
	(1, 'Daniel', 'Cevallos', 1739663847, 'Azuay', '1977-09-06', 'd.cevallos@ccq.com', 'Es el primer empleado ingresado', NULL, '2000-10-24', 'Guardia', 'Seguridad', 'NJ', 1200.00, 'Parcial', 'Es una persona confiable', '7032', 'RETIRADO'),
	(2, 'Freddy Gerardo', 'Abarca Jimenez', 1735975027, 'Carchi', '1983-07-12', 'f.abarca@provedatos.com', 'Segundo usuario registrado', NULL, '2000-10-24', 'Bodega', 'Logística', 'Bolívar', 800.00, 'Completa', 'Es una persona muy confiable', '00936', 'VIGENTE'),
	(3, 'Joel Paul', 'Abad Cevallos', 102488835, 'Azuay', '1988-07-13', 'j.abad@prove.com', 'Este usuario es el tercero', '', NULL, '', '', '', 0.00, 'Completa', 'Es buena persona', '0005832', 'VIGENTE'),
	(4, 'Carmen Melania', 'Acaro Vega', 1837594710, 'Carchi', '2002-06-13', 'c.acaro@prove.com', 'Cuarto usuario registrado con datos personales', NULL, '2020-06-17', 'Secretaria', 'Gerencia', 'Guayas', 1200.00, 'Parcial', 'Cuarto usuario registrado datos laborales', '006456', 'VIGENTE'),
	(5, 'Juan Pedro', 'Rodriguez Ischa', 1722222222, 'Guayas', '1987-06-11', 'j.rodriguez@prove.com', 'Quinto usuario registrado con datos personales', '', '2016-06-17', 'Redactor', 'Marketing', 'Pichincha', 2500.00, 'Parcial', 'Quinto usuario registrado con datos laborales', '006532', 'VIGENTE'),
	(6, 'Ludmila', 'Melian Flores', 1837294058, 'Guayas', '1989-11-30', 'l.melian@lomas.com', 'Ludmila es de argentina en realidad', '', '2017-05-27', 'Contador', 'Financiero', 'Pichincha', 3000.50, 'Parcial', 'Ludmila es lo más', '002514', 'VIGENTE'),
	(7, 'Stefany Andreina', 'Hidalgo', 371845069, 'Manabí', '1989-11-09', 's.hidalgo@lomas.com', 'Stefany realmente nació en Venezuela', NULL, '2014-03-20', 'Contador', 'Financiero', 'Pichincha', 3000.50, 'Completa', 'Stefany es muy eficiente', '003257', 'VIGENTE'),
	(8, 'Jennifer Nicole', 'Acosta Erazo', 1637294058, 'Santo Domingo de los Tsáchilas', '1999-11-11', 'j.acosta@prove.com', 'Sexta persona datos personales', '', '2022-04-13', 'Secretaria', 'Marketing', 'Guayas', 1200.68, 'Completa', 'Sexta persona datos laborales', '005647', 'VIGENTE'),
	(9, 'Ana María', 'Cevallos Hernandez', 1738502274, '', '1984-07-27', 'a.cevallos.prove.com', 'novena persona registros personales', '', '2021-04-16', 'Limpieza', 'Gerencia', '', 500.00, 'Parcial', 'datos laborales de limpieza', '003534', 'RETIRADO'),
	(10, 'Juana Isabel', 'Mendoza Lara', 1528402799, 'Manabí', '1989-10-19', 'm.mendoza@prove.com', 'Es hermana de Luis Mendoza', '', '2022-06-17', 'Project Manager', 'Marketing', 'Pichincha', 4000.00, 'Completa', 'Es muy eficaz en su trabajo', '004367', 'VIGENTE'),
	(14, 'Yasuri Yamile', 'Peralta Arias', 1743754839, 'Manabí', '1995-06-10', 'y.peralta@betty.com', 'Usuario joven', NULL, '2024-04-17', 'Secretaria', 'Marketing', 'Pichincha', 800.00, 'Completa', 'Persona a prueba', '00573', 'VIGENTE'),
	(15, 'Gabriel Patricio', 'Aguilar Alquinga', 0, 'Chimborazo', '1980-07-10', 'g.aguilar@prove.com', 'Tiene cargas familiar', '', '2006-06-07', 'Redactor', 'Marketing', 'Guaya', 1300.00, 'Completa', 'Tiene buenas referencias del trabajo anterior', '00377', 'VIGENTE'),
	(16, 'Edison Patricio', 'Aguirre Enriquez', 1739473208, 'Cotopaxi', '1978-04-12', 'e.aguirre@correo.com', 'Edison tiene cargas familiares', '', '2012-08-27', 'Guardia', 'Seguridad', 'Pichincha', 1200.00, 'Completa', 'Tiene buenas referencias', '003467', 'VIGENTE'),
	(17, 'Christian', 'Villamar Albuja', 1737693749, '', '1989-03-04', 'c.villamar@mail.com', 'Buena persona', '', '1998-07-27', 'Contador', 'Financiero', 'Pichincha', 1500.00, 'Parcial', 'Hubo problemas de complicidad', '003411', 'RETIRADO'),
	(18, 'Ivan Anibal', 'Albuja Andino', 1736583369, '', '2012-05-16', 'i.albuja@ecu.com', 'Buena persona', '', '2024-04-01', 'Project Manager', 'Marketing', 'Pichincha', 1500.00, 'Completa', 'Esta a prueba', '002433', 'VIGENTE'),
	(19, 'Miguel Angel', 'Padilla Pelaez', 1863785720, 'El Oro', '2024-04-04', 'm.padilla@ere.com.ec', 'Es persona confiable', '', '2023-12-05', 'Redactor', 'Marketing', 'Guayas', 800.00, 'Completa', 'Esta a prueba por 3 meses', '003487', 'VIGENTE'),
	(20, 'Ana María', 'Aldana Aguirre', 1839204920, 'Imbabura', '2024-03-31', 'a.aldana@ere.com.ec', 'Persona con discapacidad', NULL, '2024-04-10', 'Secretaria', 'Marketing', 'Pichincha', 1000.00, 'Parcial', 'Tiene enfermedad preexistente', '004996', 'RETIRADO'),
	(21, 'Jacinto Utiel', 'Urbano Ischa', 1839002839, 'Loja', '2024-01-27', 'j.urbano@prove.com', 'Buena persona', '', '2023-07-11', 'Guardia', 'Seguridad', 'Pichincha', 1300.00, 'Parcial', 'Sin novedades', '003477', 'RETIRADO'),
	(22, 'Darwin Julio', 'Tulio Aguilar', 1839994972, 'Los Ríos', '1998-04-03', 'd.tulio@ere.com', 'Con enfermedades', '', '2024-04-02', 'Redactor', 'Marketing', 'Pichincha', 800.00, 'Completa', 'Personal a prueba', '004343', 'VIGENTE'),
	(23, 'Rodrigo Daniel', 'Chavez Jerez', 1834300293, 'Esmeraldas', '2024-04-03', '', 'Persona con buenos modales', '', '2024-04-01', 'Bodega', 'Logística', 'Pichincha', 900.00, 'Parcial', 'Persona con buenas referencias', '004456', 'RETIRADO'),
	(24, 'Andrea Yamile', 'García Ramirez', 1739997736, '', '2024-04-24', 'a.garcia@betty.com', 'Persona extranjera', '', '2024-04-10', 'Guardia', '', 'NJ', 700.00, 'Parcial', 'Persona conflictiva', '07932', 'RETIRADO'),
	(25, 'Ivan Andres', 'DuranAndino', 0, '', '2024-04-10', 'i.duran@ecu.com', 'Sin novedad', '', '2024-04-10', 'Redactor', 'Marketing', 'Guayas', 1400.00, 'Completa', 'Buenas referencias laborales', '009875', 'VIGENTE');
