class ToDo{
    constructor(name , dueDate , list ){
        this.name = name;
        this.dueDate = dueDate;
        this.list = list;
    }
}

function main(){
    var newToDoList = new ToDo("Kenn", "Next Week", ["Do the dishes", "Wash your clothes"]);
    document.write(newToDoList.list);
}

main();