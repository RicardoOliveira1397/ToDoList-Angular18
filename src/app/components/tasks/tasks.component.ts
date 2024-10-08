import { Tarefa } from './../../Models/Tarefa';
import { TaskService } from './../../services/task.service';
import { Component, inject, OnInit } from '@angular/core';
import TaskItemComponent from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tarefas: Tarefa[] = [];
  //constructor(private taskService: TaskService) { }
  private taskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (response) => (this.tarefas = response),
      error: (erro) => console.log(`Erro ao obter dados: ${erro}`),
      complete: () => console.log(`Dados recebidos com Sucesso!`),
    });
  }

  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe({
      next: () => {
        this.tarefas = this.tarefas.filter((t) => t.id != tarefa.id);
      },
      error: (erro) => {
        console.log(`Ops! Ocorreu um erro ao realizar a operação: ${erro}`);
      },
      complete: () => console.log(`Deleção realizada com sucesso!`),
    });
  }

  toggleConluido(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe();
  }

  addTask(novaTarefa: Tarefa) {
    this.taskService.addtask(novaTarefa).subscribe({
      next: (tarefa) => {
        this.tarefas.push(tarefa);
      },
    });
  }

  //DEPRECATED
  // ngOnInit(): void {
  //   this.taskService.getTasks().subscribe(
  //     (dado) => {
  //       this.tarefas = dado;
  //       console.log(`Dados recebidos: ${JSON.stringify(dado)}`);
  //     },
  //     (erro) => {
  //       console.log(`Erro ao obter dados: ${erro}`);
  //     }
  //   );
  // }
}
