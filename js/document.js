function Pokemon(n,t,v,a,i) 
{
	this.nombre = n,
	this.tipo = t,
	this.vida = v,
	this.ataque = a
	this.image = i
	
	if(eligePokemon == 0) 
	{
		this.image = "images/pikachu.gif";
	}
	else if(eligePokemon == 1)
	{
		this.image = "images/charmander.gif";
	}
	else if(eligePokemon == 2)
	{
		this.image = "images/squirte.gif";
	}
	else if(eligePokemon == 3)
	{
		this.image = "images/bulbasaur.gif";
	}
	else if(eligePokemon == 4) 
	{
		this.image ="images/entei.gif";
	}
}
function inicio() 
{
	eligePokemon = prompt("¿Qué pokemon quieres elegir? \n\n 0.Pikachu \n 1.Charmander \n 2.Squirtle \n 3.Bulbasaur \n 4.Entei \n\n Escoge y coloca un numero del 0 al 4", 0);

	var pikachu = 0;
	var charmander = 1;
	var squirtle = 2;
	var bulbasaur = 3;
	var entei = 4;

	var pikachu = new Pokemon("Pikachu", "Electrico", 100, 55);
	var charmander = new Pokemon("Charmander", "Fuego", 100, 35);
	var squirtle = new Pokemon("Squirtle", "Agua", 100, 40);
	var bulbasaur = new Pokemon("Bulbasaur", "Planta", 100, 40);
	var entei = new Pokemon("Entei", "Legendario", 200, 60)

	if (eligePokemon == 0) 
		{
			imagePokemon.src = pikachu.image;
			nombrePokemon.innerText = pikachu.nombre; 
			datosPokemon.innerText = 
						 			"\nEs un pokemon tipo " + pikachu.tipo +
                         			"\n tiene un poder de " + pikachu.ataque +
                         			"\n tiene una vida de " + pikachu.vida;
		}
	else if (eligePokemon == 1) 
		{
			imagePokemon.src = charmander.image;
			nombrePokemon.innerText = charmander.nombre; 
			datosPokemon.innerText = 
						 			"\nEs un pokemon tipo " + charmander.tipo +
                         			"\n tiene un poder de " + charmander.ataque +
                         			"\n tiene una vida de " + charmander.vida;
		}
	else if (eligePokemon == 2) 
		{
			imagePokemon.src = squirtle.image;
			nombrePokemon.innerText = squirtle.nombre; 
			datosPokemon.innerText = 
						 			"\nEs un pokemon tipo " + squirtle.tipo +
                         			"\n tiene un poder de " + squirtle.ataque +
                         			"\n tiene una vida de " + squirtle.vida;
		}
	else if (eligePokemon == 3) 
		{
			imagePokemon.src = bulbasaur.image;
			nombrePokemon.innerText = bulbasaur.nombre; 
			datosPokemon.innerText = 
						 			"\nEs un pokemon tipo " + bulbasaur.tipo +
                         			"\n tiene un poder de " + bulbasaur.ataque +
                         			"\n tiene una vida de " + bulbasaur.vida;
		}
	else if (eligePokemon == 4) 
		{
			imagePokemon.src = entei.image;
			nombrePokemon.innerText = entei.nombre; 
			datosPokemon.innerText = 
						 			"\nEs un pokemon tipo " + entei.tipo +
                         			"\n tiene un poder de " + entei.ataque +
                         			"\n tiene una vida de " + entei.vida;
        }

	else if(eligePokemon <= 6 )
	{
		document.write("<h3>Escogiste un numero superior a 4!!</h3>");

	}


}