import {
	Component,
	ViewChild,
	ElementRef,
	OnInit,
	Inject,
	ValueProvider 
} from '@angular/core';


/*const WINDOW_PROVIDER: ValueProvider = {
    provide: Window,
    useValue: window
};*/

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

	@ViewChild('cubeArea') cubeArea: ElementRef;

	

	constructor (@Inject('window') 	public window: Window) {

		return this;

	}


	public ngOnInit (): void {

		let cube: HTMLElement = (
			<HTMLElement>
				this
					.cubeArea
					.nativeElement
		),

			self: AboutComponent = this;

		this
			.window
			.addEventListener(
				'mousemove',
				(
					ev: MouseEvent
				): void => {

					cube
						.style
						.transform = 'rotateX(-'.concat(
							ev.pageY.toString(),
							'deg) rotateY(',
							ev.pageX.toString(),
							'deg)'
						);

				});

	}

}

