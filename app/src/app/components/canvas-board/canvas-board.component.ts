import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas-board',
  templateUrl: './canvas-board.component.html',
  styleUrls: ['./canvas-board.component.scss']
})
export class CanvasBoardComponent implements OnInit, AfterViewInit {

  @ViewChild('CanvasRef',{static:false}) CanvasRef:any;

  public canvas_width = document.documentElement.clientWidth/2;
  public canvas_height = document.documentElement.clientHeight/2;

  private cx!: CanvasRenderingContext2D;

  private notePints: Array<any> = [
    {
      Id: 101,
      title: "Note test"
    }
  ];

  @HostListener('document:mousemove',['$event'])
  onMouseMove = (e: any) =>{
    if(e.target.id === 'canvasId'){
      this.write(e)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    this.render()
  }

  private render():any{
    const cnavas_element = this.CanvasRef.nativeElement;
    this.cx = cnavas_element.getContext('2d');

    cnavas_element.width = this.canvas_width;
    cnavas_element.height = this.canvas_height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = "#000"
  }

  private write(res: any):any{
    const cnavas_element: any = this.CanvasRef.nativeElement;
    const rect = cnavas_element.getBoundingClientRect();
    const prev_pos = {
      x: res.clientX - rect.left,
      y: res.clientY - rect.top
    };
    this.writeSingle(prev_pos);  
  };

  private writeSingle (prev_pos: any,emit: boolean = true){
    this.drawNote(prev_pos, {x: prev_pos.x+20, y: prev_pos.y+20})
  };

  private drawNote(prev_pos: any,current_pos: any){
    if(!this.cx){
      return;
    }
    this.cx.beginPath();

    if(prev_pos){
      this.cx.moveTo(prev_pos.x,prev_pos.y);
      this.cx.lineTo(current_pos.x, current_pos.y);
      this.cx.stroke();
    }
  }
}
