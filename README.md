## **README.md: Livro de Receitas da Família Radtke**

### **Sobre**

Esse projeto é um simples livro de receitas digital, criado para preservar as receitas de família e facilitar o dia a dia na cozinha. Com ele, você pode pesquisar por receitas ou ingredientes e encontrar tudo o que precisa para preparar aquele prato especial.

### **Como funciona**

1. **Pesquisa:**
   * Digite o nome da receita ou de um ingrediente no campo de pesquisa.
   * A aplicação irá procurar por todas as receitas que contenham o termo pesquisado, tanto no título quanto na lista de ingredientes.

2. **Resultados:**
   * Os resultados da pesquisa serão exibidos na tela, com as seguintes informações:
     * **Título da receita:** O nome completo da receita.
     * **Ingredientes:** Uma lista completa dos ingredientes necessários.
     * **Modo de preparo:** As instruções passo a passo para preparar a receita.

### **Como foi construído**

* **HTML:** A estrutura básica da página, definindo os elementos como cabeçalho, corpo, rodapé e os campos de pesquisa e resultados.
* **CSS:** Estilizando a página para deixá-la mais bonita e fácil de usar.
* **JavaScript:** A parte mais divertida! O JavaScript é responsável por:
   * **Capturar a pesquisa:** Quando você clica no botão "Pesquisar", o JavaScript pega o texto que você digitou.
   * **Procurar nas receitas:** O JavaScript varre todas as receitas, comparando o termo pesquisado com o título e os ingredientes de cada uma.
   * **Exibir os resultados:** Se encontrar alguma receita correspondente, o JavaScript cria um novo elemento HTML para cada receita e o adiciona à seção de resultados.

### **Tecnologias utilizadas**

* **HTML5:** Para a estrutura da página.
* **CSS3:** Para estilizar a página.
* **JavaScript:** Para a lógica da aplicação.

### **Contribuições**

Sinta-se à vontade para contribuir com novas receitas, correções de bugs ou sugestões de melhorias! Basta criar um fork do repositório e enviar um pull request.

### **Agradecimentos**

Agradeço à Alura pela oportunidade de aprender e criar esse projeto.

**Observação:** Para que essa aplicação funcione corretamente, é necessário ter um arquivo `receitas.js` com um array de objetos representando as receitas. Cada objeto deve ter as propriedades `titulo`, `ingredientes` (um array de strings) e `preparo` (uma string com o modo de preparo).

**Exemplo de `receitas.js`:**

```javascript
const receitas = [
  {
    titulo: "Bolo de Chocolate",
    ingredientes: ["chocolate em pó", "açúcar", "ovos", "farinha"],
    preparo: "Misture todos os ingredientes e asse em forno pré-aquecido."
  },
  // ... outras receitas
];
```

**Dica:** Para deixar o projeto ainda mais completo, você pode adicionar funcionalidades como:
* **Favoritar receitas:** Permita que o usuário marque suas receitas favoritas.
* **Ordenar resultados:** Permita que o usuário ordene os resultados por título, ingrediente ou data de criação.
* **Adicionar comentários:** Permita que os usuários deixem comentários sobre as receitas.

**Divirta-se cozinhando!** 

## **Tradução para o inglês:**

**README.md: Radtke Family Recipe Book**

**About**

This project is a simple digital recipe book, created to preserve family recipes and make everyday cooking easier. With it, you can search for recipes or ingredients and find everything you need to prepare that special dish.

**How it works**

1. **Search:**
   * Type the name of the recipe or an ingredient in the search field.
   * The application will search for all recipes that contain the searched term, both in the title and in the list of ingredients.

2. **Results:**
   * The search results will be displayed on the screen, with the following information:
     * **Recipe title:** The full name of the recipe.
     * **Ingredients:** A complete list of the necessary ingredients.
     * **Instructions:** The step-by-step instructions to prepare the recipe.

**How it was built**

* **HTML:** The basic structure of the page, defining elements such as header, body, footer, and search and results fields.
* **CSS:** Styling the page to make it more beautiful and user-friendly.
* **JavaScript:** The most fun part! JavaScript is responsible for:
   * **Capturing the search:** When you click the "Search" button, JavaScript gets the text you typed.
   * **Searching in recipes:** JavaScript scans all recipes, comparing the searched term with the title and ingredients of each.
   * **Displaying the results:** If it finds any matching recipes, JavaScript creates a new HTML element for each recipe and adds it to the results section.

**Technologies used**

* **HTML5:** For the page structure.
* **CSS3:** To style the page.
* **JavaScript:** For the application logic.

**Contributions**

Feel free to contribute with new recipes, bug fixes, or suggestions for improvements! Just create a fork of the repository and send a pull request.

**Acknowledgments**

I would like to thank Alura for the opportunity to learn and create this project.

**Note:** For this application to work correctly, you need to have a `receitas.js` file with an array of objects representing the recipes. Each object must have the properties `titulo`, `ingredientes` (an array of strings) and `preparo` (a string with the preparation method).

**Example of `receitas.js`:**

```javascript
const receitas = [
  {
    titulo: "Chocolate Cake",
    ingredientes: ["cocoa powder", "sugar", "eggs", "flour"],
    preparo: "Mix all ingredients and bake in a preheated oven."
  },
  // ... other recipes
];
```

**Tip:** To make the project even more complete, you can add features such as:
* **Favorite recipes:** Allow the user to mark their favorite recipes.
* **Sort results:** Allow the user to sort results by title, ingredient or creation date.
* **Add comments:** Allow users to leave comments on recipes.

**Have fun cooking!** 
