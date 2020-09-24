главный класс TODO
он умеет все, но не сам
что-то типа оркестратора
- addTask(title)
- deleteTask(id)
- toggleTask(id)
его констуктор принимает 2 объекта - taskManager и render, они отвечают за логику создания и визуализации
TODO их просто дергает
например, для addTask сначала нужно вызвать taskManager.addTask(title) а после отобразить результат через рендер

TaskManager 
отвечает только за создание тасков (класса Task)
в конструкторе принимет Store, который уже их сохраняет в себя

Task
у него есть 
id
title
isDone
toggle()

Render
отвечает за визуализацию, в нашем случае просто выводит таски в консоль
имеет метод display()

Store
отвечает за хранение данных
методы
save(task)
update(task)
delete(taskId)

по итогу должен получиться такой объект, который умеет все

const todo = new TODO(new TaskManager(new Store()), new Render())