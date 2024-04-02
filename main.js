import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let answers = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: "what you want to add yoyr todos?"
        },
        {
            name: 'addmore',
            type: 'confirm',
            message: 'do you want to admore?',
            default: "false"
        },
    ]);
    todos.push(answers.todo);
    condition = answers.addmore;
    console.log(todos);
}
