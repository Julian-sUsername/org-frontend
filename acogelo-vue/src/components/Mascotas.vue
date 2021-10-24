<template>

    <div v-if="loaded" class="information">
        <h1>Mascotas disponibles para adoptar</h1>
        <!-- <h2>Username: <span>{{username}}</span></h2>-->
        <!--<h2>Nombres: <span>{{nombres}}</span></h2>-->
        <!--<h2>Apellidos: <span>{{apellidos}}</span></h2>-->
        <!--<h2>Correo electrónico: <span>{{email}}</span></h2> -->
		<h4>Nombre mascota: <span>{{nombre_masc}}</span></h4>
		<h4>Descripción larga: <span>{{descripcion_larga_masc}}</span></h4>
		<h4>Tipo: <span>{{tipo_masc}}</span></h4>
		<h4>Raza: <span>{{raza_masc}}</span></h4>
		<h4>Edad: <span>{{edad_masc}}</span></h4>
		<h4>Género: <span>{{genero_masc}}</span></h4>
		<h4>Departamento: <span>{{dpto_residencia_masc}}</span></h4>
		<h4>Ciudad: <span>{{ciudad_residencia_masc}}</span></h4>
		<h4>Estado adopción: <span>{{estado_adopcion_masc}}</span></h4>
        <!--<h2>Departamento: <span>{{dpto_residencia}}</span></h2>
        <h2>ciudad: <span>{{ciudad_residencia}}</span></h2>-->
		<div class="footer">
      		<h2>Acogelo 2022</h2>
    	</div>
    </div>

</template>


<script>
	import jwt_decode from "jwt-decode";
	import axios from 'axios';

	export default {
	name: "Mascotas",
	//Se guarda la info que se trae del db
	data: function(){
	return {
		//username: "",
		//nombres: "",
		//apellidos: "",
		//email: "",
		id_masc: "",
		nombre_masc: "",
		descripcion_larga_masc: "",
		tipo_masc: "",
		raza_masc: "",
		edad_masc: "",
		genero_masc: "",
		dpto_residencia_masc: "",
		ciudad_residencia_masc: "",
		estado_adopcion_masc: "",
		descripcion_foto_masc: "",
		user_id: "",
		loaded: false,
		}
	},

	methods: {
	getData: async function () {

	if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
	this.$emit('logOut');
	return;
	}
	//Esperar a verificar
	await this.verifyToken();

	let token = localStorage.getItem("token_access");
	//Desencriptar el access token
	let userId = jwt_decode(token).user_id.toString();

	//axios.get(`https://server-acogelo.herokuapp.com/user/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}})
	//axios.get(`https://server-test-acogelo.herokuapp.com/user/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}})
	//axios.get(`http://localhost:8000/user/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}})
	axios.get(`http://localhost:8000/getMascotas/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}})
	.then((result) => {
		console.log(result)
		console.log(result.data[0])
	//Inicializar los valores cuando se traen del get
		this.id_masc = result.data[0].id_masc;
		this.nombre_masc = result.data[0].nombre_masc;
		this.descripcion_larga_masc = result.data[0].descripcion_larga_masc;
		this.tipo_masc = result.data[0].tipo_masc;
		this.raza_masc = result.data[0].raza_masc;
		this.edad_masc = result.data[0].edad_masc;
		this.genero_masc = result.data[0].genero_masc;
		this.dpto_residencia_masc = result.data[0].dpto_residencia_masc;
		this.ciudad_residencia_masc = result.data[0].ciudad_residencia_masc;
		this.estado_adopcion_masc = result.data[0].estado_adopcion_masc;
		this.descripcion_foto_masc = result.data[0].descripcion_foto_masc;
		this.user_id = result.data[0].user_id;
		//this.username = result.data.username;
		//this.nombres = result.data.nombres;
		//this.apellidos = result.data.apellidos;
		//this.celular = result.data.celular;
		//this.email = result.data.email;
		//this.dpto_residencia = result.data.dpto_residencia;
		//this.ciudad_residencia = result.data.ciudad_residencia;
		//Rederizar la informacion
		this.loaded = true;
	})
	.catch(() => {
	this.$emit('logOut');
	});
	},

	verifyToken: function () {
	//Verificar
	//return axios.post("https://server-acogelo.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}})
	return axios.post("http://localhost:8000/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}})
	.then((result) => {
	//Cambio del storage
	localStorage.setItem("token_access", result.data.access);
	})
	//Por si hay error, get out
	.catch(() => {
	this.$emit('logOut');
	});
	}
	},

	created: async function(){
	this.getData();
	},
	}
</script>


<style>
    .information{
        margin: 0;
        padding: 0%;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
    }

    .information h1{
        font-size: 40px;
        color: #0f1316;
    }

    .information h4{
        font-size: 20px;
        color: #e9983c;
    }

    .information span{
        color: rgb(10, 10, 10);
        font-weight: bold;
    }

	.footer {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 10vh;
		min-height: 100px;

		background-color: #283747;
		color: #e5e7e9;
	}

	.footer h2 {
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>