import { Component, Input, input } from '@angular/core';
import { Tarefa } from '../../Models/Tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export default class TaskItemComponent {
  @Input() itemTarefa!: Tarefa; //o sinal de ! indica que esta propriedade será definida antes do seu uso, mesmo que o typescript não perceba isso. Senão, é necessário inicializar com valor inicial
  faTimes = faTimes;
}
