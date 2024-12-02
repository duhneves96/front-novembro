   // estruturas de dados
            // vetores = 
            // indice sao os lugares de cada

            var cidade = ["Curitiba","Colombo","Pinhais"]
            console.log(cidade)
            //push adiciona novo indice no final
            cidade.push("Araucaria")
            //unshitf adiciona novo indice no inicio
            cidade.unshift("Campo largo")
        
            // LOOPS - laços de repitiçao  'while'
            // var ini = 1;
            // var fim = 10;
           //  while (ini <= fim)
            //{
              //  console.log(fim);
               // fim = fim - 1;
            //}
           

       

            function listar()
            {
                var ini = 0
                var fim = cidade.length - 1;
                var res = "<ul>";

                while (ini <= fim)
            {
                res = res + "<li>"+ cidade[ini] +"</li>";
                ini = ini + 1;
            }
            
                res = res + "</ul>";
                resultado.innerHTML = res;       
            }
            function add()
            {
                var texto = nome.value;
                if (cidade.includes(texto) == false)
            {  
                 
                cidade.push(texto);

                listar();
            }
                
            }

            
            function ordenar () 
            {
                cidade.sort();
                listar ();
            }

            