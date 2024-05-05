const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

// se configura el servidor para que pueda recibir datos en formato JSON
app.use(cors());
app.use(express.json());

// se crea la conexion a la base de datos
const db = mysql.createConnection({
    host: "mysqldbcontainer",
    user: "root",
    password: "",
    database: "provedatosdb"
})

// se reciben los datos del formulario y se insertan en la base de datos
app.post("/create", (req, res) => {
  const nombres = req.body.nombres;
  const apellidos = req.body.apellidos;
  const cedula = req.body.cedula;
  const provincia = req.body.provincia;
  const nacimiento = req.body.nacimiento;
  const email = req.body.email;
  const observaciones = req.body.observaciones;
  const url_foto = req.body.foto;
  const ingreso = req.body.ingreso;
  const cargo = req.body.cargo;
  const departamento = req.body.departamento;
  const provilab = req.body.proviLab;
  const sueldo = req.body.sueldo;
  const jornada = req.body.jornada;
  const observlab = req.body.observLab;
  const codigo = req.body.codigo;
  const estado = req.body.estado;

  db.query('INSERT INTO empleados(nombres,apellidos,cedula,provincia,f_nacimiento,email,observaciones,url_foto,ingreso,cargo,departamento,provilab,sueldo,jornada,observlab,codigo,estado) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [nombres,apellidos,cedula,provincia,nacimiento,email,observaciones,url_foto,ingreso,cargo,departamento,provilab,sueldo,jornada,observlab,codigo,estado],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
})

// con esta peticion voy a mostrar los datos de los empleados
app.get("/empleados", (req, res) => {
  db.query('SELECT * FROM empleados',
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
})


app.put("/update", (req, res) => {
  const id = req.body.id;
  const nombres = req.body.nombres;
  const apellidos = req.body.apellidos;
  const cedula = req.body.cedula;
  const provincia = req.body.provincia;
  const nacimiento = req.body.nacimiento;
  const email = req.body.email;
  const observaciones = req.body.observaciones;
  const url_foto = req.body.foto;
  const ingreso = req.body.ingreso;
  const cargo = req.body.cargo;
  const departamento = req.body.departamento;
  const provilab = req.body.proviLab;
  const sueldo = req.body.sueldo;
  const jornada = req.body.jornada;
  const observlab = req.body.observLab;
  const codigo = req.body.codigo;
  const estado = req.body.estado;

  db.query('UPDATE empleados SET nombres = ?, apellidos = ?, cedula = ?, provincia = ?, f_nacimiento = ?, email = ?, observaciones = ?, url_foto = ?, ingreso = ?, cargo = ?, departamento = ?, provilab = ?, sueldo = ?, jornada = ?, observlab = ?, codigo = ?, estado = ? WHERE id = ?', [nombres,apellidos,cedula,provincia,nacimiento,email,observaciones,url_foto,ingreso,cargo,departamento,provilab,sueldo,jornada,observlab,codigo,estado,id],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
})


app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  
  db.query('DELETE FROM empleados WHERE id = ?',id,
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
})

//el servidor escucha en el puerto 3001
app.listen(3001, () => {
  console.log("Server is running on port 3001")
})