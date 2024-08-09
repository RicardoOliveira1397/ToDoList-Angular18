import { Tarefa } from '../../Models/Tarefa';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tarefas: Tarefa[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (response) => (this.tarefas = response),
      error: (erro) => console.log(`Erro ao obter dados: ${erro}`),
      complete: () => console.log(`Dados recebidos com Sucesso!`),
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
