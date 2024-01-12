import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() image: string ="../../assets/perfil-de-usuario.webp";//parametro de imagen que recibe una ruta
  @Input() userName: string="User_1215";//parametro de descripción recibe un texto
  @Input() description: string="Agrega tu descripcion para que mas personas sean capaces de conoserte e interactuar contigo segun sus gustos";//parametro de descripción recibe un texto
  

}
