import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //recibo de componente padre
  @Input()
  public characterList:Character[]=[{
    name:"Trunks",
    power:10
  }]



  //creo un evento tipo string al componente padre (main-page)
  @Output()
  public onDelete:EventEmitter<string>= new EventEmitter();

  //funcion que transmite el evento
  onDeleteCharacter(id?:string):void{
    if(!id) return;
    this.onDelete.emit(id);
  }
}
